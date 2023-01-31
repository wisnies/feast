import { FC, useState } from 'react';
import Calendar from '@/components/_elements/Calendar';
import BookingForm from '@/components/booking/BookingForm';
import DecoratedTitle from '@/components/layout/DecoratedTitle';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { BTContainer } from './BookTable.style';

export const BookTable: FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDate = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <PageSection>
      <DecoratedTitle>Book table</DecoratedTitle>
      <BTContainer>
        <Calendar handleDate={handleDate} />
        <BookingForm date={selectedDate} />
      </BTContainer>
      <SingleButtonContainer>
        <LinkButton href='/' position='right' color='primary'>
          Homepage
        </LinkButton>
      </SingleButtonContainer>
    </PageSection>
  );
};
