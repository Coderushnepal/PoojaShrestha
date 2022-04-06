import Joi from 'joi';

const schema = Joi.object({
	categoryId: Joi.number().integer(),
    userId: Joi.number().integer()
}); 

export default schema;