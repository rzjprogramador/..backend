import { listProductsController } from "@src/entitys/product/cases/list/list_products.controller"
import { createProductInjectController } from "@src/entitys/product/controller/create_product.inject.controller"
import { Router, Request, Response } from "express"

export default (productRoutes: Router): void => {
  productRoutes.post("/add-produto", async (req: Request, res: Response) => {
    const requestData = req.body
    const createdProduct = await createProductInjectController(requestData)
    return res.status(200).json(createdProduct)
  })

  productRoutes.get("/listar-produtos", async (req: Request, res: Response) => {
    const response = await listProductsController().execute()
    res.status(200).json(response)
  })
}
