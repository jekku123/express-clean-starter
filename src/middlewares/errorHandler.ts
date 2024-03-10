import { NextFunction, Request, Response } from 'express';
import AppError from '../lib/errors';
import { logger } from '../lib/logger';
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    logger.error(err);

    return res.status(err.statusCode).send({
      success: false,
      errors: {
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
        context: err.context,
      },
    });
  }

  logger.error(err);

  return res.status(500).send({
    success: false,
    message: 'Internal Server Error',
  });
};
