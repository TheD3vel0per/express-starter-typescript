import * as express from "express";

async function errorHandler(
    error: express.ErrorRequestHandler,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) {
    response.status(500);
    response.end();
    return;
}

export default errorHandler;