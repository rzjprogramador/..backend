import { CartRepositoryTemp } from "@src/entitys/cart/repository/temporary/CartRepositoryTemp"

export class CheckoutCartService  {
  constructor(private readonly cartRepositoryTemp: CartRepositoryTemp) {}

  handle() {
    return {
      foo: "bar",
      total: this.cartRepositoryTemp.total(),
    }
  }
}
