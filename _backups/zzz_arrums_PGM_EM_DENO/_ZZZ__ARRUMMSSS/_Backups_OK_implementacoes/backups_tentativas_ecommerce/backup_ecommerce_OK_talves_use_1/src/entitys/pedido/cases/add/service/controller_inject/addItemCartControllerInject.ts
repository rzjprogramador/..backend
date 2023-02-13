import { FindProductByCep } from "@src/modules_entitys/FindProductByCep/FindProductByCep"
import { AddItemCart } from "@src/entitys/pedido/cases/add/AddItemCart"
import { AddItemCartService } from "@src/entitys/pedido/cases/add/service/AddItemCartService"
import { CartRepositoryTemp } from "@src/entitys/cart/repository/temporary/CartRepositoryTemp"
import { ListItemsCartService } from "@src/entitys/pedido/cases/list/service/list_items_cart.service"
import { CheckoutCartService } from "@src/entitys/pedido/cases/checkout/service/checkout_cart.service"
import { ProductRepositoryTempUseProduction } from "@src/entitys/product/repository/implementation/TempUseProduction/ProductRepositoryTempUseProduction"

export function addItemCartControllerInject() {
  const cartRepositoryTemp = new CartRepositoryTemp()
  const listItemsService = new ListItemsCartService(cartRepositoryTemp)
  const checkoutCartService = new CheckoutCartService(cartRepositoryTemp)
  const productRepositoryTempUseProduction = new ProductRepositoryTempUseProduction()
  const findProductByCep = new FindProductByCep(productRepositoryTempUseProduction)
  const addItemCartService = new AddItemCartService(cartRepositoryTemp, listItemsService, checkoutCartService, findProductByCep)

  const addItemCart = new AddItemCart(addItemCartService)

  return addItemCart
}
