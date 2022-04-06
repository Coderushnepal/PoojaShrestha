import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan'; 
import express from 'express';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';
import cors from 'cors';

import router from './routes.js';
import logger from './utils/logger.js';
import errorHandler from "./middlewares/errorHandler.js";


const server = express(); //server
server.use(cors());

dotenv.config();

server.use(serveFavicon('./public/logo.ico'));
server.use(helmet());
server.use(morgan('common'));

// const middleware = (req, res, next) => {
// 	console.log('Body:', req.body);

// 	next();
// }


server.use(cors());
server.use(bodyParser.json());
server.use(router);
server.use(errorHandler);

server.listen(process.env.PORT, () => {
	logger.info(`Listening on 127.0.0.1:${process.env.PORT}\n`);
});