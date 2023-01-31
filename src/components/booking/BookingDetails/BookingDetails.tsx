import { FC } from 'react';
import DecoratedTitle from '@/components/layout/DecoratedTitle';
import { IBooking } from '@/libs/interfaces/Booking.interface';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { Title, Text, InlineLink } from '@/styles/typography';
import { displayDate } from '@/utils/displayDate';

type BookingDetailsProps = {
  booking: IBooking;
};

export const BookingDetails: FC<BookingDetailsProps> = ({
  booking,
}: BookingDetailsProps) => {
  const handleClick = () => {
    const copyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/book-table/${booking.id}`;
    navigator.clipboard.writeText(copyUrl);
    // eslint-disable-next-line no-alert
    alert(`Copied url: ${copyUrl}`);
  };
  return (
    <PageSection>
      <DecoratedTitle>Booking details</DecoratedTitle>
      <div style={{ width: '100%' }}>
        <Title align='left' mb={1}>
          Booking information
        </Title>
        <Text align='left'>Id: {booking.id}</Text>
        <Text align='left' mb={0.5}>
          Booking registered: {displayDate(booking.createdAt)}
        </Text>
        <Text
          onClick={handleClick}
          color='textSecondary'
          bold
          align='left'
          style={{ cursor: 'pointer' }}
        >
          Copy Link
        </Text>
        <Title align='left' mb={1}>
          Booking information
        </Title>
        <Text align='left'>Name: {booking.name}</Text>
        <Text align='left'>Guest count: {booking.guestCount}</Text>
        <Text align='left' mb={0.5}>
          Date: {displayDate(booking.date, false)}
        </Text>

        <Title align='left' mb={1}>
          Contact information
        </Title>
        <Text align='left'>Phone number: {booking.phone}</Text>
        <Text align='left' mb={1}>
          Email: {booking.email}
        </Text>
        <Text align='left' mb={0.5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
          nesciunt tempora, quia ex officia provident, similique corporis, sed
          aperiam asperiores voluptates non iure repellat sint et quaerat libero
          enim!
        </Text>
        <Text align='left'>
          For more information visit:{' '}
          <InlineLink color='accent1' href='#' bold>
            here
          </InlineLink>
        </Text>
      </div>
      <SingleButtonContainer>
        <LinkButton href='/' color='primary' position='center'>
          homepage
        </LinkButton>
      </SingleButtonContainer>
    </PageSection>
  );
};
