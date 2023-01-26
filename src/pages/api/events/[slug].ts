import type { NextApiRequest, NextApiResponse } from 'next';
import { IEvent } from '@/libs/interfaces/Event.interface';
import prisma from '@/libs/prisma';

type Data = {
  event: IEvent | null;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data | { message: string }>
) => {
  try {
    const { slug } = req.query;

    if (typeof slug !== 'string') {
      throw new Error('Invalid slug');
    }
    const event = await prisma.event.findUnique({
      where: {
        slug,
      },
    });

    if (!event) {
      throw new Error('No event');
    }

    res.status(200).json({
      event: {
        id: event.id,
        createdAt: event.createdAt,
        updatedAt: event.updatedAt,
        title: event.title,
        date: event.date,
        slug: event.slug,
        thumbnail: event.thumbnail,
        description: event.description,
        header: event.header,
        body: JSON.parse(event.body),
        pricing: JSON.parse(event.pricing),
        timeline: JSON.parse(event.timeline),
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      message: err.message as string,
    });
  }
};

export default handler;
