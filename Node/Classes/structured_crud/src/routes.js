import {Router} from 'express';

import addCarSchema from './schemas/addCar.js';
import * as carController from './controllers/car.js';
import getCarsQuerySchema from './schemas/getCarsQuery.js';
import {validateBody, validateQueryParams} from './middlewares/validation.js';

const router = Router();

router.get('/', (req, res, next) => {
    res.send('This is the response from the index(/) route');
});

router.get('/cars', validateQueryParams(getCarsQuerySchema), carController.getCars);

router.get('/cars/:carIdentifier', carController.getCar);

router.post('/cars', validateBody(addCarSchema), carController.saveCar);

router.put('/cars/:carIdentifier', carController.updateCar);

router.delete('/cars/:carIdentifier', carController.removeCar);

export default router;