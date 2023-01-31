import { FC } from 'react';
import FeastMemo from '@/components/_elements/FeastMemo';
import DecoratedTitle from '@/components/layout/DecoratedTitle';
import { ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { MAContainer, MAImage, MAImageContainer } from './HomeAbout.style';

export const HomeAbout: FC = () => {
  return (
    <PageSection>
      <DecoratedTitle>About Feast</DecoratedTitle>
      <MAContainer>
        <FeastMemo isFooter={false} />
        <MAImageContainer>
          <MAImage
            src='/assets/staff/staff-1.jpg'
            alt='Feast staff'
            fill
            priority={false}
            sizes='420px'
          />
        </MAImageContainer>
      </MAContainer>
      <ButtonContainer>
        <LinkButton href='/about' color='accent3' position='center'>
          about us
        </LinkButton>
        <LinkButton href='/contact' color='accent1' position='center'>
          contact us
        </LinkButton>
      </ButtonContainer>
    </PageSection>
  );
};
