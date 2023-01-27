import { FC } from 'react';
import { IEvent } from '@/libs/interfaces/Event.interface';
import { Container } from './EventDetails.style';

type EventDetailsProps = {
  event: IEvent;
};

export const EventDetails: FC<EventDetailsProps> = ({
  event,
}: EventDetailsProps) => {
  return <Container>{event.title}</Container>;
};
