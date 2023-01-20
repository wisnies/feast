import { FC } from 'react';
import Image from 'next/image';
import {
  MHContainer,
  MHOverlay,
  MHShapeContainer,
  MHShapeL,
  MHShapeR,
  MHContainerInner,
  MHEventBox,
  MHEvent,
  MHTitleSection,
  MHMapLink,
  MHTitle,
  MHButtonContainer,
} from './MainHero.style';

export const MainHero: FC = () => {
  return (
    <MHContainer>
      <Image
        src='/assets/hero/main-hero.jpg'
        alt='charcoal grill'
        fill
        objectFit='cover'
      />
      <MHOverlay />
      <MHShapeContainer>
        <MHShapeL />
        <MHShapeR />
      </MHShapeContainer>
      <MHContainerInner>
        <MHTitleSection>
          <MHMapLink>Where to find us</MHMapLink>
          <MHTitle as='h1'>True Texan BBQ</MHTitle>
          <MHButtonContainer>a</MHButtonContainer>
        </MHTitleSection>
        <MHEvent>aaa</MHEvent>
        <MHEventBox>a a</MHEventBox>
      </MHContainerInner>
    </MHContainer>
  );
};
