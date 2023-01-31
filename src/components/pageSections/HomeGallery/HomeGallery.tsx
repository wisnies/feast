import { FC } from 'react';
import { v4 } from 'uuid';
import { galleryItems } from '@/libs/data/galleryItems';
import { LinkButton, SingleButtonContainer } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { HGContainer, HGImage, HGImageContainer } from './HomeGallery.style';

export const HomeGallery: FC = () => {
  return (
    <PageSection>
      <HGContainer>
        {galleryItems.slice(0, 3).map((item) => (
          <HGImageContainer key={v4()}>
            <HGImage
              src={item.src}
              alt={item.alt}
              fill
              priority={false}
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
            />
          </HGImageContainer>
        ))}
      </HGContainer>
      <SingleButtonContainer>
        <LinkButton href='/gallery' color='primary' position='center'>
          gallery
        </LinkButton>
      </SingleButtonContainer>
    </PageSection>
  );
};
