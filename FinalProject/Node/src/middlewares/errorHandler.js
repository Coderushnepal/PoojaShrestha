import Joi from 'joi';
import HttpStatusCodes from 'http-status-codes';
import { unauthorized } from '@hapi/boom';

export default function (err, req, res, next) {
  const error = buildError(err);

  res.status(error.code).json(error);
}

function buildError(err) {
  // check if the error is Joi and handle accordingly
  if (Joi.isError(err)) {
    return {
      code: HttpStatusCodes.BAD_REQUEST,
      message: 'Validation Error',
      details: err.details.map((e) => e.message),
    };
  }

  // check if the error is Boom type and handle accordingly
  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message,
    };
  }

  if (err.name === 'UnauthorizedError') {
    return {
      code: HttpStatusCodes.UNAUTHORIZED,
      message: err.message,
      details: HttpStatusCodes.getStatusText(HttpStatusCodes.UNAUTHORIZED),
    };
  }

  // Any other error types will be treated as an internal server error
  return {
    code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    message: HttpStatusCodes.getStatusText(HttpStatusCodes.INTERNAL_SERVER_ERROR),
    details: err.message || '',
  };
}
