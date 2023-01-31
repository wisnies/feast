export type PricingData = { item: string; discount: number };
export type Pricing = {
  title: string;
  data: PricingData[];
};
export type TimelineData = { event: string; hour: string };
export type Timeline = {
  title: string;
  data: TimelineData[];
};

export type EventData = {
  title: string;
  date: string | Date;
  slug: string;
  thumbnail: string;
  description: string;
  header: string;
  body: string[];
  pricing: Pricing;
  timeline: Timeline;
};
