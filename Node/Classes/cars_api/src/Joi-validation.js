import Joi from 'joi';

const validation = Joi.object({
    name: Joi.string().max(50).required(),
    color: Joi.string().max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    address: Joi.string().pattern(/^[a-zA-Z0-9]$/).required(),
    country: Joi.string().max(50).required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
});


