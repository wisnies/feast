import { FC } from 'react';
import DecoratedTitle from '@/components/layout/DecoratedTitle';
import { serviceHours } from '@/libs/data/serviceHours';
import { ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { Text } from '@/styles/typography';
import { displayHours } from '@/utils/displayHours';
import { SHContainer, SHBox } from './ServiceHours.style';

export const ServiceHours: FC = () => {
  return (
    <PageSection>
      <DecoratedTitle>Service hours</DecoratedTitle>

      <SHContainer>
        {serviceHours.map((item) => (
          <SHBox key={item.dayRange.beg}>
            <Text
              align='center'
              transform='uppercase'
              bold
              color='primary'
              mb={0.5}
              size={1.4}
            >
              {item.dayRange.end
                ? `${item.dayRange.beg} - ${item.dayRange.end}`
                : item.dayRange.beg}
            </Text>
            <Text
              align='center'
              transform='uppercase'
              bold
              color='accent3'
              mb={0.5}
              size={1.2}
            >{`${displayHours(item.hoursRange.beg)} - ${displayHours(
              item.hoursRange.end
            )}`}</Text>
            {item.specialFeature && (
              <Text
                align='center'
                transform='uppercase'
                bold
                color='accent1'
                mb={1}
                size={1.4}
              >
                {item.specialFeature}
              </Text>
            )}
          </SHBox>
        ))}
      </SHContainer>
      <ButtonContainer>
        <LinkButton href='/menu' color='accent1' position='center'>
          menu
        </LinkButton>
        <LinkButton href='/book-table' color='accent3' position='center'>
          book table
        </LinkButton>
      </ButtonContainer>
    </PageSection>
  );
};
