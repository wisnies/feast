import { NextPage } from 'next';
import Head from 'next/head';
import OffHero from '@/components/hero/OffHero';
import Menu from '@/components/pageSections/Menu';
import { PageContainer } from '@/styles/page';

const MenuPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Menu | Feast BBQ</title>
      </Head>
      <OffHero text='Menu | Feast BBQ' />
      <PageContainer>
        <Menu />
      </PageContainer>
    </>
  );
};

export default MenuPage;
