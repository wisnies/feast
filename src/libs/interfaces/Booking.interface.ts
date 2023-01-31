export interface IBookingData {
  name: string;
  email: string;
  phone: number;
  guestCount: number;
  date: Date;
}

export interface IBooking extends IBookingData {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
