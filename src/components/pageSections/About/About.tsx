import { FC } from 'react';
import DecoratedTitle from '@/components/layout/DecoratedTitle';
import { ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { Text } from '@/styles/typography';

export const About: FC = () => {
  return (
    <PageSection>
      <DecoratedTitle>about feast</DecoratedTitle>
      <Text mb={1} align='justify'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
        quae repellat explicabo sapiente, eligendi necessitatibus doloribus
        quasi in porro deserunt officiis. Dicta, quas soluta excepturi tempora
        asperiores quam aperiam labore laboriosam iusto quis eos doloremque
        natus adipisci illo consequuntur voluptatum aliquam nobis. Ut, sed
        dolore odit nisi inventore libero ad optio modi, perferendis praesentium
        quo iure! Aut tenetur aspernatur, doloremque facere quibusdam nobis
        soluta quisquam eius praesentium, ab deserunt illo.
      </Text>
      <Text mb={1} align='justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem
        quae modi, harum explicabo corporis sint unde officia, animi in,
        deserunt similique!
      </Text>
      <ButtonContainer>
        <LinkButton href='/gallery' color='accent3' position='center'>
          gallery
        </LinkButton>
        <LinkButton href='/events' color='accent1' position='center'>
          events
        </LinkButton>
      </ButtonContainer>
    </PageSection>
  );
};
