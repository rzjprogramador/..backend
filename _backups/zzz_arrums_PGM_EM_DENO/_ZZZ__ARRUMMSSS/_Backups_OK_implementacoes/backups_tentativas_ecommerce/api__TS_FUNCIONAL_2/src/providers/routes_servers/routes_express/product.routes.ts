import { createProductController } from '@src/core/product/controller/create/create_product.controller'
import { listProducts } from '@src/core/product/controller/list/list_products_controll'
import { Router, Request, Response } from "express"

export default (routerProduct: Router): void => {

  routerProduct.post("/create-product", async (req: Request, res: Response) => {
    const response = await createProductController(req.body)
    return res.status(200).json(response)
  })

  routerProduct.get("/list-products", async (req: Request, res: Response) => {
    const response = await listProducts()
    return res.status(200).json(response)
  })

}
