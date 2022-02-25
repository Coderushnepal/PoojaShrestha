import helmet from 'helmet';
import morgan from 'morgan'; //http request logger
import express from 'express';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';

import logger from './utils/logger.js';
import routes from './routes.js';

const server = express(); //server

server.use(serveFavicon('./public/favicon.ico'));

server.use(morgan('common'));
server.use(helmet());
server.use(bodyParser.json());

server.use(routes);

const PORT = 8848;

server.listen(PORT, () => {
    logger.info(`Listening on 127.0.0.1:${PORT}\n`);
});