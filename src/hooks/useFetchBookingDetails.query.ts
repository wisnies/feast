import { useQuery, UseQueryResult } from 'react-query';
import { BookingRes } from '@/libs/types/Response.type';

export const fetchBookingDetails = async (id: string): Promise<BookingRes> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/booking/${id}`
  );
  const parsedRes = await res.json();
  if (parsedRes.success) {
    return {
      success: true,
      booking: parsedRes.booking,
    };
  }
  throw new Error(JSON.stringify(parsedRes.errors));
};

export const useFetchBookingDetails = (id: string) => {
  const res: UseQueryResult<BookingRes, Error> = useQuery<BookingRes, Error>(
    ['booking/fetch', id],
    () => fetchBookingDetails(id)
  );

  return res;
};
