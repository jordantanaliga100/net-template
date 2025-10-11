declare global {
  namespace Express {
    export interface CustomError extends Error {
      statusCode?: number;
      status: string | number;
      msg: Record<string, any>;
      isOperational?: boolean;
    }

    export interface Request {
      user?: any;
      session?: {
        user?: any;
      };
    }
  }
}
export {};
