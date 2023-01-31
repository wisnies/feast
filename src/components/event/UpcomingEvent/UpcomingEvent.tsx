import { FC } from 'react';
import IsLoading from '@/components/layout/IsLoading';
import { IEventListItem } from '@/libs/interfaces/Event.interface';
import { LinkButton } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { Text } from '@/styles/typography';
import { displayDate } from '@/utils/displayDate';
import {
  UEContainer,
  UEImageContainer,
  UEImage,
  UEDescriptionContainer,
  UETitle,
  UEButtonContainer,
} from './UpcomingEvent.style';

type UpcomingEventProps = {
  isLoading: boolean;
  event: IEventListItem | null;
};

export const UpcomingEvent: FC<UpcomingEventProps> = ({
  isLoading,
  event,
}: UpcomingEventProps) => {
  return event ? (
    <PageSection>
      {isLoading ? (
        <IsLoading />
      ) : (
        <UEContainer>
          <UEImageContainer>
            <UEImage
              src={event.thumbnail}
              alt={`${event.title} thumbnail`}
              fill
              priority={false}
              sizes='420px'
            />
          </UEImageContainer>
          <UEDescriptionContainer>
            <UETitle href={`/events/${event.slug}`}>{event.title}</UETitle>
            <Text align='left' mb={0.5} bold>
              {displayDate(event.date)}
            </Text>
            <Text align='justify' mb={1}>
              {event.description}
            </Text>
            <UEButtonContainer>
              <LinkButton href={`/events/${event.slug}`} color='accent3'>
                details
              </LinkButton>
            </UEButtonContainer>
          </UEDescriptionContainer>
        </UEContainer>
      )}
    </PageSection>
  ) : null;
};
