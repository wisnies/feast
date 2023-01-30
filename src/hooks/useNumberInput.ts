import { useState } from 'react';

export const useNumberInput = (
  initialValue: number
): [
  value: number,
  bind: {
    value: number;
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
      setValue(Number(e.target.value));
    },
  };

  return [value, bind, reset, error, setError];
};
