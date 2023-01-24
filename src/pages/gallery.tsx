import { FC } from 'react';
import Head from 'next/head';
import Gallery from '@/components/Gallery';
import Title from '@/components/layout/Title';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageContainer, PageSection } from '@/styles/page';

const GalleryPage: FC = () => {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>

      <PageContainer>
        <Title>Feast gallery</Title>
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
