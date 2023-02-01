import { GetServerSidePropsContext } from 'next';

export const returnUrl = (ctx: GetServerSidePropsContext) => {
  if (process.env.NODE_ENV === 'production') {
    return `https://${ctx.req.rawHeaders[1]}`;
  }
  return process.env.NEXT_PUBLIC_APP_URL;
};
