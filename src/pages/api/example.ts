import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  string: string;
};

const handler = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ string: 'Handler Response' });
};

export default handler;
