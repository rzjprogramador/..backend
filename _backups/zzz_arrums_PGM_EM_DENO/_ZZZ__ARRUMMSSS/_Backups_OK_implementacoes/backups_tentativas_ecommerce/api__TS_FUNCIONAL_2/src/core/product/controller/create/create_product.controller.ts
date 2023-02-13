import { ArgsCreateProduct } from "@src/core/product/entity/product.contract"
import { createProductService } from '@src/core/product/controller/create/service/create_product.service'

export const createProductController = async (product: ArgsCreateProduct) => {
  return await createProductService(product)
}
