export interface IServiceHours {
  dayRange: {
    beg: string;
    end?: string;
  };
  hoursRange: {
    beg: string;
    end: string;
  };
  specialFeature?: string;
}
