import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { CustomError } from "@/protocols/error.protocol";



export default function errorHandler(error: CustomError, req: Request, res: Response, next: NextFunction) {
    
    if (error.type === "conflictError") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    if (error.type === "notFound") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    if (error.type === "InternalServerError") {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }

    if (error.type === "UnprocessableEntityforDate") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }

    if (error.type === "UnprocessableEntity") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }

    if (error.type === "BadRequest") {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }

    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Error 500!");
}