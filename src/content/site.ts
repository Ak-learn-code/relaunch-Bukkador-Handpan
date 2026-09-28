export type ImageAsset = { src: string; alt: string; position?: string };
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
  eyebrow?: string;
  description: string;
  intro: string;
  image: ImageAsset;
  details: string[];
  sections: ContentSection[];
  faqs?: FAQ[];
  closing: string;
};

export const site = {
  name: 'Bukkador Handpan',
  artist: 'Michael Noll',
  email: 'info@bukkador-handpan.de',
  phone: '+49 160 84 19 320',
  phoneHref: 'tel:+491608419320',
  origin: 'https://bukkador-handpan.de',
};

export const navigation = [
  { label: 'Corporate Events', href: '/corporate-events/' },
  { label: 'Hochzeiten', href: '/hochzeiten/' },
  { label: 'Eventagenturen', href: '/eventagenturen/' },
  { label: 'Über Bukkador', href: '/ueber-bukkador/' },
  { label: 'Academy', href: '/academy/' },
];

export const images = {
  instrument: { src: '/images/handpan-closeup.webp', alt: 'Nahaufnahme einer Handpan im warmen Licht' },
  artistWide: { src: '/images/michael-noll-wide.webp', alt: 'Handpan-Artist Michael Noll mit Instrument vor einer Holzwand', position: '72% center' },
  artistPortrait: { src: '/images/michael-noll-portrait.webp', alt: 'Michael Noll spielt Handpan im Freien' },
  lesson: { src: '/images/handpan-lesson.webp', alt: 'Michael Noll im Handpan-Unterricht mit einer Teilnehmerin' },
  workshop: { src: '/images/handpan-workshop.webp', alt: 'Michael Noll zeigt zwei Teilnehmenden das Handpan-Spiel' },
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
    title: 'Handpan für Corporate Events.', eyebrow: 'Live-Musik für Unternehmen',
    description: 'Bukkador Handpan begleitet Firmenveranstaltungen, Empfänge, Messen und Galas mit professioneller Live-Musik. Rhein-Neckar, Rhein-Main und deutschlandweit.',
    intro: 'Ein besonderer Klang schafft Raum für Begegnung. Michael Noll gestaltet mit der Handpan musikalische Momente, die Ihren Event tragen – präsent, wenn sie wirken sollen, und zurückhaltend, wenn Gespräche im Mittelpunkt stehen.',
    image: images.artistWide,
    details: ['Empfang · Dinner · Messe · Gala', 'Eigene Tontechnik', 'Rhein-Neckar · Rhein-Main · deutschlandweit'],
    sections: [
      { title: 'Musik, die Ihren Ablauf versteht.', text: 'Ob Ankommen, Networking, Dinner oder ein bewusst gesetzter Programmpunkt: Die Performance wird auf Atmosphäre, Raum und Zeitplan abgestimmt. Mehrere Sets über zwei bis vier Stunden können einen ganzen Veranstaltungsabschnitt musikalisch verbinden.', image: images.instrument },
      { title: 'Eine unkomplizierte Komplettlösung.', text: 'Für die Planung zählt Verlässlichkeit. Bukkador bringt Instrumente und ein eigenes MAUI-Soundsystem mit, übernimmt Auf- und Abbau und stimmt alle relevanten Details mit Ihnen oder Ihrer Agentur ab.', points: ['Individuelle Abstimmung vor dem Event', 'Eigene Instrumente und Tontechnik', 'Mehrere Performance-Sets mit Pausen', 'Deutschlandweit buchbar'], tone: 'green' },
      { title: 'Für Momente, die in Erinnerung bleiben.', text: 'Die Handpan verbindet einen unverwechselbaren Klang mit einer ruhigen, offenen Präsenz. So entsteht ein Live-Erlebnis, das hochwertige Veranstaltungen bereichert, ohne ihren Charakter zu überdecken.', image: images.artistPortrait },
    ],
    faqs: [homeFaqs[1], homeFaqs[2], homeFaqs[4]],
    closing: 'Erzählen Sie uns von Ihrem Event. Gemeinsam finden wir den passenden musikalischen Rahmen.',
  },
  {
    slug: 'hochzeiten', label: 'Hochzeiten',
    title: 'Ein Klang für Ihren Tag.', eyebrow: 'Handpan Live-Musik für Hochzeiten',
    description: 'Handpan-Musik von Bukkador für freie Trauung, Sektempfang und Dinner. Persönlich geplant für Brautpaare, Wedding Planner und Locations.',
    intro: 'Manche Augenblicke brauchen keine große Geste. Die warmen, sphärischen Klänge der Handpan geben einer Hochzeit eine besondere Atmosphäre – bei der freien Trauung, zum Empfang oder als musikalischer Faden durch das Dinner.',
    image: images.artistPortrait,
    details: ['Freie Trauung · Empfang · Dinner', 'Für Paare & Wedding Planner', 'Eigene Technik'],
    sections: [
      { title: 'Ein Klang für Ihren Moment.', text: 'Michael Noll gestaltet die Musik passend zum Ablauf und zur Stimmung Ihrer Feier. Die Handpan kann einen stillen Moment betonen, Gäste beim Ankommen begleiten oder einem Empfang eine unverwechselbare Note geben.', image: images.instrument },
      { title: 'Einfach zu planen. Schön zu erleben.', text: 'Ob direkt mit dem Paar, einer Hochzeitsplanung oder der Location: Vorab klären wir Ablauf, Spielorte und die technischen Bedingungen. Instrumente und eigenes Soundsystem bringt Bukkador mit; Auf- und Abbau sind Teil der Vorbereitung.', points: ['Persönliche Abstimmung', 'Indoor oder Outdoor nach Absprache', 'Mehrere musikalische Sets möglich', 'Technik und Aufbau inklusive'], tone: 'green' },
      { title: 'Von der Trauung bis zum Ausklang.', text: 'Einzelne Höhepunkte oder eine längere Begleitung über mehrere Veranstaltungsphasen sind möglich. Das konkrete Konzept entsteht aus Ihrem Tag – nicht aus einem starren Stundenpaket.', image: images.artistWide },
    ],
    faqs: [
      { question: 'Kann Bukkador Trauung und Empfang begleiten?', answer: 'Ja. Je nach Ablauf können einzelne Momente oder mehrere Phasen musikalisch gestaltet werden. Die Details klären wir vorab.' },
      homeFaqs[2], homeFaqs[4],
    ],
    closing: 'Teilen Sie Datum, Ort und Ihre Ideen mit. Bukkador erstellt ein individuelles Angebot für Ihren Tag.',
  },
  {
    slug: 'eventagenturen', label: 'Eventagenturen',
    title: 'Ein Live-Act, der mitdenkt.', eyebrow: 'Für Eventagenturen',
    description: 'Bukkador Handpan als professioneller Live-Act für Eventagenturen: individuelle Performance, eigene Technik und direkte Abstimmung – deutschlandweit.',
    intro: 'Sie planen Erlebnisse, die stimmig sein müssen. Bukkador ergänzt Ihr Konzept mit einem eigenständigen musikalischen Format – für Corporate Events, Empfänge, Messen, Galas und besondere Inszenierungen.',
    image: images.instrument,
    details: ['Direkte Abstimmung', 'Technik aus einer Hand', 'Deutschlandweit buchbar'],
    sections: [
      { title: 'Ein Format mit Spielraum.', text: 'Dezente Atmosphäre beim Empfang, akzentuierte Live-Momente oder mehrere Sets über einen Veranstaltungsabschnitt: Die Handpan-Performance lässt sich in unterschiedliche Dramaturgien integrieren.', image: images.artistWide },
      { title: 'Ein Ansprechpartner. Klare Planung.', text: 'Michael Noll stimmt Performance, Timing, Spielort und technische Anforderungen direkt mit Ihrem Team ab. Eigenes Equipment und Auf- und Abbau vereinfachen die Umsetzung vor Ort.', points: ['Briefing und Ablaufabstimmung', 'Eigene Handpans und MAUI-PA-System', 'Flexible Sets über zwei bis vier Stunden', 'Buchungen im gesamten Bundesgebiet'], tone: 'green' },
      { title: 'Für langfristige Zusammenarbeit.', text: 'Wenn Sie für künftige Projekte einen außergewöhnlichen Live-Act suchen, lernen wir uns gern kennen. Senden Sie ein konkretes Briefing oder fragen Sie unverbindlich nach einem Künstlerprofil und der Verfügbarkeit.', image: images.artistPortrait },
    ],
    faqs: [homeFaqs[1], homeFaqs[2], homeFaqs[3]],
    closing: 'Senden Sie Ihr Briefing oder fragen Sie die Verfügbarkeit für ein kommendes Event an.',
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
      { title: 'Zwei Seiten einer Leidenschaft.', text: 'Bukkador verbindet Live-Performances mit der Freude am Weitergeben. In der Academy bietet Michael Noll Handpan-Unterricht und Workshops für Anfänger und Fortgeschrittene an. Die Event-Performance bleibt der klare Schwerpunkt dieser Website.', image: images.lesson, tone: 'green' },
    ],
    closing: 'Lernen Sie Bukkador für Ihre Veranstaltung kennen.',
  },
  {
    slug: 'referenzen', label: 'Events & Einblicke',
    title: 'Bukkador live erleben', eyebrow: 'Events & Einblicke',
    description: 'Einblicke in das bisherige Veranstaltungsprogramm von Bukkador Handpan und die musikalischen Einsatzmöglichkeiten für Events.',
    intro: 'Live-Musik lässt sich am besten erleben. Hier finden Sie öffentlich angekündigte Termine aus dem Bukkador-Veranstaltungskalender und Einblicke in Michaels Arbeit.',
    image: images.artistWide,
    details: ['Öffentliche Termine aus 2026', 'Einblicke in Michaels Arbeit', 'Live-Musik für Ihr Event'],
    sections: [
      { title: 'Aus dem Kalender.', text: 'Wormser Kulturnacht, Open Stage im KulturGUT Bechtolsheim, Hofkonzert in Offstein und Handwerkermarkt Franklin in Mannheim: Diese öffentlich angekündigten Termine aus 2026 zeigen, wie unterschiedlich der Rahmen für Handpan-Musik sein kann.', image: images.artistPortrait },
      { title: 'Live statt Inszenierung.', text: 'Die Musik von Michael Noll entsteht im direkten Kontakt mit Raum und Publikum. Die Bilder auf dieser Seite zeigen den Künstler und sein Instrument. Welche Atmosphäre Bukkador für Ihr Event schaffen kann, besprechen wir am besten persönlich.', image: images.instrument, tone: 'green' },
    ],
    closing: 'Sie möchten Bukkador für Ihre Veranstaltung buchen? Senden Sie uns Ihre Eckdaten.',
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
    title: 'Ein Klang für Rhein-Neckar.', eyebrow: 'Live-Musik aus Worms',
    description: 'Bukkador Handpan aus Worms für Corporate Events, Empfänge und Hochzeiten in der Rhein-Neckar-Region – mit eigener Technik und individueller Planung.',
    intro: 'Rund um Mannheim, Heidelberg, Ludwigshafen und Worms begleitet Bukkador Veranstaltungen mit Handpan-Live-Musik. Die regionale Nähe macht die Abstimmung einfach; das musikalische Konzept bleibt individuell.',
    image: images.instrument,
    details: ['Mannheim · Heidelberg · Worms', 'Corporate & Hochzeit', 'Eigene Technik'],
    sections: [
      { title: 'Ein Klang für die Region.', text: 'Ob Empfang in Mannheim, Firmenveranstaltung in Heidelberg oder Hochzeit in der Umgebung von Worms: Michael Noll gestaltet die Performance passend zu Veranstaltungsort, Raum und Ablauf. Die Handpan kann Gespräche begleiten oder bewusst einen Programmpunkt prägen.', image: images.artistWide },
      { title: 'Planung ohne Umwege.', text: 'Bukkador bringt Instrumente und eigenes MAUI-Soundsystem mit und übernimmt Auf- und Abbau. Für längere Veranstaltungen sind mehrere Sets über zwei bis vier Stunden möglich. Sprechen Sie Ort, Gästezahl und gewünschte Atmosphäre frühzeitig an.', points: ['Startpunkt Worms', 'Für Mannheim, Heidelberg und Umgebung', 'Direkte Abstimmung mit Michael Noll'], tone: 'green' },
    ],
    closing: 'Prüfen Sie die Verfügbarkeit für Ihr Event in Rhein-Neckar.',
  },
  {
    slug: 'event-kuenstler-rhein-main', label: 'Rhein-Main',
    title: 'Live-Momente in Rhein-Main.', eyebrow: 'Handpan für Events',
    description: 'Bukkador Handpan für Corporate Events, Galas, Empfänge und Hochzeiten im Rhein-Main-Gebiet. Aus Worms, mit eigener Technik und deutschlandweit buchbar.',
    intro: 'Für Veranstaltungen in Frankfurt, Mainz, Wiesbaden und dem Rhein-Main-Gebiet bietet Bukkador eine eigenständige musikalische Note. Die Performance fügt sich in anspruchsvolle Eventabläufe ein – vom Empfang bis zum Dinner.',
    image: images.artistPortrait,
    details: ['Frankfurt · Mainz · Wiesbaden', 'Für Agenturen & Veranstalter', 'Komplettlösung'],
    sections: [
      { title: 'Atmosphäre für wechselnde Räume.', text: 'Rhein-Main bringt ganz unterschiedliche Veranstaltungsorte zusammen: Hotels, Firmenräume, Messeumgebungen und private Locations. Michael Noll stimmt Spielort, Lautstärke, Sets und Timing auf die jeweilige Situation ab.', image: images.instrument },
      { title: 'Technik und Musik aus einer Hand.', text: 'Handpans, eigenes Soundsystem sowie Auf- und Abbau gehören zur Planung. So bleibt für Veranstalter und Agenturen ein klarer Ansprechpartner. Buchungen sind auch über Rhein-Main hinaus in ganz Deutschland möglich.', points: ['Frankfurt, Mainz und Wiesbaden', 'Flexible Sets für Empfang und Dinner', 'Direkter Ansprechpartner vor Ort'], tone: 'green' },
    ],
    closing: 'Erzählen Sie uns von Ihrem Event in Rhein-Main.',
  },
];

export const listedEvents = [
  { title: 'Wormser Kulturnacht', place: 'Worms', date: '13. Juni 2026' },
  { title: 'Handwerkermarkt Franklin', place: 'Mannheim', date: '12. September 2026' },
  { title: 'Hofkonzert in Offstein', place: 'Offstein', date: '9. Mai 2026' },
  { title: 'Open Stage · KulturGUT', place: 'Bechtolsheim', date: '1. Mai 2026' },
];
