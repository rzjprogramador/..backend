import { createPromocaoEntregaController } from '@src/core/promocao_entrega/controller/create/create_promocao_entrega.controller'
import { listPromocoesEntregas } from '@src/core/promocao_entrega/controller/list/list_promocoes_entregas.controll'
import { Router, Request, Response } from "express"

export default (routerPromocaoEntrega: Router): void => {

  routerPromocaoEntrega.post("/create-promocao-entrega", async (req: Request, res: Response) => {
    const response = await createPromocaoEntregaController(req.body)
    return res.status(200).json(response)
  })

  routerPromocaoEntrega.get("/list-promocao-entrega", async (req: Request, res: Response) => {
    const response = await listPromocoesEntregas()
    return res.status(200).json(response)
  })


}
