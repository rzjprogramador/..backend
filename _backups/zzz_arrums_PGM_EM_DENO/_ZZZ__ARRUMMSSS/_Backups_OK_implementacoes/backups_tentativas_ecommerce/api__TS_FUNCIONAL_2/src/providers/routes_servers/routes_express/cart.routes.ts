import AddItemCartController from '@src/core/uses_cart/cases/add_items/controllers/add_items_cart.controller'
import { Router, Request, Response } from "express"

export default (routerCart: Router): void => {

  routerCart.post("/add-items-cart", async (req: Request, res: Response) => {
    const response = await AddItemCartController.execute(req.body)
    return res.status(200).json(response)
  })

}
