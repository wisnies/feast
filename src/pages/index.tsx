import { FC } from 'react';
import Head from 'next/head';
import MainHero from '@/components/hero/MainHero';

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <MainHero />
    </>
  );
};

export default HomePage;
