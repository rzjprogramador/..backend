import CreateModalidadeEntregaController from '@src/entitys/modalidade_entrega/controllers/create/create_modalidade_entrega.controller'
import ListModalidadesEntregaController from '@src/entitys/modalidade_entrega/controllers/list/list_modalidades_entrega.controller'
import { Router, Request, Response } from "express"

export default (routerModalidadeEntrega: Router): void => {

  routerModalidadeEntrega.post("/create-modalidade-entrega", async (req: Request, res: Response) => {
    const response = await CreateModalidadeEntregaController.execute(req.body)
    return res.status(200).json(response)
  })

  routerModalidadeEntrega.get("/list-modalidades-entrega", async (req: Request, res: Response) => {
    const response = await ListModalidadesEntregaController.execute()
    return res.status(200).json(response)
  })


}
