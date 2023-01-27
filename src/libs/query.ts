import {
  IUpcomingEventRes,
  IEventListRes,
  IEventRes,
  IHeroEventsRes,
} from './interfaces/Response.interface';

const fetchUpcomingEvent = async (): Promise<IUpcomingEventRes> => {
  const res = await fetch('http://localhost:3000/api/events/upcoming');
  if (res.ok) {
    return res.json();
  }
  throw new Error('Unable to fetch upcoming event data');
};

const fetchUpcomingEvents = async (): Promise<IEventListRes> => {
  const res = await fetch(
    'http://localhost:3000/api/events/list?select=upcoming'
  );
  if (res.ok) {
    return res.json();
  }
  throw new Error('Unable to fetch upcoming events data');
};

const fetchArchivedEvents = async (): Promise<IEventListRes> => {
  const res = await fetch(
    'http://localhost:3000/api/events/list?select=archived'
  );
  if (res.ok) {
    return res.json();
  }
  throw new Error('Unable to fetch archived event data');
};

const fetchEvent = async (slug: string): Promise<IEventRes> => {
  const res = await fetch(`http://localhost:3000/api/events/${slug}`);
  if (res.ok) {
    return res.json();
  }
  if (res.status === 404) {
    throw new Error('Event not found');
  }
  throw new Error('Unable to fetch event data');
};

const fetchHeroEvents = async (): Promise<IHeroEventsRes> => {
  const res = await fetch('http://localhost:3000/api/events/hero');
  if (res.ok) {
    return res.json();
  }
  throw new Error('Unable to fetch hero events data');
};

export {
  fetchUpcomingEvent,
  fetchUpcomingEvents,
  fetchArchivedEvents,
  fetchEvent,
  fetchHeroEvents,
};
