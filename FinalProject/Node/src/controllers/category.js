import * as categoryService from "../services/category.js";

export function getCategory(req, res, next) {

  categoryService
    .getAllCategory(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function getEachCategory(req, res, next) {
  categoryService
    .getEachCategory(+req.params.categoryIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}


export function addCategory(req, res, next) {

    categoryService
      .createCategory(req.body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
}
