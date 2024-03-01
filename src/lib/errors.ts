// CustomError is a base class for all custom errors

export abstract class CustomError extends Error {
  abstract readonly statusCode: number;
  abstract readonly context: { [key: string]: any };

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

// Extend CustomError to create a client error and its subclasses

export abstract class ClientError extends CustomError {
  protected readonly _context: { [key: string]: any };
  protected readonly _statusCode: number;

  constructor(message: string, statusCode: number, context?: { [key: string]: any }) {
    super(message);
    this._statusCode = statusCode;
    this._context = context || {};

    Object.setPrototypeOf(this, ClientError.prototype);
  }

  get context() {
    return this._context;
  }

  get statusCode() {
    return this._statusCode;
  }
}

export class BadRequestError extends ClientError {
  constructor(message?: string, context?: { [key: string]: any }) {
    super(message || 'Bad Request', 400, context);
  }
}

export class ConflictError extends ClientError {
  constructor(message?: string, context?: { [key: string]: any }) {
    super(message || 'Conflict', 409, context);
  }
}

export class NotFoundError extends ClientError {
  constructor(message?: string, context?: { [key: string]: any }) {
    super(message || 'Not Found', 404, context);
  }
}
