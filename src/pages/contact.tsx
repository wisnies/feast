import { NextPage } from 'next';
import Head from 'next/head';
import OffHero from '@/components/hero/OffHero';
import Contact from '@/components/pageSections/Contact';
import { PageContainer } from '@/styles/page';

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Feast BBQ</title>
      </Head>
      <OffHero text='Contact Us | Feast BBQ' />
      <PageContainer>
        <Contact />
      </PageContainer>
    </>
  );
};

export default ContactPage;
