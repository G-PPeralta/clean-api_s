import { HttpResponse } from "../protocols/http";
import { ServerError } from "../errors/server-error";

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const notFound = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: error,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
