import * as newsService from "../services/news.js";

export function getNews(req, res, next) {
  console.log("query", req.query);
  newsService
    .getAllNews(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
