import { useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { dehydrate } from 'react-query';
import EventList from '@/components/event/EventList';
import UpcomingEvent from '@/components/event/UpcomingEvent';
import OffHero from '@/components/hero/OffHero';
import { fetchEvents, useFetchEvents } from '@/hooks/useFetchEvents.query';
import queryClient from '@/libs/queryClient';
import { returnUrl } from '@/libs/returnUrl';
import { Button, ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageContainer, PageSection } from '@/styles/page';

const EventsPage: NextPage = () => {
  const [showArchive, setShowArchive] = useState(false);

  const upcomingEventsQuery = useFetchEvents('upcoming', true);
  const archivedEventsQuery = useFetchEvents('archived', showArchive);

  return (
    <>
      <Head>
        <title>Events | Feast BBQ</title>
      </Head>
      <OffHero text='Events | Feast BBQ' />
      <PageContainer>
        <UpcomingEvent
          isLoading={upcomingEventsQuery.isLoading}
          event={
            upcomingEventsQuery.data?.events
              ? upcomingEventsQuery.data.events[0]
              : null
          }
        />
        <EventList
          isArchive={false}
          isLoading={upcomingEventsQuery.isLoading}
          data={
            upcomingEventsQuery.data?.events
              ? upcomingEventsQuery.data.events.slice(1)
              : []
          }
        />

        <PageSection>
          <ButtonContainer>
            <Button
              onClick={() => setShowArchive(!showArchive)}
              color='accent3'
            >
              {showArchive ? 'Hide' : 'Show'} archive
            </Button>
            <LinkButton href='/' color='primary'>
              Homepage
            </LinkButton>
          </ButtonContainer>
        </PageSection>
        {showArchive && (
          <EventList
            isArchive
            isLoading={archivedEventsQuery.isLoading}
            data={
              archivedEventsQuery.data?.events
                ? archivedEventsQuery.data.events
                : []
            }
          />
        )}
      </PageContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = returnUrl(ctx);
  await queryClient.prefetchQuery(['events/fetch', 'upcoming'], () =>
    fetchEvents('upcoming', url)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default EventsPage;
