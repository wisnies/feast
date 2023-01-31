import { useRouter } from 'next/router';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { BookingData } from '@/libs/types/Booking.type';
import { BookingRes } from '@/libs/types/Response.type';

const createBooking = async (bookingData: BookingData): Promise<BookingRes> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  const parsedRes = await res.json();

  if (parsedRes.success) {
    return {
      success: true,
      booking: parsedRes.booking,
    };
  }
  throw new Error(JSON.stringify(parsedRes.errors));
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation: UseMutationResult<BookingRes, Error, BookingData> =
    useMutation<BookingRes, Error, BookingData>(
      'booking/create',
      async (bookingData: BookingData) => createBooking(bookingData),
      {
        onSuccess: (data) => {
          queryClient.setQueryData(['booking/fetch'], data.booking);
          router.push(`/book-table/${data.booking.id}`);
        },
      }
    );

  return mutation;
};
