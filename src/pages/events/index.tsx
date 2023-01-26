import { FC } from 'react';
import Head from 'next/head';
import Title from '@/components/layout/Title';
import MiniEvent from '@/components/mini/MiniEvent';
import { PageContainer, PageSection } from '@/styles/page';

const EventsPage: FC = () => {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <PageContainer>
        <PageSection>
          <MiniEvent />
        </PageSection>
        <Title>Feast Events</Title>
        <PageSection>events</PageSection>
      </PageContainer>
    </>
  );
};

export default EventsPage;
