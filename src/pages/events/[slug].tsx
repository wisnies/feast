import { ParsedUrlQuery } from 'querystring';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dehydrate, useQuery, UseQueryResult } from 'react-query';
import EventDetails from '@/components/event/EventDetails';
import { IEvent } from '@/libs/interfaces/Event.interface';
import { IEventRes } from '@/libs/interfaces/Response.interface';
import { fetchEvent } from '@/libs/query';
import queryClient from '@/libs/queryClient';

type EventDetailsPageProps = {
  slug: string;
};

const EventDetailsPage: NextPage<EventDetailsPageProps> = ({
  slug,
}: EventDetailsPageProps) => {
  const router = useRouter();

  const { isLoading, isError, data, error }: UseQueryResult<IEventRes, Error> =
    useQuery<IEventRes, Error>(['events/fetchDetails', slug], () =>
      fetchEvent(slug)
    );

  if (isError) {
    router.replace(
      `/error`,
      {
        pathname: '/error',
        query: {
          code: error.message === 'Event not found' ? 404 : 500,
          message: error.message,
        },
      },
      {
        shallow: true,
      }
    );
    return null;
  }

  const event = data?.event as IEvent;

  return (
    <>
      <Head>
        {isLoading ? (
          <title>Loading event details | Feast BBQ</title>
        ) : (
          <title>{event.title} | Feast BBQ</title>
        )}
      </Head>
      {isLoading ? <p>Loading</p> : <EventDetails event={event} />}
    </>
  );
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<
  EventDetailsPageProps,
  Params
> = async (ctx) => {
  if (!ctx.params?.slug) {
    return {
      notFound: true,
    };
  }
  const { slug } = ctx.params;

  await queryClient.prefetchQuery(['events/fetchDetails', slug], () =>
    fetchEvent(slug)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug,
    },
  };
};
export default EventDetailsPage;
