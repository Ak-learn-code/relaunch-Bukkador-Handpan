export type ImageAsset = { src: string; alt: string; position?: string; mobilePosition?: string; concept?: boolean; width?: number; height?: number };
export type ContentSection = {
  title: string;
  text: string;
  points?: string[];
  image?: ImageAsset;
  tone?: 'light' | 'dark' | 'green';
};
export type FAQ = { question: string; answer: string };
export type SitePage = {
  slug: string;
  label: string;
  title: string;
  seoTitle?: string;
  eyebrow?: string;
  description: string;
  intro: string;
  image: ImageAsset;
  details: string[];
  sections: ContentSection[];
  faqs?: FAQ[];
  closing: string;
  cta?: string;
};

export const site = {
  name: 'Bukkador Handpan',
  artist: 'Michael Noll',
  email: 'info@bukkador-handpan.de',
  phone: '+49 160 84 19 320',
  phoneHref: 'tel:+491608419320',
  origin: 'https://ak-learn-code.github.io/relaunch-Bukkador-Handpan',
};

export const navigation = [
  { label: 'Corporate Events', href: '/corporate-events/' },
  { label: 'Hochzeiten', href: '/hochzeiten/' },
  { label: 'Eventagenturen', href: '/eventagenturen/' },
  { label: 'Aktuelle Termine & Referenzen', href: '/referenzen/' },
  { label: 'Bukkador Academy', href: '/academy/' },
  { label: 'Über Bukkador', href: '/ueber-bukkador/' },
];

export const images = {
  instrument: { src: '/images/handpan-closeup.webp', alt: 'Nahaufnahme einer Handpan im warmen Licht', width: 1600, height: 1067 },
  artistWide: { src: '/images/michael-noll-wide.webp', alt: 'Handpan-Artist Michael Noll mit Instrument vor einer Holzwand', position: '72% center', width: 1600, height: 584 },
  artistPortrait: { src: '/images/michael-noll-portrait.webp', alt: 'Michael Noll spielt Handpan im Freien', width: 900, height: 1046 },
  lesson: { src: '/images/handpan-lesson.webp', alt: 'Michael Noll im Handpan-Unterricht mit einer Teilnehmerin', width: 1200, height: 723 },
  workshop: { src: '/images/handpan-workshop.webp', alt: 'Michael Noll zeigt zwei Teilnehmenden das Handpan-Spiel', width: 1200, height: 800 },
  homeEvent: { src: '/images/placeholders/home-hero-event.webp', alt: 'Konzeptmotiv: Handpan-Performance mit Gästen bei einem Abendempfang', mobilePosition: '62% center', concept: true, width: 1920, height: 1080 },
  corporateReception: { src: '/images/placeholders/corporate-reception.webp', alt: 'Konzeptmotiv: Handpan-Artist und Gäste bei einem Firmenempfang', mobilePosition: '45% center', concept: true, width: 1600, height: 1067 },
  corporateDinner: { src: '/images/placeholders/corporate-dinner.webp', alt: 'Konzeptmotiv: Handpan-Performance bei einem Dinner-Event', position: '85% center', mobilePosition: '100% center', concept: true, width: 1600, height: 1067 },
  corporateDetail: { src: '/images/placeholders/corporate-detail.webp', alt: 'Konzeptmotiv: Hände an einer Handpan im warmen Eventlicht', mobilePosition: '35% center', concept: true, width: 1600, height: 1067 },
  agencyBackstage: { src: '/images/placeholders/agency-backstage.webp', alt: 'Konzeptmotiv: Handpan-Artist bereitet eine Performance mit eigener Technik vor', position: '68% center', mobilePosition: '68% center', concept: true, width: 1600, height: 1067 },
  weddingCeremony: { src: '/images/placeholders/wedding-ceremony.webp', alt: 'Konzeptmotiv: Handpan-Artist begleitet eine freie Trauung im Garten', position: '35% center', mobilePosition: '20% center', concept: true, width: 1600, height: 1067 },
  weddingReception: { src: '/images/placeholders/wedding-reception.webp', alt: 'Konzeptmotiv: Handpan-Musik begleitet Gespräche bei einem Sektempfang', mobilePosition: '52% center', concept: true, width: 1600, height: 1067 },
  weddingDinner: { src: '/images/placeholders/wedding-dinner.webp', alt: 'Konzeptmotiv: Handpan-Performance neben einer gedeckten Hochzeitstafel', position: '0% center', mobilePosition: '12% center', concept: true, width: 1600, height: 1067 },
  eventAtmosphere: { src: '/images/placeholders/event-atmosphere.webp', alt: 'Konzeptmotiv: Handpan-Performance mit Gästen in einem warm beleuchteten Raum', mobilePosition: '38% center', concept: true, width: 1920, height: 1080 },
} satisfies Record<string, ImageAsset>;

