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
    .getEachNews(+req.params.newsIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function addNews(req, res, next) {
  console.log("posting:", req.body);
  newsService
    .addNews(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function updateNews(req, res, next) {
  newsService
    .updateNews(+req.params.newsIdentifier, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function removeNews(req, res, next) {
  newsService
    .removeNews(+req.params.newsIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
