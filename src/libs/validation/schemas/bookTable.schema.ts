import Joi from 'joi';

const bookTable = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .required(),
  phone: Joi.string()
    .length(9)
    .pattern(/^[0-9]+$/)
    .required(),
  guestCount: Joi.number().min(1).max(8),
  tos: Joi.boolean().invalid(false).required(),
  date: Joi.date().required(),
});

export const schema = { bookTable };
