import { ParsedUrlQuery } from 'querystring';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dehydrate } from 'react-query';
import { BookingDetails } from '@/components/booking/BookingDetails/BookingDetails';
import {
  fetchBookingDetails,
  useFetchBookingDetails,
} from '@/hooks/useFetchBookingDetails.query';
import { IBooking } from '@/libs/interfaces/Booking.interface';
import queryClient from '@/libs/queryClient';
import { PageContainer } from '@/styles/page';

type BookingDetailsPageProps = {
  id: string;
};

const BookTableDetailsPage: NextPage<BookingDetailsPageProps> = ({
  id,
}: BookingDetailsPageProps) => {
  const router = useRouter();
  const { isLoading, isError, data, error } = useFetchBookingDetails(id);

  if (isError) {
    router.replace(
      `/error`,
      {
        pathname: '/error',
        query: {
          code: error.message === 'Booking not found' ? 404 : 500,
          message: error.message,
        },
      },
      {
        shallow: true,
      }
    );
    return null;
  }

  const booking = data?.booking as IBooking;
  return (
    <>
      <Head>
        <title>Booking Details | Feast BBQ</title>
      </Head>
      <PageContainer>
        {isLoading ? <p>isLoading</p> : <BookingDetails booking={booking} />}
      </PageContainer>
    </>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps<
  BookingDetailsPageProps,
  Params
> = async (ctx) => {
  if (!ctx.params?.id) {
    return {
      notFound: true,
    };
  }
  const { id } = ctx.params;

  await queryClient.prefetchQuery(['booking/fetchDetails', id], () =>
    fetchBookingDetails(id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
};

export default BookTableDetailsPage;
