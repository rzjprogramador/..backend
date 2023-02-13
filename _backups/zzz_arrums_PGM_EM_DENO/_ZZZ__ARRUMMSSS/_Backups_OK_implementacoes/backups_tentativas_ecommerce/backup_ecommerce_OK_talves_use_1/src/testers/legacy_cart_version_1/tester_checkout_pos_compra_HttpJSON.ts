import { cart } from "@src/testers/legacy_cart_version_1/factory"
import { responseJson } from "@src/helpers/makes/makeConvert"
import { ok } from "@src/helpers/responses/http_request_response"
import { compra } from "@src/testers/legacy_cart_version_1/client_compra"

// TESTES
/* compra e após compra resposta http em JSON: */

const cartDataJson = {
  items: cart.items,
  total: cart.total(),
  checkout: cart.checkout(),
}

function cartDataHttpResponse(data: any) {
  return responseJson(data)
}

compra()
console.log(cart.orderStatus)
console.log(cartDataHttpResponse(ok(cartDataJson)))
