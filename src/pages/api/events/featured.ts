import type { NextApiRequest, NextApiResponse } from 'next';
import { IEventFeatured } from '@/libs/interfaces/Event.interface';
import prisma from '@/libs/prisma';

type Data = {
  event: IEventFeatured | null;
};

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse<Data | { message: string }>
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      message: err.message as string,
    });
  }
};

export default handler;
