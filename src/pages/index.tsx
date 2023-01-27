import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { dehydrate, useQuery, UseQueryResult } from 'react-query';
import UpcomingEvent from '@/components/event/UpcomingEvent';
import MainHero from '@/components/hero/MainHero';
import Title from '@/components/layout/Title';
import MiniAbout from '@/components/mini/MiniAbout';
import MiniGallery from '@/components/mini/MiniGallery';
import ServiceHours from '@/components/ServiceHours';
import {
  IHeroEventsRes,
  IUpcomingEventRes,
} from '@/libs/interfaces/Response.interface';
import { fetchHeroEvents, fetchUpcomingEvent } from '@/libs/query';
import queryClient from '@/libs/queryClient';
import {
  ButtonContainer,
  LinkButton,
  SingleButtonContainer,
} from '@/styles/buttons';
import { PageContainer, PageSection } from '@/styles/page';

const HomePage: NextPage = () => {
  const {
    isLoading: isLoadingHero,
    // isError: isErrorHero,
    data: dataHero,
  }: // error: errorHero,
  UseQueryResult<IHeroEventsRes, Error> = useQuery<IHeroEventsRes, Error>(
    ['events/fetchHero'],
    () => fetchHeroEvents()
  );

  const {
    isLoading: isLoadingUpcoming,
    // isError: isErrorUpcoming,
    data: dataUpcoming,
  }: // error: errorUpcoming,
  UseQueryResult<IUpcomingEventRes, Error> = useQuery<IUpcomingEventRes, Error>(
    ['events/fetchUpcoming'],
    () => fetchUpcomingEvent(),
    {
      enabled: Number(dataHero?.events.length) > 0,
    }
  );

  return (
    <>
      <Head>
        <title>Home | Feast BBQ</title>
      </Head>
      <MainHero
        isLoading={isLoadingHero}
        events={dataHero?.events ? dataHero.events : []}
      />
      <PageContainer>
        <Title>service hours</Title>
        <PageSection>
          <ServiceHours />
          <ButtonContainer>
            <LinkButton href='/menu' color='accent1' position='center'>
              menu
            </LinkButton>
            <LinkButton href='/book-table' color='accent3' position='center'>
              book table
            </LinkButton>
          </ButtonContainer>
        </PageSection>
        <Title>About Feast</Title>
        <PageSection>
          <MiniAbout />
          <ButtonContainer>
            <LinkButton href='/about' color='accent3' position='center'>
              about us
            </LinkButton>
            <LinkButton href='/contact' color='accent1' position='center'>
              contact us
            </LinkButton>
          </ButtonContainer>
        </PageSection>
        <UpcomingEvent
          isLoading={isLoadingUpcoming}
          event={dataUpcoming ? dataUpcoming.event : null}
        />
        <PageSection>
          <MiniGallery />
          <SingleButtonContainer>
            <LinkButton href='/gallery' color='primary' position='center'>
              gallery
            </LinkButton>
          </SingleButtonContainer>
        </PageSection>
      </PageContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await queryClient.prefetchQuery(['events/fetchHero'], () =>
    fetchHeroEvents()
  );
  await queryClient.prefetchQuery(['events/fetchUpcoming'], () =>
    fetchUpcomingEvent()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
