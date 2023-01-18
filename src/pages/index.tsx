import { FC } from 'react';
import Head from 'next/head';
import { StyledText } from '@/components/typography/StyledText';

const HomePage: FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page</h1>
      <StyledText text='hello' />
    </div>
  );
};

export default HomePage;
