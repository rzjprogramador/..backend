import { ProductModel } from "@src/entitys/product/contracts/product.contract"
import { ProductRepositoryMemory } from "@src/entitys/product/repository/implementation/memory/ProductRepositoryMemory"

export class ListProductsCase {
  constructor(private readonly productRepository: ProductRepositoryMemory) {}

  async execute(): Promise<ProductModel[]> {
    return await this.productRepository.list()
  }
}
