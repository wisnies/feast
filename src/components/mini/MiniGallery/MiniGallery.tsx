import { FC } from 'react';
import { galleryItems } from '@/libs/data/galleryItems';
import { MGContainer, MGImage, MGImageContainer } from './MiniGallery.style';

export const MiniGallery: FC = () => {
  return (
    <MGContainer>
      {galleryItems.slice(0, 3).map((item) => (
        <MGImageContainer key={item.id}>
          <MGImage src={item.src} alt={item.alt} fill priority={false} />
        </MGImageContainer>
      ))}
    </MGContainer>
  );
};
