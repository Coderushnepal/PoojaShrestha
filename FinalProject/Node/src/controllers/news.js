import * as newsService from "../services/news.js";

export function getNews(req, res, next) {
  console.log("query", req.query);
  newsService
    .getAllNews(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function getEachNews(req, res, next) {
  console.log("query", req.query);
  newsService
    .getEachNews(+req.params.carIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function addNews(req, res, next) {

  console.log('posting:', req.body);
  newsService
    .addNews(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
