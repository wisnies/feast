import type { NextApiRequest, NextApiResponse } from 'next';
import { IEventMeta } from '@/libs/interfaces/Event.interface';
import prisma from '@/libs/prisma';

type Data = {
  events: IEventMeta[];
};

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse<Data | { message: string }>
) => {
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
      },
      orderBy: [
        {
          date: 'asc',
        },
      ],
      take: 6,
    });

    res.status(200).json({
      events,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      message: err.message as string,
    });
  }
};

export default handler;
