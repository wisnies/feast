import { NextPage } from 'next';
import Head from 'next/head';
import OffHero from '@/components/hero/OffHero';
import Gallery from '@/components/pageSections/Gallery';
import { PageContainer } from '@/styles/page';

const GalleryPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gallery | Feast BBQ</title>
      </Head>
      <OffHero text='Gallery | Feast BBQ' />
      <PageContainer>
        <Gallery />
      </PageContainer>
    </>
  );
};

export default GalleryPage;
