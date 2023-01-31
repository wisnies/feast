import { useQuery, UseQueryResult } from 'react-query';
import { EventRes } from '@/libs/types/Response.type';

export const fetchEventDetails = async (slug: string): Promise<EventRes> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/event/${slug}`
  );
  const parsedRes = await res.json();
  if (parsedRes.success) {
    return {
      success: true,
      event: parsedRes.event,
    };
  }
  throw new Error(JSON.stringify(parsedRes.errors));
};

export const useFetchEventDetails = (slug: string) => {
  const res: UseQueryResult<EventRes, Error> = useQuery<EventRes, Error>(
    ['event/fetchDetails', slug],
    () => fetchEventDetails(slug)
  );

  return res;
};
