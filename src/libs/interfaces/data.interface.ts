import type {
  DayRange,
  HoursRange,
  MenuCategory,
} from '@/libs/types/data.type';

export interface IMenu {
  categories: MenuCategory[];
  description: string;
}

export interface IServiceHours {
  dayRange: DayRange;
  hoursRange: HoursRange;
  specialFeature?: string;
}
