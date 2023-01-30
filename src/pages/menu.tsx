import { FC } from 'react';
import Head from 'next/head';
import OffHero from '@/components/hero/OffHero';
import Menu from '@/components/Menu';
import { PageContainer } from '@/styles/page';

const MenuPage: FC = () => {
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
