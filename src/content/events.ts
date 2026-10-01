export type PublicEvent = {
  title: string;
  place?: string;
  date: string;
  dateEnd?: string;
  time?: string;
  type?: 'Konzert' | 'Workshop' | 'Konzert und Workshop' | 'Yoga';
  description?: string;
  image?: { src: string; alt?: string };
  eventUrl?: string;
};

// Publicly announced dates transferred from bukkador-handpan.de on 1 October 2026.
export const legacyEvents: PublicEvent[] = [
  { title: 'Handpan in der Salzgrotte', place: 'Salzgrotte, Bürstadt', date: '2026-03-18', time: '17:00–18:00 & 18:30–19:00', type: 'Konzert' },
  { title: 'Yoga Retreat mit Handpan', place: 'Klostermühle, Pfalz', date: '2026-03-14', type: 'Yoga' },
  { title: 'Handpan in der Salzgrotte', place: 'Salzgrotte, Bürstadt', date: '2026-04-15', time: '17:00–18:00 & 18:30–19:00', type: 'Konzert' },
  { title: 'Handpan und Yin Yoga', place: 'Eisenberg, Pfalz', date: '2026-04-26', time: '18:00–19:30', type: 'Yoga' },
  { title: 'Open Stage · KulturGUT', place: 'Bechtolsheim', date: '2026-05-01', time: '19:30', type: 'Konzert' },
  { title: 'Wunderbares und Rares', place: 'Dach der Welten, Mettenheim', date: '2026-05-02', dateEnd: '2026-05-03', time: '15:00–17:00', type: 'Konzert' },
  { title: 'Hofkonzert in Offstein inkl. Workshop', place: 'Offstein', date: '2026-05-09', type: 'Konzert und Workshop' },
  { title: 'Handpan in der Salzgrotte', place: 'Salzgrotte, Bürstadt', date: '2026-05-21', time: '17:00–18:00 & 18:30–19:00', type: 'Konzert' },
  { title: 'Veganer Brunch', place: 'Wormser Wäldchen', date: '2026-05-24', time: '11:00–15:00', type: 'Konzert' },
  { title: 'Wormser Kulturnacht', place: 'Hamburger Tor, Worms', date: '2026-06-13', time: '18:45–19:15 & 21:15–21:45', type: 'Konzert' },
  { title: 'Handpan-Gruppen-Workshop für Anfänger', place: 'Frankenthal', date: '2026-07-04', time: '14:00–16:00', type: 'Workshop' },
  { title: 'Handwerkermarkt Franklin', place: 'Mannheim', date: '2026-09-12', time: '10:00–17:00', type: 'Konzert und Workshop' },
  { title: 'Hof- und Garagenflohmarkt', place: 'Dittelsheim-Heßloch', date: '2026-09-26', time: '11:00–16:00', type: 'Konzert' },
  { title: 'Veganer Brunch', place: 'Wormser Wäldchen', date: '2026-10-04', time: '11:00–15:00', type: 'Konzert' },
  { title: 'Klangnacht Neuwied', place: 'Neuwied', date: '2026-10-17', type: 'Konzert' },
  { title: 'Handpan-Gruppen-Workshop für Anfänger', place: 'Frankenthal', date: '2026-10-24', time: '14:00–16:00', type: 'Workshop' },
  { title: 'Wunderbares und Rares', place: 'Dach der Welten, Mettenheim', date: '2026-11-07', dateEnd: '2026-11-08', time: '15:00–17:00', type: 'Konzert' },
  { title: 'Konzertabend mit Handpan-Klängen', place: 'Hamburger Tor, Worms', date: '2025-11-02', type: 'Konzert' },
];

const formatter = new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
export const formatEventDate = (event: Pick<PublicEvent, 'date' | 'dateEnd'>) => {
  const start = formatter.format(new Date(`${event.date}T12:00:00`));
  if (!event.dateEnd || event.dateEnd === event.date) return start;
  return `${start} – ${formatter.format(new Date(`${event.dateEnd}T12:00:00`))}`;
};

export const getUpcoming = (events: PublicEvent[], limit?: number) => {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((event) => (event.dateEnd ?? event.date) >= today).sort((a, b) => b.date.localeCompare(a.date));
  return limit ? upcoming.slice(0, limit) : upcoming;
};

export const getEventArchive = (events: PublicEvent[]) =>
  [...events].sort((a, b) => b.date.localeCompare(a.date));
