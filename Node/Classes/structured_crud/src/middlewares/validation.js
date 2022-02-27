import Joi from 'joi';
import addCarSchema from '../schemas/addCar.js';

function validation(req, res, next) { //always incase of middlewares
    try {
        Joi.assert(req.body, addCarSchema);

        next();
    } catch(err) {
        res.status(400).json({
            message: 'Validation Error',
            details: err.details.map((e) => e.message),
        });
    }
} 

export default validation;