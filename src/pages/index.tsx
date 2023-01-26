import { FC } from 'react';
import Head from 'next/head';
import MainHero from '@/components/hero/MainHero';
import Title from '@/components/layout/Title';
import MiniAbout from '@/components/mini/MiniAbout';
import MiniEvent from '@/components/mini/MiniEvent';
import MiniGallery from '@/components/mini/MiniGallery';
import ServiceHours from '@/components/ServiceHours';
import {
  ButtonContainer,
  LinkButton,
  SingleButtonContainer,
} from '@/styles/buttons';
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
        <Title>About Feast</Title>
        <PageSection>
          <MiniAbout />
          <ButtonContainer>
            <LinkButton href='/about' color='accent3' position='center'>
              about us
            </LinkButton>
            <LinkButton href='/contact' color='accent1' position='center'>
              contact us
            </LinkButton>
          </ButtonContainer>
        </PageSection>
        <MiniEvent />
        <PageSection>
          <MiniGallery />
          <SingleButtonContainer>
            <LinkButton href='/gallery' color='primary' position='center'>
              gallery
            </LinkButton>
          </SingleButtonContainer>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default HomePage;
