import { FC } from 'react';
import { IEventListItem } from '@/libs/interfaces/Event.interface';
import { LinkButton, LinkButtonSK } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { displayDate } from '@/utils/displayDate';
import {
  UEContainer,
  UEImageContainer,
  UEImage,
  UEDescriptionContainer,
  UETitle,
  UEDescription,
  UEButtonContainer,
  UEImageContainerSK,
  UETitleSK,
  UEDescriptionSK,
  UEDateSK,
  UEDate,
} from './UpcomingEvent.style';

type UpcomingEventProps = {
  isLoading: boolean;
  event: IEventListItem | null;
};

export const UpcomingEvent: FC<UpcomingEventProps> = ({
  isLoading,
  event,
}: UpcomingEventProps) => {
  if (isLoading) {
    return (
      <PageSection>
        <UEContainer>
          <UEImageContainerSK />
          <UEDescriptionContainer>
            <UETitleSK>LOADING</UETitleSK>
            <UEDateSK>LOADING</UEDateSK>
            <UEDescriptionSK>LOADING</UEDescriptionSK>
            <UEDescriptionSK>LOADING</UEDescriptionSK>
            <UEDescriptionSK>LOADING</UEDescriptionSK>
            <UEDescriptionSK>LOADING</UEDescriptionSK>
            <UEButtonContainer>
              <LinkButtonSK>LOADING</LinkButtonSK>
            </UEButtonContainer>
          </UEDescriptionContainer>
        </UEContainer>
      </PageSection>
    );
  }
  return event ? (
    <PageSection>
      <UEContainer>
        <UEImageContainer>
          <UEImage
            src={event.thumbnail}
            alt={`${event.title} thumbnail`}
            fill
            priority={false}
          />
        </UEImageContainer>
        <UEDescriptionContainer>
          <UETitle href={`/events/${event.slug}`}>{event.title}</UETitle>
          <UEDate>{displayDate(event.date)}</UEDate>
          <UEDescription>{event.description}</UEDescription>
          <UEButtonContainer>
            <LinkButton href={`/events/${event.slug}`} color='accent3'>
              details
            </LinkButton>
          </UEButtonContainer>
        </UEDescriptionContainer>
      </UEContainer>
    </PageSection>
  ) : null;
};