export const homeFaqs: FAQ[] = [
  { question: 'Für welche Veranstaltungen ist Bukkador buchbar?', answer: 'Für Firmenveranstaltungen, Empfänge, Galas, Messen, hochwertige Hochzeiten und weitere besondere Anlässe. Die musikalische Rolle wird auf Anlass und Ablauf abgestimmt.' },
  { question: 'Wie lange dauert eine Performance?', answer: 'Üblich ist die musikalische Begleitung eines Veranstaltungsabschnitts über zwei bis vier Stunden, mit mehreren Sets und passenden Pausen. Dauer und Dramaturgie stimmen wir individuell ab.' },
  { question: 'Ist Technik vorhanden?', answer: 'Ja. Michael Noll bringt seine Handpans und ein eigenes Soundsystem mit. Aufbau, Abbau und die Abstimmung der technischen Details gehören zur Planung.' },
  { question: 'Wo ist Bukkador buchbar?', answer: 'Der Schwerpunkt liegt in Rhein-Neckar und Rhein-Main. Buchungen in ganz Deutschland sind möglich.' },
  { question: 'Was kostet ein Auftritt?', answer: 'Jedes Event wird individuell kalkuliert. Datum, Ort, Dauer, Ablauf und technische Rahmenbedingungen fließen in das Angebot ein.' },
];

