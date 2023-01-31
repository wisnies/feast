import type { NextApiRequest, NextApiResponse } from 'next';
import HttpException from '@/libs/exceptions/http.exception';
import prisma from '@/libs/prisma';
import type { ErrorRes, EventListItemRes } from '@/libs/types/Response.type';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<EventListItemRes | ErrorRes>
) => {
  if (req.method !== 'GET') {
    throw new HttpException(400, 'Invalid request method');
  }
  const { mode } = req.query;

  try {
    let filters = {};
    if (mode === 'upcoming') {
      filters = {
        ...filters,
        where: {
          date: {
            gt: new Date(),
          },
        },
        take: 6,
        orderBy: [
          {
            date: 'asc',
          },
        ],
      };
    }
    if (mode === 'archived') {
      filters = {
        ...filters,
        where: {
          date: {
            lt: new Date(),
          },
        },
        orderBy: [
          {
            date: 'desc',
          },
        ],
      };
    }
    const events = await prisma.event.findMany({
      ...filters,
      select: {
        id: true,
        title: true,
        slug: true,
        date: true,
        thumbnail: true,
        description: true,
      },
    });

    res.status(200).json({
      success: true,
      events,
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
