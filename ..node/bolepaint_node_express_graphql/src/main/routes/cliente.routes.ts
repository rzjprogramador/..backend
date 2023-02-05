import { Router, Request, Response } from 'express'

export default (routersCliente: Router): void => {
    routersCliente.get('/registro-cliente', (req: Request, res: Response) => {
        res.json({ controllerMessageTest: 'Funcionando rota registro de cliente'})
    })

    routersCliente.get('/tester-cliente', (req: Request, res: Response) => {
        res.json({ controllerMessageTest: 'Tester rota cliente'})
    })
}