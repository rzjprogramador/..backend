import { ProductModel } from "@src/entitys/product/contracts/product.contract"
import { ProductRepositoryProtocol } from "@src/entitys/product/repository/contract/ProductRepository.contract"

export class ProductRepositoryMemory implements ProductRepositoryProtocol {
  static itemsProduct: ProductModel[] = []

  async add(product: ProductModel): Promise<ProductModel> {
    await ProductRepositoryMemory.itemsProduct.push(product)
    return await product
  }

  async list() {
    return await ProductRepositoryMemory.itemsProduct
  }

  async getItems() {
    return await ProductRepositoryMemory.itemsProduct
  }
}
