const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopMotion = window.matchMedia('(min-width: 951px) and (hover: hover)');
const header = document.querySelector<HTMLElement>('.site-header');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const additions: [string, 'fade-up' | 'image'][] = [
  ['.intro-grid h2, .intro-grid > div, .feature-story-content, .audience-section h2, .showreel-copy, .service-grid h2, .service-grid > div, .concepts-section h2, .reference-teaser .shell > div, .artist-band-copy, .uses-section .shell > h2, .planning-section .shell > h2, .materials-section .shell > h2, .planner-section .shell > h2, .reference-empty .shell > h2, .impression-section .shell > h2', 'fade-up'],
  ['.feature-story-image, .artist-band-image, .showreel-frame:has(img), .impression-grid > div', 'image'],
  ['.audience-item, .concepts-list article, .service-list li, .planning-line li, .materials-list span', 'fade-up'],
];

for (const [selector, effect] of additions) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    element.dataset.reveal = effect;
  });
}

document.querySelectorAll<HTMLElement>('.audience-grid, .concepts-list, .service-list, .planning-line, .materials-list').forEach((group) => {
  Array.from(group.children).forEach((child, index) => {
    if (child instanceof HTMLElement) child.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 85}ms`);
  });
});

const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
let revealObserver: IntersectionObserver | undefined;
let journeyObserver: IntersectionObserver | undefined;
let desktopJourneyObserver: IntersectionObserver | undefined;
let frame = 0;
let listeningForScroll = false;

const journeys = Array.from(document.querySelectorAll<HTMLElement>('[data-journey]'));
const showAll = () => {
  document.documentElement.classList.remove('motion-ready');
  revealItems.forEach((item) => item.classList.add('is-visible'));
  journeys.forEach((journey) => {
    journey.style.setProperty('--journey-progress', '1');
    journey.querySelectorAll('li').forEach((step) => step.classList.add('is-active'));
  });
};

const updateScrollMotion = () => {
  frame = 0;
  if (reducedMotion.matches || !desktopMotion.matches) return;
  const hero = document.querySelector<HTMLElement>('.home-hero-media img:not(.hero-mobile-poster)');
  if (hero) {
    const rect = hero.parentElement?.getBoundingClientRect();
    if (rect && rect.bottom > 0 && rect.top < window.innerHeight) {
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)));
      hero.style.setProperty('--hero-parallax', `${(progress * 8).toFixed(1)}px`);
    }
  }
  const feature = document.querySelector<HTMLElement>('.feature-story-image img');
  if (feature) {
    const rect = feature.parentElement?.getBoundingClientRect();
    if (rect && rect.bottom > 0 && rect.top < window.innerHeight) {
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      feature.style.setProperty('--feature-zoom', (1 + progress * 0.025).toFixed(3));
    }
  }
  document.querySelectorAll<HTMLElement>('.journey').forEach((journey) => {
    if (!desktopMotion.matches || !journey.classList.contains('journey-entered')) return;
    const rect = journey.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.78 - rect.top) / Math.max(rect.height * 0.55, 1)));
    journey.style.setProperty('--journey-progress', progress.toFixed(3));
    const steps = journey.querySelectorAll('li');
    steps.forEach((step, index) => step.classList.toggle('is-active', progress >= index / steps.length));
  });
};

const queueScrollMotion = () => {
  if (!frame) frame = window.requestAnimationFrame(updateScrollMotion);
};

const initMotion = () => {
  revealObserver?.disconnect();
  journeyObserver?.disconnect();
  desktopJourneyObserver?.disconnect();

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

  revealItems.forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight * 0.92) item.classList.add('is-visible');
    else revealObserver?.observe(item);
  });
  document.documentElement.classList.add('motion-ready');

  if (desktopMotion.matches) {
    desktopJourneyObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('journey-entered');
        observer.unobserve(entry.target);
        queueScrollMotion();
      });
    }, { rootMargin: '0px 0px -15% 0px' });
    journeys.forEach((journey) => desktopJourneyObserver?.observe(journey));
  } else {
    journeyObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-active');
        observer.unobserve(entry.target);
        const journey = entry.target.closest<HTMLElement>('.journey');
        const steps = Array.from(journey?.querySelectorAll('li') ?? []);
        const activeCount = steps.filter((step) => step.classList.contains('is-active')).length;
        journey?.style.setProperty('--journey-progress', String(activeCount / Math.max(steps.length, 1)));
      });
    }, { rootMargin: '0px 0px -20% 0px' });
    journeys.forEach((journey) => journey.querySelectorAll('li').forEach((step) => journeyObserver?.observe(step)));
  }

  if (!listeningForScroll && document.querySelector('.home-hero-media, .feature-story-image, .journey')) {
    window.addEventListener('scroll', queueScrollMotion, { passive: true });
    listeningForScroll = true;
  }
  queueScrollMotion();
};

reducedMotion.addEventListener('change', initMotion);
desktopMotion.addEventListener('change', initMotion);
initMotion();
