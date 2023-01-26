export interface IEventData {
  title: string;
  date: string | Date;
  slug: string;
  thumbnail: string;
  description: string;
  header: string;
  body: string[];
  pricing: {
    title: string;
    data: { item: string; discount: number }[];
  };
  timeline: {
    title: string;
    data: { event: string; hour: string }[];
  };
}

export interface IEvent extends IEventData {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IEventMeta {
  id: string;
  title: string;
  date: Date;
  slug: string;
}
export interface IEventFeatured extends IEventMeta {
  thumbnail: string;
  description: string;
}
