/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, ValidationErrorItem } from 'joi';

export const validate = async (
  data: any,
  schema: Schema
): Promise<string[]> => {
  const validationOptions = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  try {
    await schema.validateAsync(data, validationOptions);
    return [];
  } catch (err: any) {
    const errors: string[] = [];
    err.details.forEach((e: ValidationErrorItem) => {
      errors.push(e.message);
    });

    return errors;
  }
};
/* eslint-enable @typescript-eslint/no-explicit-any */
