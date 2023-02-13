import { ProductRepositoryMemory } from "@src/entitys/product/repository/implementation/memory/ProductRepositoryMemory"
import { CreateProductCase } from "@src/entitys/product/cases/create/create_product.case"

const createProductFactory = () => {
  const repository = new ProductRepositoryMemory()
  const createProductCase = new CreateProductCase(repository)
  return createProductCase
}

export const createProductInjectController = async (product: any) => {
  return await createProductFactory().execute(product)
}
