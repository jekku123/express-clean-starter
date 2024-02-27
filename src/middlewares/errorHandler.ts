import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../lib/errors';
import { logger } from '../lib/logger';
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    logger.error(err);

    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      success: false,
      message: err.message,
      errors: err.serializeErrors(),
    });
  }

  logger.error(err);

  return res.status(500).send({
    statusCode: 500,
    success: false,
    message: 'Internal Server Error',
  });
};
