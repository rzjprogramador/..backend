import CreateProductController from '@src/entitys/product/controllers/create/create_product.controller'
import { Router, Request, Response } from "express"

export default (routerProduct: Router): void => {

  routerProduct.post("/create-product", async (req: Request, res: Response) => {
    const response = await CreateProductController.execute(req.body)
    return res.status(200).json(response)
  })

}
