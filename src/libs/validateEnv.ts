import { cleanEnv, str } from 'envalid';

export const validateEnv = (): void => {
  cleanEnv(process.env, {
    NODE_ENV: str({
      choices: ['development', 'production'],
    }),
    NEXT_PULIC_API_URL: str({
      default: 'http://localhost:3000/api',
    }),
  });
};
