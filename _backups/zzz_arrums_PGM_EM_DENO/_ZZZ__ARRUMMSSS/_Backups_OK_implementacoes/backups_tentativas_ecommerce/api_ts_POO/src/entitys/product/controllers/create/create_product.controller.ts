import { ArgsCreateProduct } from "@src/entitys/product/contracts/product.contract"
import CreateProductService from '@src/entitys/product/controllers/create/service/create_product.service'

export class CreateProductController {
  async execute(product: ArgsCreateProduct) {
    return await CreateProductService.execute(product)
  }
}

export default new CreateProductController()
