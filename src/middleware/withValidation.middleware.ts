/* eslint-disable consistent-return */
import { Schema, ValidationErrorItem } from 'joi';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const withValidation = (handler: NextApiHandler, schema: Schema) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const validationOptions = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true,
      };
      req.body = await schema.validateAsync(req.body, validationOptions);
      return handler(req, res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errors: string[] = [];
      error.details.forEach((err: ValidationErrorItem) => {
        errors.push(err.message);
      });
      res.status(400).json({
        success: false,
        errors,
      });
    }
  };
};
/* eslint-enable consistent-return */
