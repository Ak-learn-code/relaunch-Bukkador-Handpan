import { defineField, defineType } from 'sanity';

const imageField = (name: string, title: string) => defineField({ name, title, type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alternativtext', type: 'string', validation: (Rule) => Rule.required() })] });

const seo = defineType({ name: 'seo', title: 'SEO', type: 'object', fields: [
  defineField({ name: 'title', title: 'Seitentitel', type: 'string' }),
  defineField({ name: 'description', title: 'Meta-Beschreibung', type: 'text', rows: 3 }),
  imageField('socialImage', 'Social-Media-Bild'),
] });

const contentSection = defineType({ name: 'contentSection', title: 'Inhaltsabschnitt', type: 'object', fields: [
  defineField({ name: 'title', title: 'Überschrift', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'text', title: 'Text', type: 'text', rows: 5, validation: (Rule) => Rule.required() }),
  defineField({ name: 'points', title: 'Kernpunkte', type: 'array', of: [{ type: 'string' }] }),
  defineField({ name: 'tone', title: 'Hintergrund', type: 'string', options: { list: ['light', 'green', 'dark'] } }),
  imageField('image', 'Bild'),
] });

const page = defineType({ name: 'page', title: 'Seite', type: 'document', fields: [
  defineField({ name: 'title', title: 'Seitentitel', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'slug', title: 'Pfad', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
  defineField({ name: 'description', title: 'Kurzbeschreibung / Meta Description', type: 'text', rows: 3 }),
  defineField({ name: 'intro', title: 'Einleitung', type: 'text', rows: 5 }),
  imageField('heroImage', 'Titelbild'),
  defineField({ name: 'details', title: 'Faktenleiste', type: 'array', of: [{ type: 'string' }] }),
  defineField({ name: 'sections', title: 'Abschnitte', type: 'array', of: [{ type: 'contentSection' }] }),
  defineField({ name: 'faqs', title: 'FAQs', type: 'array', of: [{ type: 'reference', to: [{ type: 'faq' }] }] }),
  defineField({ name: 'closing', title: 'Abschluss-Text', type: 'text', rows: 3 }),
  defineField({ name: 'seo', title: 'Weitere SEO-Angaben', type: 'seo' }),
] });

const event = defineType({ name: 'event', title: 'Event / Termin', type: 'document', fields: [
  defineField({ name: 'title', title: 'Titel', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'date', title: 'Beginn', type: 'date', validation: (Rule) => Rule.required() }),
  defineField({ name: 'dateEnd', title: 'Ende bei mehrtägigen Terminen', type: 'date' }),
  defineField({ name: 'time', title: 'Uhrzeit', type: 'string' }),
  defineField({ name: 'type', title: 'Art', type: 'string', options: { list: ['Konzert', 'Workshop', 'Konzert und Workshop', 'Yoga'] } }),
  defineField({ name: 'place', title: 'Ort', type: 'string' }),
  defineField({ name: 'description', title: 'Beschreibung', type: 'text' }),
  imageField('image', 'Bild'),
  defineField({ name: 'visible', title: 'Öffentlich anzeigen', type: 'boolean', initialValue: false }),
] });

const reference = defineType({ name: 'reference', title: 'Referenz', type: 'document', fields: [
  defineField({ name: 'title', title: 'Name / Veranstaltung', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'eventType', title: 'Veranstaltungsart', type: 'string' }),
  defineField({ name: 'place', title: 'Ort', type: 'string' }),
  defineField({ name: 'date', title: 'Datum (optional)', type: 'date' }),
  defineField({ name: 'occasion', title: 'Herausforderung / Anlass', type: 'text' }),
  defineField({ name: 'performanceConcept', title: 'Performance-Konzept', type: 'text' }),
  defineField({ name: 'flow', title: 'Ablauf', type: 'text' }),
  defineField({ name: 'testimonial', title: 'Freigegebenes Zitat', type: 'reference', to: [{ type: 'testimonial' }] }),
  imageField('image', 'Bild'),
  defineField({ name: 'gallery', title: 'Galerie', type: 'array', of: [{ type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alternativtext', type: 'string' })] }] }),
  defineField({ name: 'permissionConfirmed', title: 'Nutzungsrecht / Freigabe bestätigt', type: 'boolean', initialValue: false }),
  defineField({ name: 'visible', title: 'Öffentlich anzeigen', type: 'boolean', initialValue: false, validation: (Rule) => Rule.custom((visible, context) => visible && !((context.parent as {permissionConfirmed?: boolean})?.permissionConfirmed) ? 'Vor Veröffentlichung muss die Freigabe bestätigt sein.' : true) }),
] });

const testimonial = defineType({ name: 'testimonial', title: 'Stimme / Testimonial', type: 'document', fields: [
  defineField({ name: 'quote', title: 'Zitat', type: 'text', validation: (Rule) => Rule.required() }),
  defineField({ name: 'person', title: 'Name', type: 'string' }),
  defineField({ name: 'role', title: 'Rolle / Unternehmen', type: 'string' }),
  defineField({ name: 'permissionConfirmed', title: 'Veröffentlichung freigegeben', type: 'boolean', initialValue: false }),
] });

const faq = defineType({ name: 'faq', title: 'FAQ', type: 'document', fields: [
  defineField({ name: 'question', title: 'Frage', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'answer', title: 'Antwort', type: 'text', validation: (Rule) => Rule.required() }),
] });

const media = defineType({ name: 'media', title: 'Bild / Video', type: 'document', fields: [
  defineField({ name: 'title', title: 'Interner Titel', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'kind', title: 'Art', type: 'string', options: { list: ['image', 'video'] } }),
  imageField('image', 'Bild'),
  defineField({ name: 'videoUrl', title: 'Video-URL', type: 'url' }),
  defineField({ name: 'caption', title: 'Bildunterschrift', type: 'string' }),
  defineField({ name: 'rights', title: 'Rechte / Quellenangabe', type: 'string' }),
] });

const navigation = defineType({ name: 'navigation', title: 'Navigation', type: 'document', fields: [
  defineField({ name: 'title', title: 'Interner Titel', type: 'string' }),
  defineField({ name: 'items', title: 'Links', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'label', type: 'string' }), defineField({ name: 'href', type: 'string' })] }] }),
] });

const siteSettings = defineType({ name: 'siteSettings', title: 'Globale Einstellungen', type: 'document', fields: [
  defineField({ name: 'siteTitle', title: 'Website-Titel', type: 'string' }),
  defineField({ name: 'contactEmail', title: 'E-Mail', type: 'email' }),
  defineField({ name: 'contactPhone', title: 'Telefon', type: 'string' }),
  defineField({ name: 'defaultSeo', title: 'Standard-SEO', type: 'seo' }),
] });

const performanceOffer = defineType({ name: 'performanceOffer', title: 'Performance-Angebot', type: 'document', fields: [
  defineField({ name: 'title', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'description', title: 'Beschreibung', type: 'text' }),
  defineField({ name: 'duration', title: 'Zeitrahmen', type: 'string' }),
  defineField({ name: 'features', title: 'Leistungen', type: 'array', of: [{ type: 'string' }] }),
  defineField({ name: 'order', title: 'Reihenfolge', type: 'number' }),
] });

export const schemaTypes = [seo, contentSection, page, event, reference, testimonial, faq, media, navigation, siteSettings, performanceOffer];
