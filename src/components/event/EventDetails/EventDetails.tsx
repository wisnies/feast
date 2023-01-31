import { FC } from 'react';
import { v4 } from 'uuid';
import { IEvent } from '@/libs/interfaces/Event.interface';
import { ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { Title, Text } from '@/styles/typography';
import { displayDate } from '@/utils/displayDate';
import {
  EDList,
  EDListItem,
  EDThumbnail,
  EDThumbnailContainer,
} from './EventDetails.style';

type EventDetailsProps = {
  event: IEvent;
};

export const EventDetails: FC<EventDetailsProps> = ({
  event,
}: EventDetailsProps) => {
  return (
    <PageSection>
      <Title mb={1} align='left' color='accent3' size={1.8}>
        {event.title}
      </Title>
      <Text align='left' mb={1} bold color='primary'>
        {displayDate(event.date)}
      </Text>
      <Text align='justify' mb={1}>
        {event.description}
      </Text>
      <EDThumbnailContainer>
        <EDThumbnail
          src={event.thumbnail}
          alt={`${event.title} poster`}
          fill
          sizes='100vw'
          priority={false}
        />
      </EDThumbnailContainer>
      <Text align='justify' mb={1}>
        {event.header}
      </Text>
      <Title mb={1} size={1.2} align='left' color='accent3'>
        {event.pricing.title}
      </Title>
      <EDList>
        {event.pricing.data.map((item) => (
          <EDListItem key={v4()}>
            <Text align='left' transform='capitalize'>
              {item.item}
            </Text>
            <Text align='right' color='accent3' bold size={1.2}>
              -{item.discount}%
            </Text>
          </EDListItem>
        ))}
      </EDList>
      {event.body.map((text) => (
        <Text mb={1} align='justify' key={v4()}>
          {text}
        </Text>
      ))}

      <Title mb={1} size={1.2} align='left' color='accent3'>
        {event.timeline.title}
      </Title>
      <EDList>
        {event.timeline.data.map((item) => (
          <EDListItem key={v4()}>
            <Text align='left' transform='capitalize'>
              {item.event}{' '}
            </Text>
            <Text align='right' color='accent3' bold size={1.2}>
              {item.hour}
            </Text>
          </EDListItem>
        ))}
      </EDList>
      <Title mb={1} size={1.2} color='accent3'>
        We hope to see You there!
      </Title>
      <ButtonContainer>
        <LinkButton href='/events' color='accent3' position='center'>
          events
        </LinkButton>
        <LinkButton href='/' color='primary' position='center'>
          homepage
        </LinkButton>
      </ButtonContainer>
    </PageSection>
  );
};
