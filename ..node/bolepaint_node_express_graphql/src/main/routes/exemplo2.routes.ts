import { Router, Request, Response } from 'express'

export default (routerExemplo2: Router): void => {
    routerExemplo2.get('/exemplo2-get', (req: Request, res: Response) => {
        res.json({ tester: 'Rota Exemplo2'})
    })

    routerExemplo2.get('/exemplo2-get-test2', (req: Request, res: Response) => {
        res.json({ tester: 'Rota Exemplo1 get test2'})
    })
}