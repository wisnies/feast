import { FC } from 'react';
import Head from 'next/head';
import OffHero from '@/components/hero/OffHero';

const MenuPage: FC = () => {
  return (
    <>
      <Head>
        <title>Menu | Feast BBQ</title>
      </Head>
      <OffHero text='Menu | Feast BBQ' />
      <p>MenuPage</p>
    </>
  );
};

export default MenuPage;
