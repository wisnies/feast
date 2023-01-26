import type { NextApiRequest, NextApiResponse } from 'next';
import { IEventListRes } from '@/libs/interfaces/Response.interface';
import prisma from '@/libs/prisma';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IEventListRes>
) => {
  const { select } = req.query;
  switch (select) {
    case 'archived':
      try {
        const events = await prisma.event.findMany({
          where: {
            date: {
              lt: new Date(),
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
              date: 'desc',
            },
          ],
        });

        res.status(200).json({
          events,
        });
      } catch (err) {
        throw new Error('Unable to fetch upcoming event');
      }
      break;
    case 'upcoming':
      try {
        const events = await prisma.event.findMany({
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
          skip: 1,
        });

        res.status(200).json({
          events,
        });
      } catch (err) {
        throw new Error('Unable to fetch upcoming events');
      }
      break;
    default:
      try {
        const events = await prisma.event.findMany({
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
        });

        res.status(200).json({
          events,
        });
      } catch (err) {
        throw new Error('Unable to fetch all event');
      }
      break;
  }
};

export default handler;
