import { FC, useState } from 'react';
import Calendar from '@/components/Calendar';
import BookTableForm from '@/components/forms/BookTableForm';
import Title from '@/components/layout/Title';
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
      <Title>Book table</Title>
      <BTContainer>
        <Calendar handleDate={handleDate} />
        <BookTableForm date={selectedDate} />
      </BTContainer>
      <SingleButtonContainer>
        <LinkButton href='/' position='right' color='primary'>
          Homepage
        </LinkButton>
      </SingleButtonContainer>
    </PageSection>
  );
};
