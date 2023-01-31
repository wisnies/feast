import type { NextApiRequest, NextApiResponse } from 'next';
import HttpException from '@/libs/exceptions/http.exception';
import { IBooking } from '@/libs/interfaces/Booking.interface';
import prisma from '@/libs/prisma';

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
    if (req.method !== 'GET') {
      throw new HttpException(400, 'Invalid request method');
    }
    const { id } = req.query;
    if (typeof id !== 'string') {
      throw new HttpException(400, 'Invalid id type');
    }

    const booking = await prisma.booking.findUnique({
      where: {
        id,
      },
    });

    if (!booking) {
      throw new HttpException(404, 'Invalid booking id');
    }

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

export default handler;
