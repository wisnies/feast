import { FC } from 'react';
import Image from 'next/image';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa';
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
  FooterDescImgContainer,
  FooterDescText,
  FooterContactTitle,
  FooterContactText,
  FooterContactLink,
  FooterContactContainer,
  FooterContactIconContainer,
  FooterContactIconLink,
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
            <FooterDescImgContainer>
              <Image
                src='/assets/logo/logo-full-2c.png'
                alt='Feast Logo'
                fill
                sizes='20vw'
              />
            </FooterDescImgContainer>
            <FooterDescText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, necessitatibus in dolorem nisi aut alias ipsum error
              omnis libero, possimus commodi ab, enim repellat aspernatur
              consequatur?
            </FooterDescText>
          </FooterCol>
          <FooterCol>
            <FooterContactContainer>
              <FooterContactTitle>Feast</FooterContactTitle>
              <FooterContactText>
                Call us:{' '}
                <FooterContactLink href='tel:123-456-789'>
                  123-456-789
                </FooterContactLink>
              </FooterContactText>
              <FooterContactText>
                Mail us:{' '}
                <FooterContactLink href='mailto:feast@email.com'>
                  feast@email.com
                </FooterContactLink>
              </FooterContactText>
              <FooterContactTitle>Visit us</FooterContactTitle>
              <FooterContactText>
                9915 Monroe Rd, Houston, TX 77075{' '}
                <FooterContactLink
                  target='_blank'
                  rel='norefferer'
                  href='https://www.google.com/maps/place/9915+Monroe+Rd,+Houston,+TX+77075/@29.62213,-95.265791,13z/data=!4m6!3m5!1s0x8640971c34a28347:0x29c7541558f6fc8f!8m2!3d29.6221295!4d-95.265791!16s%2Fg%2F11c4lzlpjg?hl=pl-PL&gl=US'
                >
                  map link
                </FooterContactLink>
              </FooterContactText>
              <FooterContactTitle>Follow us</FooterContactTitle>
              <FooterContactIconContainer>
                <FooterContactIconLink href='#'>
                  <FaFacebook />
                  facebook
                </FooterContactIconLink>
                <FooterContactIconLink href='#'>
                  <FaTwitter />
                  twitter
                </FooterContactIconLink>
                <FooterContactIconLink href='#'>
                  <FaInstagram />
                  instagram
                </FooterContactIconLink>
                <FooterContactIconLink href='#'>
                  <FaPinterest />
                  pinterest
                </FooterContactIconLink>
              </FooterContactIconContainer>
            </FooterContactContainer>
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
