import { useQuery, UseQueryResult } from 'react-query';
import { IBookingRes } from '@/libs/interfaces/Response.interface';

export const fetchBooking = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/booking/${id}`);
  const parsedRes = await res.json();
  if (parsedRes.success) {
    return {
      booking: parsedRes.booking,
    };
  }
  throw new Error(JSON.stringify(parsedRes.errors));
};

export const useFetchBooking = (id: string) => {
  const res: UseQueryResult<IBookingRes, Error> = useQuery<IBookingRes, Error>(
    ['booking/fetch', id],
    () => fetchBooking(id)
  );

  return res;
};
