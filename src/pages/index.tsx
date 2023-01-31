import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { dehydrate } from 'react-query';
import UpcomingEvent from '@/components/event/UpcomingEvent';
import MainHero from '@/components/hero/MainHero';
import HomeAbout from '@/components/pageSections/HomeAbout';
import HomeGallery from '@/components/pageSections/HomeGallery';
import ServiceHours from '@/components/pageSections/ServiceHours';
import { fetchEvents, useFetchEvents } from '@/hooks/useFetchEvents.query';
import queryClient from '@/libs/queryClient';
import { PageContainer } from '@/styles/page';

const HomePage: NextPage = () => {
  const { isLoading, data } = useFetchEvents('upcoming', true);

  return (
    <>
      <Head>
        <title>Home | Feast BBQ</title>
      </Head>
      <MainHero
        isLoading={isLoading}
        events={data?.events ? data.events : []}
      />
      <PageContainer>
        <ServiceHours />
        <HomeAbout />
        <UpcomingEvent
          isLoading={isLoading}
          event={data?.events ? data.events[0] : null}
        />
        <HomeGallery />
      </PageContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await queryClient.prefetchQuery(['events/fetch', 'upcoming'], () =>
    fetchEvents('upcoming')
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
