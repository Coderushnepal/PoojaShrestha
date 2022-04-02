import * as categoryService from "../services/category.js";

export function getCategory(req, res, next) {
  console.log("query", req.query);
  categoryService
    .getAllCategory(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}


export function addCategory(req, res, next) {
    console.log("adding category query", req.query);
    categoryService
      .createCategory(req.body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
}
