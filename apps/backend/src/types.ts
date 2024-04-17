import { Response } from 'express';

export interface User {
  name: string;
  email?: string;
  password: string;
}

export type IResponse<D = void> = Response<{
  status: "FAILED" | "OK";
  data?: D;
  error?: string;
}>;
