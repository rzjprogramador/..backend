import { DTOAddCartItemRepo, ProductModel } from "@src/entitys/product/contracts/product.contract"
import { CartRepositoryProtocol } from "@src/entitys/cart/contract/CartRepositoryProtocol.contract"

export class CartRepositoryTemp implements CartRepositoryProtocol {
  static _cartItemsTemp: ProductModel[] = []

  addItem(item: DTOAddCartItemRepo) {
    CartRepositoryTemp._cartItemsTemp?.push(item)
    return item
  }

  listItems() {
    return CartRepositoryTemp._cartItemsTemp
  }

  get cartItemsTemp() {
    return CartRepositoryTemp._cartItemsTemp
  }

  total(): number {
    const calculateAllItems = +CartRepositoryTemp._cartItemsTemp.reduce((acc: number, atual: any) => acc + atual?.precoBase, 0)
    return +calculateAllItems.toFixed(2)
  }
}
