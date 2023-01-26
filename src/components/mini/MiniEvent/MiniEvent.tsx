import { FC } from 'react';
import { UseQueryResult, useQuery } from 'react-query';
import { IEventFeatured } from '@/libs/interfaces/Event.interface';
import { LinkButton, LinkButtonSK } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import {
  MEContainer,
  MEImageContainer,
  MEImage,
  MEDescriptionContainer,
  METitle,
  MEDescription,
  MEButtonContainer,
  MEImageContainerSK,
  METitleSK,
  MEDescriptionSK,
} from './MiniEvent.style';

const fetchEvent = async (): Promise<{ event: IEventFeatured }> => {
  const res = await fetch('http://localhost:3000/api/events/featured');
  if (res.ok) {
    return res.json();
  }
  throw new Error('Response not OK');
};

export const MiniEvent: FC = () => {
  const { data, isLoading }: UseQueryResult<{ event: IEventFeatured }, Error> =
    useQuery<{ event: IEventFeatured }, Error>(['events/featured'], fetchEvent);

  // return loading skeleton
  if (isLoading) {
    return (
      <PageSection>
        <MEContainer>
          <MEImageContainerSK />
          <MEDescriptionContainer>
            <METitleSK>LOADING</METitleSK>
            <MEDescriptionSK>LOADING</MEDescriptionSK>
            <MEDescriptionSK>LOADING</MEDescriptionSK>
            <MEDescriptionSK>LOADING</MEDescriptionSK>
            <MEDescriptionSK>LOADING</MEDescriptionSK>
            <MEButtonContainer>
              <LinkButtonSK>LOADING</LinkButtonSK>
            </MEButtonContainer>
          </MEDescriptionContainer>
        </MEContainer>
      </PageSection>
    );
  }
  return data?.event ? (
    <PageSection>
      <MEContainer>
        <MEImageContainer>
          <MEImage
            src={data.event.thumbnail}
            alt={`${data.event.title} thumbnail`}
            fill
            priority={false}
          />
        </MEImageContainer>
        <MEDescriptionContainer>
          <METitle>{data.event.title}</METitle>
          <MEDescription>{data.event.description}</MEDescription>
          <MEButtonContainer>
            <LinkButton href={`/events/${data.event.slug}`} color='accent3'>
              details
            </LinkButton>
          </MEButtonContainer>
        </MEDescriptionContainer>
      </MEContainer>
    </PageSection>
  ) : null;
};
