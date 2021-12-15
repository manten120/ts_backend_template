import { Request } from 'express';

export type Body = {
  firstName?: string;
  lastName?: string;
};

export interface PostReq extends Request {
  body: Body;
}

export type Query = {
  id?: string;
};

export interface GetReq extends Request {
  query: Query;
}
