import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email().max(50).optional(),
  name: Joi.string().max(100).optional(),
  password: Joi.string().max(200).optional(),
  is_admin: Joi.boolean().default(false).optional(),
});

export default schema;