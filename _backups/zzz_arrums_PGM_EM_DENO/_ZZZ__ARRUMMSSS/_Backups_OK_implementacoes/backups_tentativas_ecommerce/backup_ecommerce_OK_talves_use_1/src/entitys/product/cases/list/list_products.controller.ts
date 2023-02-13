/* eslint-disable @typescript-eslint/no-unused-vars */
import { ListProductsCase } from "@src/entitys/product/cases/list/list_products.case"
import { ProductRepositoryMemory } from "@src/entitys/product/repository/implementation/memory/ProductRepositoryMemory"

export const listProductsController = () => {
  const repository = new ProductRepositoryMemory()
  const listProductsController = new ListProductsCase(repository)
  return listProductsController
}
