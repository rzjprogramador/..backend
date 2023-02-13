import { cart } from "@src/testers/legacy_cart_version_1/factory"

export function compra() {
    cart.addItem({ nomeProduto: "any_name_product1", preco: 10 })
    cart.addItem({ nomeProduto: "any_name_product2", preco: 15 })
    cart.addItem({
      nomeProduto: "any_name_product3",
      preco: 10.789,
    })
  }