import { ParsedUrlQuery } from 'querystring';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dehydrate } from 'react-query';
import EventDetails from '@/components/event/EventDetails';
import IsLoading from '@/components/layout/IsLoading';
import {
  useFetchEventDetails,
  fetchEventDetails,
} from '@/hooks/useFetchEventDetails.query';
import { IEvent } from '@/libs/interfaces/Event.interface';
import queryClient from '@/libs/queryClient';
import { PageContainer } from '@/styles/page';

type EventDetailsPageProps = {
  slug: string;
};

const EventDetailsPage: NextPage<EventDetailsPageProps> = ({
  slug,
}: EventDetailsPageProps) => {
  const router = useRouter();
  const { isLoading, isError, data } = useFetchEventDetails(slug);

  if (isError) {
    router.replace(
      `/error`,
      {
        pathname: '/error',
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
      <PageContainer>
        {isLoading ? <IsLoading /> : <EventDetails event={event} />}
      </PageContainer>
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
    fetchEventDetails(slug)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug,
    },
  };
};
export default EventDetailsPage;
