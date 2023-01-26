import { FC } from 'react';
import Head from 'next/head';
import Gallery from '@/components/Gallery';
import OffHero from '@/components/hero/OffHero';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageContainer, PageSection } from '@/styles/page';

const GalleryPage: FC = () => {
  return (
    <>
      <Head>
        <title>Gallery | Feast BBQ</title>
      </Head>
      <OffHero text='Gallery | Feast BBQ' />
      <PageContainer>
        <PageSection>
          <Gallery />
          <SingleButtonContainer>
            <LinkButton href='/' color='primary' position='center'>
              Homepage
            </LinkButton>
          </SingleButtonContainer>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default GalleryPage;
