import { FC } from 'react';
import Head from 'next/head';
import OffHero from '@/components/hero/OffHero';
import Title from '@/components/layout/Title';
import MiniEvent from '@/components/mini/MiniEvent';
import { PageContainer, PageSection } from '@/styles/page';

const EventsPage: FC = () => {
  return (
    <>
      <Head>
        <title>Events | Feast BBQ</title>
      </Head>
      <OffHero text='Events | Feast BBQ' />
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
