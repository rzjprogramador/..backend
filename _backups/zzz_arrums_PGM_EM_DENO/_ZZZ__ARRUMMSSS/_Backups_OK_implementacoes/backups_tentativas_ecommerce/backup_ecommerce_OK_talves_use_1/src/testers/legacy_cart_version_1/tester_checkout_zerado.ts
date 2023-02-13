import { cart } from "@src/testers/legacy_cart_version_1/factory"
import { responseJson } from "@src/helpers/makes/makeConvert"

// TESTES
/* testar checkout: comecar zerado: */

cart.clearCart()
console.log(cart.total())
console.log(responseJson(cart.items))
console.log(responseJson(cart.checkout()))
