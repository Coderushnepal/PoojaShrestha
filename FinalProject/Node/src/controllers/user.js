import { query } from "express";
import * as userService from "../services/user.js";
import logger from "../utils/logger.js";

export function getUser(req, res, next) {

  userService
    .getAllUser(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function getEachUser(req, res, next) {
  console.log(req);
  userService
    .getEachUser(+req.params.userIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function addUser(req, res, next) {
    userService
      .createUser(req.body)
      .then((data) => res.json(data))
      .catch((err) => next(err));
}

export function updateUser(req, res, next) {
  userService
    .updateUser(+req.params.userIdentifier, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function login(req, res, next) {
  userService
    .login(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}