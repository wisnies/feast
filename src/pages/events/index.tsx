import { useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { dehydrate, useQuery, UseQueryResult } from 'react-query';
import EventList from '@/components/event/EventList';
import UpcomingEvent from '@/components/event/UpcomingEvent';
import OffHero from '@/components/hero/OffHero';
import {
  IUpcomingEventRes,
  IEventListRes,
} from '@/libs/interfaces/Response.interface';
import {
  fetchUpcomingEvent,
  fetchUpcomingEvents,
  fetchArchivedEvents,
} from '@/libs/query';
import queryClient from '@/libs/queryClient';
import { Button, ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageContainer, PageSection } from '@/styles/page';

const EventsPage: NextPage = () => {
  const [showArchive, setShowArchive] = useState(false);
  const {
    isLoading: isLoadingUpcomingEvent,
    data: dataUpcomingEvent,
  }: UseQueryResult<IUpcomingEventRes, Error> = useQuery<
    IUpcomingEventRes,
    Error
  >(['events/fetchUpcoming'], fetchUpcomingEvent);

  const {
    isLoading: isLoadingUpcomingEvents,
    data: dataUpcomingEvents,
  }: UseQueryResult<IEventListRes, Error> = useQuery<IEventListRes, Error>(
    ['events/fetchUpcomingList'],
    fetchUpcomingEvents,
    {
      enabled: !!dataUpcomingEvent?.event,
    }
  );
  const {
    isLoading: isLoadingArchivedEvents,
    data: dataArchivedEvents,
  }: UseQueryResult<IEventListRes, Error> = useQuery<IEventListRes, Error>(
    ['events/fetchArchivedList'],
    fetchArchivedEvents,
    {
      enabled: showArchive,
    }
  );

  return (
    <>
      <Head>
        <title>Events | Feast BBQ</title>
      </Head>
      <OffHero text='Events | Feast BBQ' />
      <PageContainer>
        <UpcomingEvent
          isLoading={isLoadingUpcomingEvent}
          event={dataUpcomingEvent ? dataUpcomingEvent.event : null}
        />
        <EventList
          isArchive={false}
          isLoading={isLoadingUpcomingEvents}
          data={dataUpcomingEvents ? dataUpcomingEvents.events : []}
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
            isLoading={isLoadingArchivedEvents}
            data={dataArchivedEvents ? dataArchivedEvents.events : []}
          />
        )}
      </PageContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await queryClient.prefetchQuery(['events/fetchUpcoming'], () =>
    fetchUpcomingEvent()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default EventsPage;
