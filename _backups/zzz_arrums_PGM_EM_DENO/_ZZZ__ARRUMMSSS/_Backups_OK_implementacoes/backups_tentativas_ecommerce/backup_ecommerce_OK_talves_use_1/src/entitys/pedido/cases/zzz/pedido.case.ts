import { AddItemCartService } from "@src/entitys/pedido/cases/add/service/AddItemCartService"
import { CheckoutCartService } from "@src/entitys/pedido/cases/checkout/service/checkout_cart.service"
import { ListItemsCartService } from "@src/entitys/pedido/cases/list/service/list_items_cart.service"

// TODO: ESTE CASE VAI SER CADA METODO UM CASO

export class PedidoCase {
  constructor(private readonly addItemCartService: AddItemCartService, private readonly checkoutCartService: CheckoutCartService, private readonly listItemsCartService: ListItemsCartService) {}

  // addCartItem(item: ItemPedidoEncomendaRequest) {
  //   return this.addItemCartService.handle(item)
  // }

  listCartItems() {
    return this.listItemsCartService.handle()
  }

  checkout() {
    return this.checkoutCartService.handle()
  }
}
