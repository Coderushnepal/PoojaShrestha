import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().max(50).required(),
  description: Joi.string().max(100).optional(),
});

export default schema;
