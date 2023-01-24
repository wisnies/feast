import { FC } from 'react';
import Head from 'next/head';
import MainHero from '@/components/hero/MainHero';
import Title from '@/components/layout/Title';
import ServiceHours from '@/components/ServiceHours';
import { ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageContainer, PageSection } from '@/styles/page';

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <MainHero />
      <PageContainer>
        <Title>service hours</Title>
        <PageSection>
          <ServiceHours />
          <ButtonContainer>
            <LinkButton href='/menu' color='accent1' position='center'>
              menu
            </LinkButton>
            <LinkButton href='/book-table' color='accent3' position='center'>
              book table
            </LinkButton>
          </ButtonContainer>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default HomePage;
