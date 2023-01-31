import { FC } from 'react';
import Image from 'next/image';
import { IEventListItem } from '@/libs/interfaces/Event.interface';
import { ButtonContainer, LinkButton } from '@/styles/buttons';
import {
  HeroOverlay,
  HeroToBodyShapeContainer,
  HeroToBodyShapeL,
  HeroToBodyShapeR,
} from '@/styles/layout';
import { Ellipsis } from '@/styles/typography';
import { displayDate } from '@/utils/displayDate';
import {
  MHContainer,
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

type MainHeroProps = {
  isLoading: boolean;
  events: IEventListItem[];
};

export const MainHero: FC<MainHeroProps> = ({
  isLoading,
  events,
}: MainHeroProps) => {
  return (
    <MHContainer>
      <Image
        src='/assets/hero/main-hero.jpg'
        alt='charcoal grill'
        fill
        sizes='100vw'
        style={{ objectFit: 'cover' }}
        priority={false}
      />
      <HeroOverlay />
      <HeroToBodyShapeContainer>
        <HeroToBodyShapeL />
        <HeroToBodyShapeR />
      </HeroToBodyShapeContainer>
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
            {events.length > 0 && (
              <MHEvent href={`/events/${events[0].slug}`}>
                <MHEventTitle as='h5'>{events[0].title}</MHEventTitle>
                <MHEventText>{displayDate(events[0].date)}</MHEventText>
              </MHEvent>
            )}
          </MHOpaqeContainer>
        </MHSectionR>
        <MHSectionL>
          <MHOpaqeContainer isLoading={isLoading}>
            {events.length > 0 && (
              <MHEventBox>
                <MHEventBoxTitle as='h5'>Upcoming events</MHEventBoxTitle>
                {events.slice(1).map((event) => (
                  <MHEventBoxLink
                    key={event.id}
                    href={`/events/${event.slug}`}
                    color='accent1'
                  >
                    <Ellipsis>{event.title}</Ellipsis>
                    <span>{displayDate(event.date, false)}</span>
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
