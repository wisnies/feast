import { IServiceHours } from '@/libs/interfaces/ServiceHours.interface';

export const serviceHours: IServiceHours[] = [
  {
    dayRange: {
      beg: 'monday',
      end: 'thursday',
    },
    hoursRange: {
      beg: '14',
      end: '23',
    },
  },
  {
    dayRange: {
      beg: 'friday',
    },
    hoursRange: {
      beg: '16',
      end: '4',
    },
    specialFeature: 'legendary bbq',
  },
  {
    dayRange: {
      beg: 'saturday',
    },
    hoursRange: {
      beg: '16',
      end: '23',
    },
    specialFeature: 'calm bbq',
  },
  {
    dayRange: {
      beg: 'sunday',
    },
    hoursRange: {
      beg: '11:30',
      end: '20',
    },
    specialFeature: 'family bbq',
  },
];
