import { FC } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa';
import {
  CIContainer,
  CIExternalLink,
  CIIcon,
  CIIconContainer,
  CIText,
  CITitle,
} from './ContactInfo.style';

type ContactInfoProps = {
  isFooter: boolean;
};

export const ContactInfo: FC<ContactInfoProps> = ({
  isFooter,
}: ContactInfoProps) => {
  return (
    <CIContainer>
      <CITitle isFooter={isFooter}>contact us</CITitle>
      <CIText isFooter={isFooter}>
        call us:
        <CIExternalLink href='tel:123-456-789'>123-456-789</CIExternalLink>
      </CIText>
      <CIText isFooter={isFooter}>
        mail us:
        <CIExternalLink href='mailto:feastbbq@email.com'>
          feastbbq@email.com
        </CIExternalLink>
      </CIText>

      <CITitle isFooter={isFooter}>follow us</CITitle>
      <CIIconContainer>
        <CIIcon>
          <FaFacebook />
          facebook
        </CIIcon>
        <CIIcon>
          <FaTwitter />
          twitter
        </CIIcon>
        <CIIcon>
          <FaInstagram />
          instagram
        </CIIcon>
        <CIIcon>
          <FaPinterest />
          pinterest
        </CIIcon>
      </CIIconContainer>
      <CITitle isFooter={isFooter}>visit us</CITitle>
      <CIText isFooter={isFooter}>
        9915 Monroe Rd, Houston, TX 77075
        {isFooter && (
          <CIExternalLink
            href='https://www.google.com/maps/place/9915+Monroe+Rd,+Houston,+TX+77075/@29.62213,-95.265791,13z/data=!4m6!3m5!1s0x8640971c34a28347:0x29c7541558f6fc8f!8m2!3d29.6221295!4d-95.265791!16s%2Fg%2F11c4lzlpjg?hl=pl-PL&gl=US'
            target='_blank'
            rel='norefferer'
          >
            map
          </CIExternalLink>
        )}
      </CIText>
    </CIContainer>
  );
};
