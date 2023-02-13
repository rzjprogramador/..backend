import { ProductModel, ResponseAddCartItem, DTOAddCartItemRepo } from "@src/entitys/product/contracts/product.contract"

export interface CartRepositoryProtocol {
  addItem(item: DTOAddCartItemRepo): ResponseAddCartItem

  listItems(): ProductModel[]

  total(): number
}
