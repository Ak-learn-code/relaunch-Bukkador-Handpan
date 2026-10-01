import { legacyEvents } from '../src/content/events';

export const eventSeedDocuments = legacyEvents.map((event, index) => ({
  _id: `event-legacy-${event.date}-${index + 1}`,
  _type: 'event',
  ...event,
  visible: true,
}));
