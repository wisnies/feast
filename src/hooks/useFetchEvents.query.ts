import { useQuery, UseQueryResult } from 'react-query';
import { EventListItemRes } from '@/libs/types/Response.type';

export const fetchEvents = async (
  mode: 'upcoming' | 'archived',
  url?: string
): Promise<EventListItemRes> => {
  let reqUrl = '';
  if (url) {
    reqUrl = `${url}/api/event?mode=${mode}`;
  } else {
    reqUrl = `/api/event?mode=${mode}`;
  }
  const res = await fetch(reqUrl);
  const parsedRes = await res.json();
  if (parsedRes.success) {
    return {
      success: true,
      events: parsedRes.events,
    };
  }
  throw new Error(JSON.stringify(parsedRes.errors));
};

export const useFetchEvents = (
  mode: 'upcoming' | 'archived',
  enabled: boolean
) => {
  const res: UseQueryResult<EventListItemRes, Error> = useQuery<
    EventListItemRes,
    Error
  >(['event/fetch', mode], () => fetchEvents(mode), {
    enabled,
  });

  return res;
};
