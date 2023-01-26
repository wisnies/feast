import type { NextApiRequest, NextApiResponse } from 'next';
import { IUpcomingEventRes } from '@/libs/interfaces/Response.interface';
import prisma from '@/libs/prisma';

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse<IUpcomingEventRes>
) => {
  try {
    const event = await prisma.event.findFirst({
      where: {
        date: {
          gt: new Date(),
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        date: true,
        thumbnail: true,
        description: true,
      },
      take: 1,
    });

    res.status(200).json({
      event,
    });
  } catch (err) {
    throw new Error('Unable to fetch upcoming event');
  }
};

export default handler;
