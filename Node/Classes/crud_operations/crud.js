import helmet from 'helmet';
import morgan from 'morgan'; //http request logger
import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import serveFavicon from 'serve-favicon';
import fs, { rmSync } from 'fs';


const server = express(); //server

server.use(serveFavicon('./public/favicon.ico'));

const logger = winston.createLogger({
    level: 'info',
});

    logger.add(
        new winston.transports.Console({ format: winston.format.simple() }),
  );

// const mw = (req, res, next) => {
//     const url = req.url;
//     const method = req.method;
//     const header= req.headers;
//     const status = res.statusCode;

//     console.log(url, method, header, status);
//     next();
// }

// server.use(mw);

server.use(morgan('common'));
server.use(helmet());
server.use(bodyParser.json());





server.get('/', (req, res, next) => {
    res.send('This is the response from the index(/) route');
});

server.get('/cars', (req, res, next) => {
    logger.info('Fetching all cars');

    fs.readFile('./data.txt', (err, data) => {
        if(err){
            logger.error(`Error reading from fiile: ${err.message}`);

            res.status(400).json({
                message: `Error reading to file: ${err.message}`,
            });

            return;
        }
        const str = data
            .toString()
            .split('\n')
            .filter((a) => !!a)
            .map((row) => JSON.parse(row));

        res.json({
            message: 'List of cars',
            data:str,
        });
    });
   // res.send('This is the response from the cars(/cars) route');
});

server.get('/cars/:carIdentifier', (req, res, next) => {
    const carId = +req.params.carIdentifier; //this carId name should match with the dynamic one in the get 
    //const carId = req.params gives {"carId":{"carIdentifier":"1"}
    
    console.log(req.params)
    
    fs.readFile('./data.txt', (err, data) =>
    {
        if(err){
            logger.error(`Error reading from fiile: ${err.message}`);

            res.status(400).json({
                message: `Error reading to file: ${err.message}`,
            });

            return;
        }

        const carInfo = data
            .toString()
            .split('\n')
            .find((a) => !!a && JSON.parse(a).id === carId); //can use filter too

        if(!carInfo) { //car.length in case of filter
            logger.error(`Could not find car with Id ${carId} logger`);

            res.status(404).json({
                message: `Could not find car with Id ${carId}`,
            });

            return;
        }

        res.json({
            data: JSON.parse(carInfo),
            message: `Details of carId: ${carId}`
        });
        
    });

    logger.info(`This is the GET method for carId ${carId}`);
});

server.get('/cars', (req, res, next) => {
    res.send('This is the response from the cars(/cars) route');
});

server.post('/cars', (req, res, next) => {
    logger.debug('Payload received', req.body);

    const insertParams = {
        id: Date.now(),
        ...req.body, //spread operator
    }

    const insertData = JSON.stringify(insertParams) + '\n';

    logger.info('Checking file existence');
    // const hasFile = fs.existsSync('./data.txt');

    // if(!hasFile){
    //     logger.error('Cannot find the file data.txt');

    //     res.status(404).json({
    //         message: `Cannot find the file data.txt`,
    //     });

    //     return;
   // }

    fs.readFile('./data.txt', (err, data) =>
    {
        if(err){
            logger.error(`Error reading from fiile: ${err.message}`);

            res.status(400).json({
                message: `Error reading to file: ${err.message}`,
            });

            return;
        }

        const carInfo = data
            .toString()
            .split('\n')
            .find((a) => {
                if (!a) 
                {
                    return false;
                }

                const parsedData = JSON.parse(a);

                const alreadyExists = insertParams.manufacturer === parsedData.manufacturer;
                return alreadyExists;
            }); //can use filter too

        if (carInfo) {
            logger.error(`The data for the car already exists`);

            res.status(404).json({
                message: `The data for the car already exists`,
            });

            return;
        }
    
        
        logger.info('File existence verified. Now writing to file');

        fs.appendFile('./data.txt', insertData, (err) => {
            if(err){
                logger.error(`Error writing to file: ${err.message}`);

                res.status(404).json({
                    message: `Error writing to file: ${err.message}`,
                });
            }

            logger.info('Successfully written to file');

            res.json({
                message: `Added record successfully`,
                data: insertParams,
            });
        });
    });
});


// server.delete('/cars/:carIdentifier', (req, res, next) => {

//     const insertParams = {
//         id: Date.now(),
//         ...req.body, //spread operator
//     }

    
//     const carId = +req.params.carIdentifier; //this carId name should match with the dynamic one in the get 
//     //const carId = req.params gives {"carId":{"carIdentifier":"1"}
    
    
//     fs.readFile('./data.txt', (err, data) =>
//     {
//         if(err){
//             logger.error(`${carId} doesn't exist`);

//             res.status(400).json({
//                 message: `${carId} doesn't exist`,
//             });

//             return;
//         }

//         const carInfo = data
//             .toString()
//             .split('\n')
//             .find((a) => !!a && JSON.parse(a).id === carId); //can use filter too

//         if(!carInfo) { //car.length in case of filter
//             logger.error(`Could not find car with Id ${carId} to delete`);

//             res.status(404).json({
//                 message: `Could not find car with Id ${carId} to delete`,
//             });

//             return;
//         }

//         res.json({
//             data: JSON.parse(carInfo),
//             message: `Deleted carId: ${carId}`
//         });

        

        
//     });

//     logger.info(`This is the DELETE method for carId ${carId}`);
// });

const PORT = 8848;

server.listen(PORT, () => {
    console.log(`Listening on 127.0.0.1:${PORT}\n`);
});