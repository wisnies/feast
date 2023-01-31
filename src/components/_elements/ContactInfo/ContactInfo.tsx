import { FC } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa';
import { InlineExternalLink, Text, Title } from '@/styles/typography';
import { CIContainer, CIIcon, CIIconContainer } from './ContactInfo.style';

type ContactInfoProps = {
  isFooter: boolean;
};

export const ContactInfo: FC<ContactInfoProps> = ({
  isFooter,
}: ContactInfoProps) => {
  return (
    <CIContainer>
      <Title color={isFooter ? 'secondary' : 'primary'} align='left' mb={1}>
        contact us
      </Title>
      <Text
        transform='capitalize'
        color={isFooter ? 'secondary' : 'textSecondary'}
        align='left'
        mb={0.5}
      >
        call us:
        <InlineExternalLink href='tel:123-456-789' color='accent1' bold>
          {' '}
          123-456-789
        </InlineExternalLink>
      </Text>
      <Text
        transform='capitalize'
        color={isFooter ? 'secondary' : 'textSecondary'}
        align='left'
        mb={0.5}
      >
        mail us:
        <InlineExternalLink
          href='mailto:feastbbq@email.com'
          color='accent1'
          bold
          transform='lowercase'
        >
          {' '}
          feastbbq@email.com
        </InlineExternalLink>
      </Text>

      <Title color={isFooter ? 'secondary' : 'primary'} align='left' mb={1}>
        follow us
      </Title>
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
      <Title color={isFooter ? 'secondary' : 'primary'} align='left' mb={1}>
        visit us
      </Title>
      <Text
        transform='capitalize'
        color={isFooter ? 'secondary' : 'textSecondary'}
        align='left'
        mb={0.5}
      >
        9915 Monroe Rd, Houston, TX 77075
        {isFooter && (
          <InlineExternalLink
            href='https://www.google.com/maps/place/9915+Monroe+Rd,+Houston,+TX+77075/@29.62213,-95.265791,13z/data=!4m6!3m5!1s0x8640971c34a28347:0x29c7541558f6fc8f!8m2!3d29.6221295!4d-95.265791!16s%2Fg%2F11c4lzlpjg?hl=pl-PL&gl=US'
            target='_blank'
            rel='norefferer'
            color='accent1'
            bold
            transform='lowercase'
          >
            {' '}
            map
          </InlineExternalLink>
        )}
      </Text>
    </CIContainer>
  );
};
