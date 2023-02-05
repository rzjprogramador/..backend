import { HttpResponse } from '@src/helpers/responses/http.contract'
import { ServerError } from '@src/helpers/custom_errors/server_error'
// import { serverError } from '@src/helpers/responses/http_request_response'

import { NextFunction, Request, Response } from 'express'

export const errorResponseMiddleExpress = (
    error: Error & ServerError & HttpResponse,
    req: Request,
    res: Response,
    next: NextFunction
    ) => {

    const statusCode = error.statusCode ?? 500
    const response = error.message ?? new ServerError ()
    // const message = error.statusCode ? error.message : serverError()
    
    console.error(error)

    // return res.json('Caiu no Midle Root de erro')
    return res.status(statusCode).json(response)

  }