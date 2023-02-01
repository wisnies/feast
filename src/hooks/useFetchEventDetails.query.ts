import { useQuery, UseQueryResult } from 'react-query';
import { EventRes } from '@/libs/types/Response.type';

export const fetchEventDetails = async (
  slug: string,
  url?: string
): Promise<EventRes> => {
  let reqUrl = '';
  if (url) {
    reqUrl = `${url}/api/event/${slug}`;
  } else {
    reqUrl = `/api/event/${slug}`;
  }
  const res = await fetch(reqUrl);
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
