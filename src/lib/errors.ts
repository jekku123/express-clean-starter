export abstract class CustomError extends Error {
  abstract readonly statusCode: number;
  abstract readonly context: { [key: string]: any };

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; context?: string }[];
}

export class NotFoundError extends CustomError {
  private readonly _statusCode = 404;
  private readonly _context: { [key: string]: any };

  constructor(message?: string, context?: { [key: string]: any }) {
    super(message || 'Not Found');
    this.name = 'NotFoundError';
    this._context = context || {};

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not Found', context: JSON.stringify(this._context) }];
  }

  get statusCode() {
    return this._statusCode;
  }

  get context() {
    return this._context;
  }
}
