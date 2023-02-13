import { Router, Request, Response } from "express"
import { addItemCartControllerInject } from "@src/entitys/pedido/cases/add/service/controller_inject/addItemCartControllerInject"

export default (pedidoRoutes: Router): void => {
  pedidoRoutes.post("/pedidos-add", async (req: Request, res: Response) => {
    const requestData = req.body
    const addItemCart = addItemCartControllerInject()
    const response = await addItemCart.execute(requestData)
    return res.status(200).json(response)
  })

  pedidoRoutes.get("/pedidos-list", async (req: Request, res: Response) => {
    // const listPedidos = pedidoControllerInject()
    // const response = listPedidos.listCartItems()
    // res.status(200).json(response)
  })
}
