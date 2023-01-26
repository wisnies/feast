import {
  IUpcomingEventRes,
  IEventListRes,
} from './interfaces/Response.interface';

const fetchUpcomingEvent = async (): Promise<IUpcomingEventRes> => {
  const res = await fetch('http://localhost:3000/api/events/upcoming');
  if (res.ok) {
    return res.json();
  }
  throw new Error('Unable to fetch upcomin event data');
};

const fetchUpcomingEvents = async (): Promise<IEventListRes> => {
  const res = await fetch(
    'http://localhost:3000/api/events/list?select=upcoming'
  );
  if (res.ok) {
    return res.json();
  }
  throw new Error('Unable to fetch upcomin event data');
};

const fetchArchivedEvents = async (): Promise<IEventListRes> => {
  const res = await fetch(
    'http://localhost:3000/api/events/list?select=archived'
  );
  if (res.ok) {
    return res.json();
  }
  throw new Error('Unable to fetch upcomin event data');
};

export { fetchUpcomingEvent, fetchUpcomingEvents, fetchArchivedEvents };
