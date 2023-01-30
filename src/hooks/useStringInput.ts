import { useState } from 'react';

export const useStringInput = (
  initialValue: string,
  maxLength?: number
): [
  value: string,
  bind: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  },
  reset: () => void,
  error: string,
  setError: React.Dispatch<React.SetStateAction<string>>
] => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (
        maxLength &&
        value.length >= maxLength &&
        e.target.value.length >= maxLength
      ) {
        return;
      }
      setValue(e.target.value);
    },
  };

  return [value, bind, reset, error, setError];
};
