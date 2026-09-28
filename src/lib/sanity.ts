import { createClient } from '@sanity/client';
import type { SitePage, ContentSection, FAQ } from '../content/site';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2026-03-01';

export const sanityClient = projectId ? createClient({ projectId, dataset, apiVersion, useCdn: true }) : null;

export const pageQuery = `*[_type == "page" && slug.current == $slug][0]{
  title, description, intro, details, closing,
  "image": {"src": heroImage.asset->url, "alt": heroImage.alt},
  "sections": sections[]{title, text, points, tone, "image": {"src": image.asset->url, "alt": image.alt}},
  "faqs": faqs[]->{"question": question, "answer": answer}
}`;
export const eventsQuery = `*[_type == "event" && visible == true] | order(date desc){title, place, date, description, "imageUrl": image.asset->url}`;
export const referencesQuery = `*[_type == "reference" && visible == true]{title, context, description, "imageUrl": image.asset->url}`;
export const settingsQuery = `*[_type == "siteSettings"][0]{siteTitle, contactEmail, contactPhone, defaultSeo}`;
export const navigationQuery = `*[_type == "navigation"][0]{items[]{label, href}}`;
export const offersQuery = `*[_type == "performanceOffer"] | order(order asc){title, description, duration, features}`;

type SanityPage = Partial<Omit<SitePage, 'image' | 'sections' | 'faqs'>> & {
  image?: { src?: string; alt?: string };
  sections?: Array<Partial<ContentSection> & { image?: { src?: string; alt?: string } }>;
  faqs?: Partial<FAQ>[];
};

export async function getPage(slug: string, fallback: SitePage): Promise<SitePage> {
  if (!sanityClient) return fallback;
  try {
    const remote = await sanityClient.fetch<SanityPage | null>(pageQuery, { slug });
    if (!remote) return fallback;
    return {
      ...fallback,
      title: remote.title || fallback.title,
      description: remote.description || fallback.description,
      intro: remote.intro || fallback.intro,
      closing: remote.closing || fallback.closing,
      details: Array.isArray(remote.details) && remote.details.length ? remote.details : fallback.details,
      image: remote.image?.src ? { src: remote.image.src, alt: remote.image.alt || fallback.image.alt } : fallback.image,
      sections: Array.isArray(remote.sections) && remote.sections.length
        ? remote.sections.filter((section) => section.title && section.text).map((section) => ({
          title: section.title!, text: section.text!, points: section.points, tone: section.tone,
          image: section.image?.src ? { src: section.image.src, alt: section.image.alt || '' } : undefined,
        }))
        : fallback.sections,
      faqs: Array.isArray(remote.faqs) && remote.faqs.length
        ? remote.faqs.filter((faq) => faq.question && faq.answer).map((faq) => ({ question: faq.question!, answer: faq.answer! }))
        : fallback.faqs,
    };
  } catch (error) {
    console.warn(`Sanity-Seite ${slug} nicht verfügbar; lokale Inhalte werden verwendet.`, error);
    return fallback;
  }
}
