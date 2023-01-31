import { IBooking } from '@/libs/interfaces/Booking.interface';
import { IEvent, IEventListItem } from '@/libs/interfaces/Event.interface';

export type ErrorRes = {
  success: boolean;
  errors: string[];
};

export type EventListItemRes = {
  success: boolean;
  events: IEventListItem[];
};
export type EventRes = {
  success: boolean;
  event: IEvent;
};
export type BookingRes = {
  success: boolean;
  booking: IBooking;
};
