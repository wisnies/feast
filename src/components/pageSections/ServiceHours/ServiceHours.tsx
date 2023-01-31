import { FC } from 'react';
import DecoratedTitle from '@/components/layout/DecoratedTitle';
import { serviceHours } from '@/libs/data/serviceHours';
import { ButtonContainer, LinkButton } from '@/styles/buttons';
import { PageSection } from '@/styles/page';
import { displayHours } from '@/utils/displayHours';
import {
  SHContainer,
  SHBox,
  SHDayRange,
  SHHoursRange,
  SHSpecialFeature,
} from './ServiceHours.style';

export const ServiceHours: FC = () => {
  return (
    <PageSection>
      <DecoratedTitle>Service hours</DecoratedTitle>

      <SHContainer>
        {serviceHours.map((item) => (
          <SHBox key={item.dayRange.beg}>
            <SHDayRange>
              {item.dayRange.end
                ? `${item.dayRange.beg} - ${item.dayRange.end}`
                : item.dayRange.beg}
            </SHDayRange>
            <SHHoursRange>{`${displayHours(
              item.hoursRange.beg
            )} - ${displayHours(item.hoursRange.end)}`}</SHHoursRange>
            {item.specialFeature && (
              <SHSpecialFeature>{item.specialFeature}</SHSpecialFeature>
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
