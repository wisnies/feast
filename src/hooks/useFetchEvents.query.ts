import { useQuery, UseQueryResult } from 'react-query';
import { EventListItemRes } from '@/libs/types/Response.type';

export const fetchEvents = async (
  mode: 'upcoming' | 'archived'
): Promise<EventListItemRes> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/event?mode=${mode}`
  );
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
