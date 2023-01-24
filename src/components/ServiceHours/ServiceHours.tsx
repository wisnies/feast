import { FC } from 'react';
import { serviceHours } from '@/libs/data/serviceHours';
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
    <SHContainer>
      {serviceHours.map((item) => (
        <SHBox key={item.dayRange.beg}>
          <SHDayRange>
            {item.dayRange.end
              ? `${item.dayRange.beg} - ${item.dayRange.end}`
              : item.dayRange.beg}
          </SHDayRange>
          <SHHoursRange>{`${displayHours(item.hoursRange.beg)} - ${displayHours(
            item.hoursRange.end
          )}`}</SHHoursRange>
          {item.specialFeature && (
            <SHSpecialFeature>{item.specialFeature}</SHSpecialFeature>
          )}
        </SHBox>
      ))}
    </SHContainer>
  );
};
