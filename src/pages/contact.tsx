import { FC } from 'react';
import Head from 'next/head';
import ContactInfo from '@/components/ContactInfo';
import OffHero from '@/components/hero/OffHero';
import Title from '@/components/layout/Title';
import MapIframe from '@/components/MapIframe';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageContainer, PageSection } from '@/styles/page';
import { LongText } from '@/styles/typography';

const ContactPage: FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Feast BBQ</title>
      </Head>
      <OffHero text='Contact Us | Feast BBQ' />
      <PageContainer>
        <Title>Contact information</Title>
        <PageSection>
          <LongText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            eligendi necessitatibus voluptatibus, eaque repellendus temporibus,
            provident saepe cum repudiandae tempora voluptas placeat tenetur
            pariatur qui id, eius molestiae dolore deserunt. Amet sint nisi
            debitis assumenda id a hic mollitia magnam error similique, quae
            temporibus dolorum repellat corrupti obcaecati quo modi! Pariatur ut
            doloribus quod praesentium.
          </LongText>
          <ContactInfo isFooter={false} />
          <MapIframe />
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

export default ContactPage;
