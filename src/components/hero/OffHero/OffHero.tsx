import { FC } from 'react';
import {
  HeroOverlay,
  HeroToBodyShapeContainer,
  HeroToBodyShapeL,
  HeroToBodyShapeR,
} from '@/styles/layout';
import { OHContainer, OHImage, OHTitle } from './OffHero.style';

type OffHeroProps = {
  text: string;
};

export const OffHero: FC<OffHeroProps> = ({ text }: OffHeroProps) => {
  return (
    <OHContainer>
      <OHImage
        src='/assets/hero/off-hero.jpg'
        alt='Off hero background'
        fill
        priority={false}
      />
      <HeroOverlay />
      <OHTitle as='h1'>{text}</OHTitle>
      <HeroToBodyShapeContainer>
        <HeroToBodyShapeL />
        <HeroToBodyShapeR />
      </HeroToBodyShapeContainer>
    </OHContainer>
  );
};
