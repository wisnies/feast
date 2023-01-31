import { FC } from 'react';
import Title from '@/components/layout/Title';
import { IBooking } from '@/libs/interfaces/Booking.interface';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { displayDate } from '@/utils/displayDate';
import { BDText, BDTitle } from './BookingDetails.style';

type BookingDetailsProps = {
  booking: IBooking;
};

export const BookingDetails: FC<BookingDetailsProps> = ({
  booking,
}: BookingDetailsProps) => {
  return (
    <PageSection>
      <Title>Booking details</Title>
      <BDTitle>Booking information</BDTitle>
      <BDText>Id: {booking.id}</BDText>
      <BDText>Booking registered: {displayDate(booking.createdAt)}</BDText>
      <BDTitle>Booking information</BDTitle>
      <BDText>Name: {booking.name}</BDText>
      <BDText>Guest count: {booking.guestCount}</BDText>
      <BDText>Date: {displayDate(booking.date, false)}</BDText>

      <BDTitle>Contact information</BDTitle>
      <BDText>Phone number: {booking.phone}</BDText>
      <BDText>Email: {booking.email}</BDText>
      <BDText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
        nesciunt tempora, quia ex officia provident, similique corporis, sed
        aperiam asperiores voluptates non iure repellat sint et quaerat libero
        enim!
      </BDText>
      <BDText>
        For more information visit: <span>here</span>
      </BDText>
      <SingleButtonContainer>
        <LinkButton href='/' color='primary' position='center'>
          homepage
        </LinkButton>
      </SingleButtonContainer>
    </PageSection>
  );
};
