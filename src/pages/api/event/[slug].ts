import type { NextApiRequest, NextApiResponse } from 'next';
import HttpException from '@/libs/exceptions/http.exception';
import prisma from '@/libs/prisma';
import { EventRes, ErrorRes } from '@/libs/types/Response.type';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<EventRes | ErrorRes>
) => {
  try {
    if (req.method !== 'GET') {
      throw new HttpException(400, 'Invalid request method');
    }
    const { slug } = req.query;

    if (typeof slug !== 'string') {
      throw new HttpException(400, 'Invalid slug type');
    }
    const event = await prisma.event.findUnique({
      where: {
        slug,
      },
    });

    if (!event) {
      throw new HttpException(404, 'Invalid event slug');
    }

    res.status(200).json({
      success: true,
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
  } catch (error: any) {
    const err: HttpException = error;
    res.status(err.status || 500).json({
      success: false,
      errors: [err.message],
    });
  }
};

export default handler;
