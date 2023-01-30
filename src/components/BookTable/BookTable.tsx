import { FC } from 'react';
import Calendar from '@/components/Calendar';
import BookTableForm from '@/components/forms/BookTableForm';
import Title from '@/components/layout/Title';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { BTContainer } from './BookTable.style';

export const BookTable: FC = () => {
  const handleDate = (date: Date) => {
    console.log(date);
  };

  return (
    <PageSection>
      <Title>Book table</Title>
      <BTContainer>
        <Calendar handleDate={handleDate} />
        <BookTableForm />
      </BTContainer>
      <SingleButtonContainer>
        <LinkButton href='/' position='right' color='primary'>
          Homepage
        </LinkButton>
      </SingleButtonContainer>
    </PageSection>
  );
};
