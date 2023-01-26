import { FC } from 'react';
import Head from 'next/head';
import OffHero from '@/components/hero/OffHero';

const BookTablePage: FC = () => {
  return (
    <>
      <Head>
        <title>Book Table | Feast BBQ</title>
      </Head>
      <OffHero text='Book Table | Feast BBQ' />
      <p>BookTablePage</p>
    </>
  );
};

export default BookTablePage;
