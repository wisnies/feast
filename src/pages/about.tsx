import { FC } from 'react';
import Head from 'next/head';
import OffHero from '@/components/hero/OffHero';
import Title from '@/components/layout/Title';
import ServiceHours from '@/components/ServiceHours';
import { ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageContainer, PageParaghaph, PageSection } from '@/styles/page';

const AboutPage: FC = () => {
  return (
    <>
      <Head>
        <title>About Us | Feast BBQ</title>
      </Head>
      <OffHero text='About Us | Feast BBQ' />
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
        <Title>feast bbq</Title>
        <PageSection>
          <PageParaghaph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus, quae repellat explicabo sapiente, eligendi
            necessitatibus doloribus quasi in porro deserunt officiis. Dicta,
            quas soluta excepturi tempora asperiores quam aperiam labore
            laboriosam iusto quis eos doloremque natus adipisci illo
            consequuntur voluptatum aliquam nobis. Ut, sed dolore odit nisi
            inventore libero ad optio modi, perferendis praesentium quo iure!
            Aut tenetur aspernatur, doloremque facere quibusdam nobis soluta
            quisquam eius praesentium, ab deserunt illo.
          </PageParaghaph>
          <PageParaghaph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem quae modi, harum explicabo corporis sint unde officia, animi
            in, deserunt similique!
          </PageParaghaph>
          <ButtonContainer>
            <LinkButton href='/gallery' color='accent3' position='center'>
              gallery
            </LinkButton>
            <LinkButton href='/events' color='accent1' position='center'>
              events
            </LinkButton>
          </ButtonContainer>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default AboutPage;
