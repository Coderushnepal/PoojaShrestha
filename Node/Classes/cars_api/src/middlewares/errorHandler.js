import Joi from "joi";
import HttpStatusCodes from "http-status-codes";

export default function (err, req, res, next) {
  const error = buildError(err);

  res.status(error.code).json(error);
  // if(Joi.isError(err)) {
  //     res
  //     .status(HttpStatusCodes.BAD_REQUEST)
  //     .json({ message: 'Request body validation error',
  //             details: err.details.map((e) => e.message)
  //     });
  // }

  // if(err.isBoom) {
  //     res.status(err.output.statusCode).json(err.output.payload);
  // }

  // res
  // .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
  // .json({error: HttpStatusCodes.getStatusText(HttpStatusCodes.INTERNAL_SERVER_ERROR)});
}

function buildError(err) {

  //check if the error is Joi and handle accordingly
  if (Joi.isError(err)) {
    return {
      code: HttpStatusCodes.BAD_REQUEST,
      message: "Validation Error",
      details: err.details.map((e) => e.message),
    };
  }

  //check if the error is Boom type and handle accordingly
  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message,
    };
  }

  //Any other error types will be treated as an internal server error
  return {
    code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    message: HttpStatusCodes.getStatusText(
      HttpStatusCodes.INTERNAL_SERVER_ERROR
    ),
    details: err.message || "",
  };
}
