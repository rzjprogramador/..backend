import { ProductModel } from "@src/entitys/product/contracts/product.contract"

export interface ProductRepositoryProtocol {
  add(product: ProductModel): Promise<ProductModel>

  list(): Promise<ProductModel[]>

  getItems(): Promise<ProductModel[]>
}
