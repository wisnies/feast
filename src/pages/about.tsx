import { NextPage } from 'next';
import Head from 'next/head';
import OffHero from '@/components/hero/OffHero';
import About from '@/components/pageSections/About';
import ServiceHours from '@/components/pageSections/ServiceHours';
import { PageContainer } from '@/styles/page';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Feast BBQ</title>
      </Head>
      <OffHero text='About Us | Feast BBQ' />
      <PageContainer>
        <ServiceHours />
        <About />
      </PageContainer>
    </>
  );
};

export default AboutPage;
