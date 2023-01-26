import { FC, useState } from 'react';
import Head from 'next/head';
import { useQuery, UseQueryResult } from 'react-query';
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
import { Button, ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageContainer, PageSection } from '@/styles/page';

const EventsPage: FC = () => {
  const [showArchive, setShowArchive] = useState(false);
  const {
    isLoading: upcomingEventIsLoading,
    data: upcomingEventData,
  }: UseQueryResult<IUpcomingEventRes, Error> = useQuery<
    IUpcomingEventRes,
    Error
  >(['events/fetchUpcoming'], fetchUpcomingEvent);

  const {
    isLoading: upcomingEventsIsLoading,
    data: upcomingEventsData,
  }: UseQueryResult<IEventListRes, Error> = useQuery<IEventListRes, Error>(
    ['events/fetchUpcomingList'],
    fetchUpcomingEvents,
    {
      enabled: !!upcomingEventData?.event,
    }
  );
  const {
    isLoading: archivedEventsIsLoading,
    data: archivedEventsData,
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
          isLoading={upcomingEventIsLoading}
          event={upcomingEventData ? upcomingEventData.event : null}
        />
        <EventList
          isArchive={false}
          isLoading={upcomingEventsIsLoading}
          data={upcomingEventsData ? upcomingEventsData.events : []}
        />

        <PageSection>
          <ButtonContainer>
            <Button onClick={() => setShowArchive(true)} color='accent3'>
              Show archive
            </Button>
            <LinkButton href='/' color='primary'>
              Homepage
            </LinkButton>
          </ButtonContainer>
        </PageSection>
        {showArchive && (
          <EventList
            isArchive
            isLoading={archivedEventsIsLoading}
            data={archivedEventsData ? archivedEventsData.events : []}
          />
        )}
      </PageContainer>
    </>
  );
};

export default EventsPage;
