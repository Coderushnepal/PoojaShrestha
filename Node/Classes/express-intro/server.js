import express from 'express';
import bodyParser from 'body-parser';

const server = express(); //server

const loggingMiddleWare = (req, res, next) => {
    const url = req.url;
    const method = req.method;

    console.log(`[${new Date().toISOString()}] ${method} ${url}`)

    next();
}

server.use(bodyParser.json());
//server.use(loggingMiddleWare);

server.get('/', loggingMiddleWare, (req, res, next) => {
    res.send('This is the response from the index(/) route');
});

server.get('/cars', loggingMiddleWare, (req, res, next) => {
    res.send('This is the response from the cars(/cars) route');
});

server.post('/cars', loggingMiddleWare, (req, res, next) => {
    console.log(req.body);
    res.send('This is the response from the post cars(/cars) route');
});

const PORT = 8848;

server.listen(PORT, () => {
    console.log(`Listening on 127.0.0.1:${PORT}\n`);
});
