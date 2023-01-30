import { FC, useEffect, useState, useMemo } from 'react';
import { displayDate } from '@/utils/displayDate';
import { CContainer, CText, StyledCalendar } from './Calendar.style';

type CalendarProps = {
  handleDate: (date: Date) => void;
};

export const Calendar: FC<CalendarProps> = ({ handleDate }: CalendarProps) => {
  const today = useMemo(() => new Date(), []);
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);

  useEffect(() => {
    const newMinDate = new Date(today);
    const newMaxDate = new Date(today);
    newMinDate.setDate(today.getDate() + 1);
    newMaxDate.setDate(today.getDate() + 30);
    setMinDate(newMinDate);
    setMaxDate(newMaxDate);
  }, [today]);

  const onChange = (newDate: Date) => {
    ///
    setSelectedDate(newDate);
    handleDate(newDate);
  };

  return (
    <CContainer>
      <StyledCalendar
        locale='en-US'
        value={selectedDate}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
      />
      {selectedDate && (
        <CText>Selected date: {displayDate(selectedDate, false)}</CText>
      )}
    </CContainer>
  );
};
