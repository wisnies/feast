import { NextPage } from 'next';
import Head from 'next/head';
import BookTable from '@/components/BookTable';
import OffHero from '@/components/hero/OffHero';
import { PageContainer } from '@/styles/page';

const BookTablePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Book Table | Feast BBQ</title>
      </Head>
      <OffHero text='Book Table | Feast BBQ' />
      <PageContainer>
        <BookTable />
      </PageContainer>
    </>
  );
};

export default BookTablePage;
