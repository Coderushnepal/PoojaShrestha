import diskDb from 'diskdb';
import helmet from 'helmet';
import morgan from 'morgan'; //http request logger
import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import serveFavicon from 'serve-favicon';


const server = express(); //server

server.use(serveFavicon('./public/favicon.ico'));

const logger = winston.createLogger({
    level: 'info',
});

    logger.add(
        new winston.transports.Console({ format: winston.format.simple() }),
  );

const db = diskDb.connect('./db', ['cars']);

server.use(morgan('common'));
server.use(helmet());
server.use(bodyParser.json());


server.get('/', (req, res, next) => {
    res.send('This is the response from the index(/) route');
});

server.get('/cars', (req, res, next) => {
    logger.info('Fetching all cars');

    const data = db.cars.find();
    res.json({
        data,
        message: `List of cars`,
    });
});

server.get('/cars/:carIdentifier', (req, res, next) => {

    const carId = req.params.carIdentifier; 
    console.log(req.params)
    
    const car = db.cars.findOne({_id: carId});

    if(!car) { //car.length in case of filter
        logger.error(`Could not find car with Id ${carId} logger`); 
        res.status(404).json({
            message: `Could not find car with Id ${carId}`
        });

      return;
    }

        res.json({
            data: car,
            message: `Details of carId: ${carId}`
        });

    logger.info(`This is the GET method for carId ${carId}`);
});


server.post('/cars', (req, res, next) => {
    
    logger.debug('Payload received', req.body);

    //find => JS filter
    //findOne => JS find

    const existingData = db.cars.findOne(req.body);

    if(existingData){
        logger.error('Data already exists');

        res.status(400).json({
            message: `Data already exists`,
        });

        return;
    }

    const data = db.cars.save(req.body);

    res.json({
        data,
        message: 'Added record successfully [diskdb]',
    });
});

server.put('/cars/:carIdentifier', (req, res, next) => {
    const carId = req.params.carIdentifier;

    const car = db.cars.findOne({_id: carId});

    if(!car){
        logger.error(`Cannot find car with id ${carId}`);

        res.status(404).json({
            message: `Cannot find car with id ${carId}`
        });

        return;
    }

    db.cars.update({_id: carId}, req.body); //{upsert: true}
    const updatedData = db.cars.findOne({_id: carId});

    res.json({
        data: updatedData,
        message: 'Record updated successfully',
    });
});

server.delete('/cars/:carIdentifier', (req, res, next) => {
    const carId = req.params.carIdentifier;

    const car = db.cars.findOne({_id: carId});

    if(!car){
        logger.error(`Cannot find car with id ${carId} to delete`);

        res.status(404).json({
            message: `Cannot find car with id ${carId} to delete`
        });

        return;
    }

    db.cars.remove({_id: carId}); //multi to delete all occurrences

    res.json({
        message: 'Record removed successfully',
    });
});

const PORT = 8848;

server.listen(PORT, () => {
    console.log(`Listening on 127.0.0.1:${PORT}\n`);
});