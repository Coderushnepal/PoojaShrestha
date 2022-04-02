import * as userService from "../services/user.js";

export function getUser(req, res, next) {

  userService
    .getAllUser(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function addUser(req, res, next) {
    userService
      .createUser(req.body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
}
