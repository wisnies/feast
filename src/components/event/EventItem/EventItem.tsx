import { FC } from 'react';
import { IEventListItem } from '@/libs/interfaces/Event.interface';
import { LinkButton } from '@/styles/buttons';
import { Text } from '@/styles/typography';
import { displayDate } from '@/utils/displayDate';
import {
  EIContainer,
  EIImageContainer,
  EIImage,
  EIDescriptionContainer,
  EITitle,
  EIButtonContainer,
} from './EventItem.style';

type EventItemProps = {
  event: IEventListItem;
};

export const EventItem: FC<EventItemProps> = ({ event }: EventItemProps) => {
  return (
    <EIContainer>
      <EIImageContainer>
        <EIImage
          src={event.thumbnail}
          alt={`${event.title} poster`}
          fill
          priority={false}
        />
      </EIImageContainer>
      <EIDescriptionContainer>
        <EITitle href={`/events/${event.slug}`}>{event.title}</EITitle>
        <Text align='left' mb={0.5} bold>
          {displayDate(event.date)}
        </Text>
        <Text align='justify' mb={1}>
          {event.description}
        </Text>
        <EIButtonContainer>
          <LinkButton href={`/events/${event.slug}`} color='accent3'>
            details
          </LinkButton>
        </EIButtonContainer>
      </EIDescriptionContainer>
    </EIContainer>
  );
};