export const pages: SitePage[] = [
  {
    slug: 'corporate-events', label: 'Corporate Events',
    title: 'Handpan Live-Musik für Corporate Events', seoTitle: 'Handpan Live-Musik für Firmenfeiern & Corporate Events', eyebrow: 'Live-Musik für Unternehmen',
    description: 'Bukkador Handpan begleitet Firmenveranstaltungen, Empfänge, Messen und Galas mit professioneller Live-Musik. Rhein-Neckar, Rhein-Main und deutschlandweit.',
    intro: 'Ein außergewöhnlicher Live-Act für Empfänge, Firmenfeiern, Galas, Messen und Dinner-Events. Michael Noll stimmt die Performance auf Atmosphäre, Raum und Ablauf ab.',
    image: images.corporateReception,
    details: ['Empfang · Dinner · Messe · Gala', 'Eigene Tontechnik', 'Rhein-Neckar · Rhein-Main · deutschlandweit'],
    sections: [
      { title: 'Musik, die Ihren Ablauf versteht.', text: 'Ob Ankommen, Networking, Dinner oder ein bewusst gesetzter Programmpunkt: Die Performance wird auf Atmosphäre, Raum und Zeitplan abgestimmt. Mehrere Sets über zwei bis vier Stunden können einen ganzen Veranstaltungsabschnitt musikalisch verbinden.', image: images.corporateDinner },
      { title: 'Eine unkomplizierte Komplettlösung.', text: 'Für die Planung zählt Verlässlichkeit. Bukkador bringt Instrumente und ein eigenes MAUI-Soundsystem mit, übernimmt Auf- und Abbau und stimmt alle relevanten Details mit Ihnen oder Ihrer Agentur ab.', points: ['Individuelle Abstimmung vor dem Event', 'Eigene Instrumente und Tontechnik', 'Mehrere Performance-Sets mit Pausen', 'Deutschlandweit buchbar'], tone: 'green' },
      { title: 'Für Momente, die in Erinnerung bleiben.', text: 'Die Handpan verbindet einen unverwechselbaren Klang mit einer ruhigen, offenen Präsenz. So entsteht ein Live-Erlebnis, das hochwertige Veranstaltungen bereichert, ohne ihren Charakter zu überdecken.', image: images.corporateDetail },
    ],
    faqs: [homeFaqs[1], homeFaqs[2], homeFaqs[4]],
    closing: 'Erzählen Sie uns von Ihrem Event. Gemeinsam finden wir den passenden musikalischen Rahmen.',
    cta: 'Corporate Event anfragen',
  },
  {
    slug: 'hochzeiten', label: 'Hochzeiten',
    title: 'Handpan Live-Musik für besondere Hochzeiten.', seoTitle: 'Handpan Hochzeit: Live-Musik für Trauung & Sektempfang', eyebrow: 'Für Paare & Wedding Planner',
    description: 'Handpan-Musik von Bukkador für freie Trauung, Sektempfang und Dinner. Persönlich geplant für Brautpaare, Wedding Planner und Locations.',
    intro: 'Manche Augenblicke brauchen keine große Geste. Die warmen, sphärischen Klänge der Handpan geben einer Hochzeit eine besondere Atmosphäre – bei der freien Trauung, zum Empfang oder als musikalischer Faden durch das Dinner.',
    image: images.weddingCeremony,
    details: ['Freie Trauung · Empfang · Dinner', 'Für Paare & Wedding Planner', 'Eigene Technik'],
    sections: [
      { title: 'Ein Klang für Ihren Moment.', text: 'Michael Noll gestaltet die Musik passend zum Ablauf und zur Stimmung Ihrer Feier. Die Handpan kann einen stillen Moment betonen, Gäste beim Ankommen begleiten oder einem Empfang eine unverwechselbare Note geben.', image: images.weddingReception },
      { title: 'Einfach zu planen. Schön zu erleben.', text: 'Ob direkt mit dem Paar, einer Hochzeitsplanung oder der Location: Vorab klären wir Ablauf, Spielorte und die technischen Bedingungen. Instrumente und eigenes Soundsystem bringt Bukkador mit; Auf- und Abbau sind Teil der Vorbereitung.', points: ['Persönliche Abstimmung', 'Indoor oder Outdoor nach Absprache', 'Mehrere musikalische Sets möglich', 'Technik und Aufbau inklusive'], tone: 'green' },
      { title: 'Von der Trauung bis zum Ausklang.', text: 'Einzelne Höhepunkte oder eine längere Begleitung über mehrere Veranstaltungsphasen sind möglich. Das konkrete Konzept entsteht aus Ihrem Tag – nicht aus einem starren Stundenpaket.', image: images.weddingDinner },
    ],
    faqs: [
      { question: 'Kann Bukkador Trauung und Empfang begleiten?', answer: 'Ja. Je nach Ablauf können einzelne Momente oder mehrere Phasen musikalisch gestaltet werden. Die Details klären wir vorab.' },
      homeFaqs[2], homeFaqs[4],
    ],
    closing: 'Teilen Sie Datum, Ort und Ihre Ideen mit. Bukkador erstellt ein individuelles Angebot für Ihren Tag.',
    cta: 'Hochzeit unverbindlich anfragen',
  },
  {
    slug: 'eventagenturen', label: 'Eventagenturen',
    title: 'Ein Live-Act, auf den Sie sich verlassen können.', seoTitle: 'Handpan Live-Act für Eventagenturen', eyebrow: 'Für Eventagenturen',
    description: 'Bukkador Handpan als professioneller Live-Act für Eventagenturen: individuelle Performance, eigene Technik und direkte Abstimmung – deutschlandweit.',
    intro: 'Bukkador unterstützt Eventagenturen mit direkter Kommunikation, eigener Technik und flexiblen Performance-Konzepten – abgestimmt auf Ihr Briefing und Ihre Produktion.',
    image: images.agencyBackstage,
    details: ['Direkte Abstimmung', 'Technik aus einer Hand', 'Deutschlandweit buchbar'],
    sections: [
      { title: 'Ein Format mit Spielraum.', text: 'Dezente Atmosphäre beim Empfang, akzentuierte Live-Momente oder mehrere Sets über einen Veranstaltungsabschnitt: Die Handpan-Performance lässt sich in unterschiedliche Dramaturgien integrieren.', image: images.artistWide },
      { title: 'Ein Ansprechpartner. Klare Planung.', text: 'Michael Noll stimmt Performance, Timing, Spielort und technische Anforderungen direkt mit Ihrem Team ab. Eigenes Equipment und Auf- und Abbau vereinfachen die Umsetzung vor Ort.', points: ['Briefing und Ablaufabstimmung', 'Eigene Handpans und MAUI-PA-System', 'Flexible Sets über zwei bis vier Stunden', 'Buchungen im gesamten Bundesgebiet'], tone: 'green' },
      { title: 'Für langfristige Zusammenarbeit.', text: 'Wenn Sie für künftige Projekte einen außergewöhnlichen Live-Act suchen, lernen wir uns gern kennen. Senden Sie ein konkretes Briefing oder fragen Sie unverbindlich nach einem Künstlerprofil und der Verfügbarkeit.', image: images.artistPortrait },
    ],
    faqs: [homeFaqs[1], homeFaqs[2], homeFaqs[3]],
    closing: 'Senden Sie Ihr Briefing oder fragen Sie die Verfügbarkeit für ein kommendes Event an.',
    cta: 'Bukkador für Ihre Produktion anfragen',
  },
  {
    slug: 'ueber-bukkador', label: 'Über Bukkador',
    title: 'Michael Noll. Handpan-Artist aus Worms.', eyebrow: 'Die Person hinter Bukkador',
    description: 'Lernen Sie Michael Noll kennen: Handpan-Musiker und Gründer von Bukkador Handpan aus Worms. Live-Musik und Handpan-Unterricht mit persönlicher Handschrift.',
    intro: 'Hinter Bukkador steht Michael Noll – Handpan-Musiker und Coach aus Worms. Seine Musik lebt von dem besonderen Klang der Instrumente und von der Aufmerksamkeit für die Menschen im Raum.',
    image: images.artistPortrait,
    details: ['Handpan-Artist & Coach', 'Aus Worms', 'Live-Musik & Academy'],
    sections: [
      { title: 'Klang mit Persönlichkeit.', text: 'Die Handpan hat viele Klangfarben. Michael Noll nutzt unterschiedliche Instrumente und Scales, um eine Atmosphäre zu schaffen, die zum Anlass passt. Mal wird die Musik zum Mittelpunkt, mal trägt sie den Moment im Hintergrund.', image: images.instrument },
      { title: 'Für Events vorbereitet.', text: 'Vor einem Auftritt stimmt Michael Anlass, Ablauf, Spielort und Technik ab. Handpans und eigenes MAUI-Soundsystem bringt er mit; Aufbau und Soundcheck sind Teil seiner Vorbereitung.', image: images.artistWide, tone: 'green' },
      { title: 'Die Academy als eigener Weg.', text: 'Neben Live-Performances gibt Michael seine Faszination für die Handpan in Schnupperkursen, Einzelunterricht und Workshops weiter.', image: images.lesson },
    ],
    closing: 'Lernen Sie Bukkador für Ihre Veranstaltung kennen.',
  },
  {
    slug: 'referenzen', label: 'Referenzen',
    title: 'Referenzen & Events', eyebrow: 'Bukkador live',
    description: 'Einblicke in das bisherige Veranstaltungsprogramm von Bukkador Handpan und die musikalischen Einsatzmöglichkeiten für Events.',
    intro: 'Live-Musik lässt sich am besten erleben. Hier finden Sie öffentlich angekündigte Termine aus dem Bukkador-Veranstaltungskalender und Einblicke in Michaels Arbeit.',
    image: images.eventAtmosphere,
    details: ['Ausgewählte Veranstaltungen', 'Event-Impressionen', 'Öffentliche Termine'],
    sections: [
      { title: 'Aus dem Kalender.', text: 'Wormser Kulturnacht, Open Stage im KulturGUT Bechtolsheim, Hofkonzert in Offstein und Handwerkermarkt Franklin in Mannheim: Diese öffentlich angekündigten Termine aus 2026 zeigen, wie unterschiedlich der Rahmen für Handpan-Musik sein kann.', image: images.artistPortrait },
      { title: 'Live statt Inszenierung.', text: 'Die Musik von Michael Noll entsteht im direkten Kontakt mit Raum und Publikum. Die Bilder auf dieser Seite zeigen den Künstler und sein Instrument. Welche Atmosphäre Bukkador für Ihr Event schaffen kann, besprechen wir am besten persönlich.', image: images.instrument, tone: 'green' },
    ],
    closing: 'Sie möchten Bukkador für Ihre Veranstaltung buchen? Senden Sie uns Ihre Eckdaten.',
    cta: 'Event-Verfügbarkeit prüfen',
  },
  {
    slug: 'academy', label: 'Academy',
    title: 'Handpan spielen lernen', eyebrow: 'Bukkador Academy',
    description: 'Bukkador Handpan Academy: Schnupperkurs, Einzelunterricht, Handpan for two und Workshops mit Michael Noll in Worms und Umgebung.',
    intro: 'Der erste Ton auf einer Handpan ist oft der Anfang von etwas Neuem. Michael Noll begleitet Anfänger und Fortgeschrittene im persönlichen Unterricht – entspannt, praxisnah und mit Raum für den eigenen Ausdruck.',
    image: images.workshop,
    details: ['Schnupperkurs', 'Einzelunterricht', 'Handpan for two'],
    sections: [
      { title: 'Entdecken, wie es sich anfühlt.', text: 'Im zweistündigen Schnupperkurs lernen Sie unterschiedliche Skalen und erste Anschlagtechniken kennen. Michael bringt mehrere Handpans mit, damit Sie ihre Klangfarben direkt erleben können.', image: images.instrument },
      { title: 'Individuell weiterkommen.', text: 'Im 1:1-Intensivkurs arbeiten Sie an Grooves, Melodien und Patterns – passend zu Ihrem Stand und Ihren Zielen. Der Unterricht ist für Einsteiger und Menschen mit eigener Handpan gedacht.', image: images.lesson, tone: 'green' },
      { title: 'Gemeinsam spielen.', text: '„Handpan for two“ ist ein gemeinsames Musikerlebnis für Paare, Freunde oder Familienmitglieder. Workshops in kleinen Gruppen sind ebenfalls möglich. Fragen Sie nach Terminen und dem passenden Format.', image: images.workshop },
    ],
    closing: 'Fragen Sie nach einem Kurs oder Workshop. Schreiben Sie direkt an Michael Noll.',
  },
  {
    slug: 'event-kuenstler-rhein-neckar', label: 'Rhein-Neckar',
    title: 'Ein Klang für Rhein-Neckar.', seoTitle: 'Event-Künstler Rhein-Neckar: Handpan Live-Musik', eyebrow: 'Live-Musik aus Worms',
    description: 'Bukkador Handpan aus Worms für Corporate Events, Empfänge und Hochzeiten in der Rhein-Neckar-Region – mit eigener Technik und individueller Planung.',
    intro: 'Von Worms aus ist Bukkador für Veranstaltungen in Mannheim, Heidelberg, Ludwigshafen, Speyer und Weinheim ansprechbar. Die regionale Nähe erleichtert Vorgespräche und Ortsabstimmung; das musikalische Konzept richtet sich nach Ihrem Event.',
    image: images.instrument,
    details: ['Mannheim · Heidelberg · Worms', 'Corporate & Hochzeit', 'Eigene Technik'],
    sections: [
      { title: 'Ein Klang für die Region.', text: 'Ob Empfang in Mannheim, Firmenveranstaltung in Heidelberg oder Hochzeit in der Umgebung von Worms: Michael Noll gestaltet die Performance passend zu Veranstaltungsort, Raum und Ablauf. Die Handpan kann Gespräche begleiten oder bewusst einen Programmpunkt prägen.', image: images.artistWide },
      { title: 'Planung ohne Umwege.', text: 'Bukkador bringt Instrumente und eigenes MAUI-Soundsystem mit und übernimmt Auf- und Abbau. Für längere Veranstaltungen sind mehrere Sets über zwei bis vier Stunden möglich. Sprechen Sie Ort, Gästezahl und gewünschte Atmosphäre frühzeitig an.', points: ['Startpunkt Worms', 'Für Mannheim, Heidelberg und Umgebung', 'Direkte Abstimmung mit Michael Noll'], tone: 'green' },
    ],
    closing: 'Prüfen Sie die Verfügbarkeit für Ihr Event in Rhein-Neckar.',
    cta: 'Verfügbarkeit in der Region prüfen',
  },
  {
    slug: 'event-kuenstler-rhein-main', label: 'Rhein-Main',
    title: 'Live-Momente in Rhein-Main.', seoTitle: 'Event-Künstler Rhein-Main: Handpan Live-Musik', eyebrow: 'Handpan für Events',
    description: 'Bukkador Handpan für Corporate Events, Galas, Empfänge und Hochzeiten im Rhein-Main-Gebiet. Aus Worms, mit eigener Technik und deutschlandweit buchbar.',
    intro: 'Für Veranstaltungen in Frankfurt, Mainz, Wiesbaden, Darmstadt und Offenbach bietet Bukkador eine eigenständige musikalische Note. Bei größeren Eventproduktionen werden Anreise, Timing und technische Schnittstellen früh abgestimmt.',
    image: images.artistPortrait,
    details: ['Frankfurt · Mainz · Wiesbaden', 'Für Agenturen & Veranstalter', 'Komplettlösung'],
    sections: [
      { title: 'Atmosphäre für wechselnde Räume.', text: 'Rhein-Main bringt ganz unterschiedliche Veranstaltungsorte zusammen: Hotels, Firmenräume, Messeumgebungen und private Locations. Michael Noll stimmt Spielort, Lautstärke, Sets und Timing auf die jeweilige Situation ab.', image: images.instrument },
      { title: 'Technik und Musik aus einer Hand.', text: 'Handpans, eigenes Soundsystem sowie Auf- und Abbau gehören zur Planung. So bleibt für Veranstalter und Agenturen ein klarer Ansprechpartner. Buchungen sind auch über Rhein-Main hinaus in ganz Deutschland möglich.', points: ['Frankfurt, Mainz und Wiesbaden', 'Flexible Sets für Empfang und Dinner', 'Direkter Ansprechpartner vor Ort'], tone: 'green' },
    ],
    closing: 'Erzählen Sie uns von Ihrem Event in Rhein-Main.',
    cta: 'Verfügbarkeit in der Region prüfen',
  },
];

export const listedEvents = [
  { title: 'Wormser Kulturnacht', place: 'Worms', date: '13. Juni 2026' },
  { title: 'Handwerkermarkt Franklin', place: 'Mannheim', date: '12. September 2026' },
  { title: 'Hofkonzert in Offstein', place: 'Offstein', date: '9. Mai 2026' },
  { title: 'Open Stage · KulturGUT', place: 'Bechtolsheim', date: '1. Mai 2026' },
];
