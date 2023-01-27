import { IEvent, IEventListItem, IEventMeta } from './Event.interface';

export interface IHeroEventsRes {
  events: IEventMeta[];
}

export interface IEventListRes {
  events: IEventListItem[];
}

export interface IUpcomingEventRes {
  event: IEventListItem | null;
}

export interface IEventRes {
  event: IEvent | null;
}
