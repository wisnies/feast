import { useQuery, UseQueryResult } from 'react-query';
import { BookingRes } from '@/libs/types/Response.type';

export const fetchBookingDetails = async (
  id: string,
  url?: string
): Promise<BookingRes> => {
  let reqUrl = '';
  if (url) {
    reqUrl = `${url}/api/booking/${id}`;
  } else {
    reqUrl = `/api/booking/${id}`;
  }
  const res = await fetch(reqUrl);
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
