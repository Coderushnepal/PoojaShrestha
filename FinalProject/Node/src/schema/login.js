import Joi from 'joi';

const schema = Joi.object({
  email: Joi.string().email().max(100).required(),
  password: Joi.string().max(200).required(),
});

export default schema;
