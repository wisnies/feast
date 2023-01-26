import { IEventListItem, IEventMeta } from './Event.interface';

export interface IEventMainHeroRes {
  events: IEventMeta[];
}

export interface IEventListRes {
  events: IEventListItem[];
}

export interface IUpcomingEventRes {
  event: IEventListItem | null;
}
