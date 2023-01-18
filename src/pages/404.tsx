import { FC } from 'react';
import Head from 'next/head';

const NotFoundPage: FC = () => {
  return (
    <>
      <Head>
        <title>Not found</title>
      </Head>
      <h1>404</h1>
    </>
  );
};

export default NotFoundPage;
