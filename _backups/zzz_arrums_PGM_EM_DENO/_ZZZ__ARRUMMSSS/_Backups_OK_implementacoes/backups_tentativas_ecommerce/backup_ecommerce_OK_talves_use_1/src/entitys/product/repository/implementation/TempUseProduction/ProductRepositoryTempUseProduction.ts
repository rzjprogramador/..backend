import { ProductModel } from "@src/entitys/product/contracts/product.contract"
import { fakeProductsListMemory } from "@src/entitys/product/data_layer/fake_products_list_inmemory"
import { ProductRepositoryProtocol } from "@src/entitys/product/repository/contract/ProductRepository.contract"

export class ProductRepositoryTempUseProduction implements ProductRepositoryProtocol {
  static itemsProduct: ProductModel[] = fakeProductsListMemory

  async add(product: ProductModel): Promise<ProductModel> {
    await ProductRepositoryTempUseProduction.itemsProduct.push(product)
    return await product
  }

  async list() {
    return await ProductRepositoryTempUseProduction.itemsProduct
  }

  async getItems() {
    return await ProductRepositoryTempUseProduction.itemsProduct
  }
}
