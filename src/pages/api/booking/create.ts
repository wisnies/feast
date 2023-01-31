import type { NextApiRequest, NextApiResponse } from 'next';
import HttpException from '@/libs/exceptions/http.exception';
import { IBookingData, IBooking } from '@/libs/interfaces/Booking.interface';
import prisma from '@/libs/prisma';
import { bookingSchema } from '@/libs/validation/schemas/booking.schema';
import { withValidation } from '@/middleware/withValidation.middleware';

type DataRes = {
  success: boolean;
  booking: IBooking;
};
type ErrorRes = {
  success: boolean;
  errors: string[];
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<DataRes | ErrorRes>
) => {
  try {
    if (req.method !== 'POST') {
      throw new HttpException(400, 'Invalid request method');
    }
    const { name, email, phone, guestCount, date }: IBookingData = req.body;

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        guestCount,
        date,
      },
    });
    res.status(201).json({
      success: true,
      booking,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const err: HttpException = error;
    res.status(err.status || 500).json({
      success: false,
      errors: [err.message],
    });
  }
};

export default withValidation(handler, bookingSchema.create);
