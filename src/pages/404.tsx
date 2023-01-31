import { NextPage } from 'next';
import Head from 'next/head';
import { PageContainer } from '@/styles/page';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not found</title>
      </Head>
      <PageContainer>
        <h1>Error</h1>
      </PageContainer>
    </>
  );
};

export default NotFoundPage;
