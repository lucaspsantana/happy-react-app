import { ErrorRequestHandler } from 'express';
import {ValidationError} from 'yup';

interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, reponse, next) => {
    if (error instanceof ValidationError){
        let errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        })

        return reponse.status(400).json({message: 'Validation fails', errors})
    }
    console.error(error);
    return reponse.status(500).json({message: 'Internal server error'});
};

export default errorHandler;
