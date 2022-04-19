import Joi from 'joi';

const schema = Joi.object({
  categoryId: Joi.number().integer().required(),
  title: Joi.string().max(500).required(),
  description: Joi.string().max(1000).required(),
  isExclusive: Joi.boolean().default(true).optional(),
  publishedDate: Joi.date().optional(),
  userId: Joi.number().integer().required(),
});

export default schema;
