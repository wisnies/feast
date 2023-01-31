import Joi from 'joi';

const create = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .required(),
  phone: Joi.number().min(100000000).max(999999999).required(),
  guestCount: Joi.number().min(1).max(8),
  date: Joi.date().required(),
  tos: Joi.boolean().invalid(false).required(),
});

export const bookingSchema = { create };
