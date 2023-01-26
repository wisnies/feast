import type { NextApiRequest, NextApiResponse } from 'next';
import { IEventFeatured } from '@/libs/interfaces/Event.interface';
import prisma from '@/libs/prisma';

type Data = {
  events: IEventFeatured[];
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      message: err.message as string,
    });
  }
};

export default handler;
