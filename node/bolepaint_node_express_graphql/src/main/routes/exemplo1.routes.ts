import fs from 'fs'

import { Router, Request, Response } from 'express'
import { badRequest } from '@src/helpers/responses/http_request_response'
import { InvalidParamError } from '@src/helpers/custom_errors'

export default (routerExemplo1: Router): void => {
    routerExemplo1.get('/exemplo1-error', (req: Request, res: Response) => {

        // const file =  fs.readdirSync('test.txt')
        // const message = { testerMessageResponse: 'Oi'}
        const message = null

        if (message === null) {
            throw new InvalidParamError('campoMessage')
            // throw 'ERRO DEI THROW NA STRING'
            // return 'Errooooo'
            // return new InvalidParamError('campoMessage')
            // return badRequest(new InvalidParamError('campoMessage'))
            // return res.json(badRequest(new InvalidParamError('campoMessage')))
            // throw badRequest(new InvalidParamError('campoMessage'))

        }
        res.json(message)
    })

    routerExemplo1.get('/exemplo1-get', (req: Request, res: Response) => {
        res.json({ tester: 'Rota Exemplo1'})
    })

    routerExemplo1.get('/exemplo1-get-test2', (req: Request, res: Response) => {
        res.json({ tester: 'Rota Exemplo1 get test2'})
    })
}