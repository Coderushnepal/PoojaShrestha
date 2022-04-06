import Joi from 'joi';

const schema = Joi.object({
  categoryId: Joi.number().integer().optional(),
  title: Joi.string().max(500).optional(),
  description: Joi.string().max(1000).optional(),
  isExclusive: Joi.boolean().default(true).optional(),
  publishedDate: Joi.date().optional(),
  userId: Joi.number().integer().optional(),
});

export default schema;

