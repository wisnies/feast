import { FC } from 'react';
import { v4 } from 'uuid';
import { galleryItems } from '@/libs/data/galleryItems';
import { PageSection } from '@/styles/page';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { MGContainer, MGImage, MGImageContainer } from './HomeGallery.style';

export const HomeGallery: FC = () => {
  return (
    <PageSection>
      <MGContainer>
        {galleryItems.slice(0, 3).map((item) => (
          <MGImageContainer key={v4()}>
            <MGImage src={item.src} alt={item.alt} fill priority={false} />
          </MGImageContainer>
        ))}
      </MGContainer>
      <SingleButtonContainer>
        <LinkButton href='/gallery' color='primary' position='center'>
          gallery
        </LinkButton>
      </SingleButtonContainer>
    </PageSection>
  );
};
