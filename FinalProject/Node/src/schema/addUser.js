import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email().max(50).required(),
  name: Joi.string().max(100).required(),
  password: Joi.string().max(200).required(),
  isAdmin: Joi.boolean().default(false).optional(),
});

export default schema;