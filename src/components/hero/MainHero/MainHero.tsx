import { FC } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { dehydrate, useQuery, UseQueryResult } from 'react-query';
import { IEventMeta } from '@/libs/interfaces/Event.interface';
import queryClient from '@/libs/queryClient';
import { ButtonContainer, LinkButton } from '@/styles/buttons';
import { Ellipsis } from '@/styles/typography';
import { displayDate } from '@/utils/displayDate';
import {
  MHContainer,
  MHOverlay,
  MHShapeContainer,
  MHShapeL,
  MHShapeR,
  MHContainerInner,
  MHEventBox,
  MHEvent,
  MHMapLink,
  MHTitle,
  MHSectionL,
  MHSectionR,
  MHOpaqeContainer,
  MHEventTitle,
  MHEventText,
  MHEventBoxTitle,
  MHEventBoxLink,
} from './MainHero.style';

const fetchEvents = async (): Promise<{ events: IEventMeta[] }> => {
  const res = await fetch('http://localhost:3000/api/events/hero');
  if (res.ok) {
    return res.json();
  }
  throw new Error('Response not OK');
};

export const MainHero: FC = () => {
  const {
    data,
    isLoading,
    isError,
    error,
  }: UseQueryResult<{ events: IEventMeta[] }, Error> = useQuery<
    { events: IEventMeta[] },
    Error
  >(['events/main-hero'], fetchEvents);

  if (isError) {
    // create error handling
    return <p>{error.message}</p>;
  }

  return (
    <MHContainer>
      <Image
        src='/assets/hero/main-hero.jpg'
        alt='charcoal grill'
        fill
        style={{ objectFit: 'cover' }}
        priority={false}
      />
      <MHOverlay />
      <MHShapeContainer>
        <MHShapeL />
        <MHShapeR />
      </MHShapeContainer>
      <MHContainerInner>
        <MHSectionL>
          <MHMapLink>Where to find us</MHMapLink>
          <MHTitle as='h1'>True Texan BBQ</MHTitle>
          <ButtonContainer>
            <LinkButton href='/menu' color='accent1'>
              menu
            </LinkButton>
            <LinkButton href='/book-table' color='accent3'>
              book table
            </LinkButton>
          </ButtonContainer>
        </MHSectionL>
        <MHSectionR>
          <MHOpaqeContainer isLoading={isLoading}>
            {data && data.events.length > 0 && (
              <MHEvent href={`/events/${data.events[0].slug}`}>
                <MHEventTitle as='h5'>{data.events[0].title}</MHEventTitle>
                <MHEventText>{displayDate(data.events[0].date)}</MHEventText>
              </MHEvent>
            )}
          </MHOpaqeContainer>
        </MHSectionR>
        <MHSectionL>
          <MHOpaqeContainer isLoading={isLoading}>
            {data && data.events.length > 0 && (
              <MHEventBox>
                <MHEventBoxTitle as='h5'>Upcoming events</MHEventBoxTitle>
                {data.events.slice(1).map((event) => (
                  <MHEventBoxLink key={event.id} href={`/events/${event.slug}`}>
                    <Ellipsis>{event.title}</Ellipsis>
                    {displayDate(event.date)}
                  </MHEventBoxLink>
                ))}
              </MHEventBox>
            )}
          </MHOpaqeContainer>
        </MHSectionL>
      </MHContainerInner>
    </MHContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await queryClient.prefetchQuery(['events/main-hero'], fetchEvents);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
