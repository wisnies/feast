import { Pricing, Timeline } from '@/libs/types/Event.type';

export interface IEvent {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  date: string | Date;
  slug: string;
  thumbnail: string;
  description: string;
  header: string;
  body: string[];
  pricing: Pricing;
  timeline: Timeline;
}

export interface IEventListItem {
  id: string;
  title: string;
  date: Date;
  slug: string;
  thumbnail: string;
  description: string;
}
