import { FC } from 'react';
import { v4 } from 'uuid';
import { IEvent } from '@/libs/interfaces/Event.interface';
import { ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageContainer } from '@/styles/page';
import { displayDate } from '@/utils/displayDate';
import {
  EDDate,
  EDList,
  EDListItem,
  EDSubTitle,
  EDText,
  EDThumbnail,
  EDThumbnailContainer,
  EDTitle,
  EDSpan,
} from './EventDetails.style';

type EventDetailsProps = {
  event: IEvent;
};

export const EventDetails: FC<EventDetailsProps> = ({
  event,
}: EventDetailsProps) => {
  return (
    <PageContainer>
      <EDTitle>{event.title}</EDTitle>
      <EDDate>{displayDate(event.date)}</EDDate>
      <EDText>{event.description}</EDText>
      <EDThumbnailContainer>
        <EDThumbnail
          src={event.thumbnail}
          alt={`${event.title} poster`}
          fill
          priority={false}
        />
      </EDThumbnailContainer>
      <EDText>{event.header}</EDText>
      <EDSubTitle>{event.pricing.title}</EDSubTitle>
      <EDList>
        {event.pricing.data.map((item) => (
          <EDListItem key={v4()}>
            {item.item} <EDSpan>-{item.discount}%</EDSpan>
          </EDListItem>
        ))}
      </EDList>
      {event.body.map((text) => (
        <EDText key={v4()}>{text}</EDText>
      ))}

      <EDSubTitle>{event.timeline.title}</EDSubTitle>
      <EDList>
        {event.timeline.data.map((item) => (
          <EDListItem key={v4()}>
            {item.event} <EDSpan>{item.hour}</EDSpan>
          </EDListItem>
        ))}
      </EDList>
      <EDSubTitle>We hope to see You there!</EDSubTitle>
      <ButtonContainer>
        <LinkButton href='/events' color='accent3' position='center'>
          events
        </LinkButton>
        <LinkButton href='/' color='primary' position='center'>
          homepage
        </LinkButton>
      </ButtonContainer>
    </PageContainer>
  );
};
