import type { NextApiRequest, NextApiResponse } from 'next';
import {
  IEventListRes,
  IUpcomingEventRes,
} from '@/libs/interfaces/Response.interface';
import prisma from '@/libs/prisma';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IUpcomingEventRes | IEventListRes>
) => {
  const { select } = req.query;
  switch (select) {
    case 'upcoming':
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
          orderBy: [
            {
              date: 'asc',
            },
          ],
          take: 1,
        });

        res.status(200).json({
          event,
        });
      } catch (err) {
        throw new Error('Unable to fetch upcoming event');
      }
      break;
    default:
      try {
        const events = await prisma.event.findMany({
          orderBy: [
            {
              date: 'asc',
            },
          ],
        });

        res.status(200).json({
          events,
        });
      } catch (err) {
        throw new Error('Unable to fetch events');
      }
  }
};

export default handler;
