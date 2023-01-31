import { FC } from 'react';
import ContactInfo from '@/components/_elements/ContactInfo';
import FeastMemo from '@/components/_elements/FeastMemo';
import { InlineExternalLink, InlineLink, Text } from '@/styles/typography';
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
          <Text align='center' color='secondary'>
            You can find us at{' '}
            <InlineLink href='/contact' color='accent1'>
              9915 Monroe Rd, Houston
            </InlineLink>
            , the best spot for an amazing BBQ
          </Text>
        </FooterBar>
        <FooterRepo>
          <Text align='center' color='secondary'>
            Copyright Mateusz Wiśniewski &copy;2023 - {new Date().getFullYear()}
          </Text>
          <InlineExternalLink
            href='https://github.com/wisnies/feast'
            target='_blank'
            rel='norefferer'
            color='accent1'
          >
            Github repo
          </InlineExternalLink>
        </FooterRepo>
      </FooterInner>
    </FooterContainer>
  );
};
