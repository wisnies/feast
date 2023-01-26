import { FC } from 'react';
import Title from '@/components/layout/Title';
import { IEventListItem } from '@/libs/interfaces/Event.interface';
import { PageSection } from '@/styles/page';
import { ELContainer, ELText } from './EventList.style';
import EventItem from '../EventItem';

type EventListProps = {
  isArchive: boolean;
  isLoading: boolean;
  data: IEventListItem[];
};

export const EventList: FC<EventListProps> = ({
  isArchive,
  isLoading,
  data,
}: EventListProps) => {
  return (
    <PageSection>
      <Title>{isArchive ? 'Feast Events Archive' : 'Feast Events'}</Title>
      <ELContainer>
        {isLoading && <ELText>Loading...</ELText>}
        {data.map((e) => (
          <EventItem key={e.id} event={e} />
        ))}
        {data.length <= 0 && (
          <ELText>
            {isArchive
              ? 'There are no archived events to display'
              : 'There are no upcoming events to display'}
          </ELText>
        )}
      </ELContainer>
    </PageSection>
  );
};
