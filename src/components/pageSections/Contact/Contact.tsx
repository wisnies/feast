import { FC } from 'react';
import ContactInfo from '@/components/_elements/ContactInfo';
import MapIframe from '@/components/_elements/MapIframe';
import DecoratedTitle from '@/components/layout/DecoratedTitle';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageSection } from '@/styles/page';

export const Contact: FC = () => {
  return (
    <PageSection>
      <DecoratedTitle>contact information</DecoratedTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eligendi
        necessitatibus voluptatibus, eaque repellendus temporibus, provident
        saepe cum repudiandae tempora voluptas placeat tenetur pariatur qui id,
        eius molestiae dolore deserunt. Amet sint nisi debitis assumenda id a
        hic mollitia magnam error similique, quae temporibus dolorum repellat
        corrupti obcaecati quo modi! Pariatur ut doloribus quod praesentium.
      </p>
      <ContactInfo isFooter={false} />
      <MapIframe />
      <SingleButtonContainer>
        <LinkButton href='/' color='primary' position='center'>
          Homepage
        </LinkButton>
      </SingleButtonContainer>
    </PageSection>
  );
};
