import * as carService from "../services/car.js";

export function getCars(req, res, next) {
  console.log("query", req.query);
  carService
    .getAllCars(req.query)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function getCar(req, res, next) {
  carService
    .getCar(+req.params.carIdentifier)
    .then((data) => res.json(data))
    .catch((err) => next(err));

  // const id = req.params.carIdentifier;

  // try {
  //   const data = carService.getCar(id);
  //   res.json(data);
  // } catch (err) {
  //   next(err);
  // }
}

export function saveCar(req, res, next) {

  console.log('posting:', req.body);
  carService
    .addCar(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

export function updateCar(req, res, next) {
  const id = req.params.carIdentifier;
  const body = req.body;

  try {
    const data = carService.updateCar(id, body);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export function removeCar(req, res, next) {
  const id = req.params.carIdentifier;

  try {
    const data = carService.removeCar(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
}
