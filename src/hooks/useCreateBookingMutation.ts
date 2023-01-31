import { useRouter } from 'next/router';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { IBookingData } from '@/libs/interfaces/Booking.interface';
import { ICreateBookingRes } from '@/libs/interfaces/Response.interface';

const createBooking = async (
  bookingData: IBookingData
): Promise<ICreateBookingRes> => {
  const res = await fetch(`http://localhost:3000/api/booking/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });
  const parsedRes = await res.json();

  if (parsedRes.success) {
    return {
      booking: parsedRes.booking,
    };
  }
  throw new Error(JSON.stringify(parsedRes.errors));
};

export const useCreateBookingMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const mutation: UseMutationResult<ICreateBookingRes, Error, IBookingData> =
    useMutation<ICreateBookingRes, Error, IBookingData>(
      'booking/create',
      async (bookingData: IBookingData) => createBooking(bookingData),
      {
        onSuccess: (data) => {
          queryClient.setQueryData(['booking/fetch'], data.booking);
          router.push(`/book-table/${data.booking.id}`);
        },
      }
    );

  return mutation;
};
