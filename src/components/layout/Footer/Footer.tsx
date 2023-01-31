import { FC } from 'react';
import ContactInfo from '@/components/_elements/ContactInfo';
import FeastMemo from '@/components/_elements/FeastMemo';
import {
  FooterContainer,
  FooterInner,
  FooterShapeContaier,
  FooterShapeL,
  FooterShapeR,
  FooterBar,
  FooterRepo,
  FooterRow,
  FooterCol,
  FooterBarText,
  FooterBarLink,
  FooterRepoText,
  FooterRepoLink,
} from './Footer.style';

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterShapeContaier>
        <FooterShapeL />
        <FooterShapeR />
      </FooterShapeContaier>
      <FooterInner>
        <FooterRow>
          <FooterCol>
            <FeastMemo isFooter />
          </FooterCol>
          <FooterCol>
            <ContactInfo isFooter />
          </FooterCol>
        </FooterRow>
        <FooterBar>
          <FooterBarText>
            You can find us at{' '}
            <FooterBarLink href='/contact'>
              9915 Monroe Rd, Houston
            </FooterBarLink>
            , the best spot for an amazing BBQ
          </FooterBarText>
        </FooterBar>
        <FooterRepo>
          <FooterRepoText>
            Copyright Mateusz Wiśniewski &copy;2023 - {new Date().getFullYear()}
          </FooterRepoText>
          <FooterRepoLink
            href='https://github.com/wisnies/feast'
            target='_blank'
            rel='norefferer'
          >
            Github repo
          </FooterRepoLink>
        </FooterRepo>
      </FooterInner>
    </FooterContainer>
  );
};
