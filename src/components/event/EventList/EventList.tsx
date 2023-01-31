import { FC } from 'react';
import DecoratedTitle from '@/components/layout/DecoratedTitle';
import IsLoading from '@/components/layout/IsLoading';
import { IEventListItem } from '@/libs/interfaces/Event.interface';
import { PageSection } from '@/styles/page';
import { Text } from '@/styles/typography';
import { ELContainer } from './EventList.style';
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
      <DecoratedTitle>
        {isArchive ? 'Feast Events Archive' : 'Feast Events'}
      </DecoratedTitle>
      {isLoading ? (
        <IsLoading />
      ) : (
        <>
          <ELContainer>
            {data.map((e) => (
              <EventItem key={e.id} event={e} />
            ))}
          </ELContainer>
          {data.length <= 0 && (
            <Text align='center'>
              {isArchive
                ? 'There are no archived events to display'
                : 'There are no upcoming events to display'}
            </Text>
          )}
        </>
      )}
    </PageSection>
  );
};
