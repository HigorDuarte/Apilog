import { Request, Response, NextFunction } from "express";
import {ZodError} from "zod"
import { AppError } from "@/utils/AppError";

export function errorHandler(error: any, request: Request, response: Response, next: NextFunction){
    if(error instanceof AppError){
        return response.status(error.statusCode).json({message: error.message})
    }

    if(error instanceof ZodError){
        return response.status(400).json({message: "Validation Error", issues: error.errors})
    }

    return response.status(500).json({message: `Internal server error`})
}