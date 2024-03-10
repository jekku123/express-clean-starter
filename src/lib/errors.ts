// AppError class to handle custom errors

export default class AppError extends Error {
  private _statusCode: number;
  private _context: { [key: string]: any };

  constructor(message?: string, statusCode?: number, context?: { [key: string]: any }) {
    super(message || 'Internal server error');
    this.name = this.constructor.name;
    this._statusCode = statusCode || 500;
    this._context = context || {};

    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, AppError.prototype);
  }

  get statusCode(): number {
    return this._statusCode;
  }

  get context(): { [key: string]: any } {
    return this._context;
  }
}
