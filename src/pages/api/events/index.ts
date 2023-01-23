import type { NextApiRequest, NextApiResponse } from 'next';
import { IEvent } from '@/libs/interfaces/Event.interface';
import prisma from '@/libs/prisma';

type Data = {
  events: IEvent[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'GET') {
    const { select } = req.query;
    if (select === 'meta') {
      const events = await prisma.event.findMany({
        select: {
          id: true,
          title: true,
          slug: true,
          date: true,
        },
        orderBy: [
          {
            date: 'asc',
          },
        ],
        take: 6,
      });
      res.status(200).json({ events });
    }
  }
};

export default handler;
