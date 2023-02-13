import { CartRepositoryTemp } from "@src/entitys/cart/repository/temporary/CartRepositoryTemp"

export class ListItemsCartService {
  constructor(private readonly cartRepositoryTemp: CartRepositoryTemp) {}

  handle() {
    return this.cartRepositoryTemp.listItems()
  }
}
