import { FC } from 'react';
import {
  HeroOverlay,
  HeroToBodyShapeContainer,
  HeroToBodyShapeL,
  HeroToBodyShapeR,
} from '@/styles/layout';
import { Title } from '@/styles/typography';
import { OHContainer, OHImage } from './OffHero.style';

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
        sizes='100vw'
      />
      <HeroOverlay />
      <Title as='h1' color='secondary' size={1.8}>
        {text}
      </Title>
      <HeroToBodyShapeContainer>
        <HeroToBodyShapeL />
        <HeroToBodyShapeR />
      </HeroToBodyShapeContainer>
    </OHContainer>
  );
};
