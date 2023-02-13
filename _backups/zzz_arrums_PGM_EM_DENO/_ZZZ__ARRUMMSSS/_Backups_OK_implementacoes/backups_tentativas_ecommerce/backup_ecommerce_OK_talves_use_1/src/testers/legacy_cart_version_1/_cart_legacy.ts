type CartItemLegacy = {
  nomeProduto: string
  preco: number
}

type OrderStatus = "aberto" | "fechado"

export class CartLegacy {
  private readonly _items: CartItemLegacy[] = []
  private _orderStatus: OrderStatus = "aberto"

  get items(): Readonly<CartItemLegacy[]> {
    return this._items
  }

  get orderStatus(): Readonly<string> {
    return this._orderStatus
  }

  addItem(item: CartItemLegacy): CartItemLegacy {
    this._items.push(item)
    return item
  }

  removeItem(index: number): boolean {
    const removed = this._items.splice(index, 1)
    return !!removed
  }

  total(): number {
    const calculateTotal = this._items.reduce(
      (total, current) => total + current.preco,
      0
    )
    return +calculateTotal.toFixed(2)
  }

  checkout(): string | object {
    if (this.isEmpty()) {
      return `Seu carrinho esta vazio`
    }
    const infoPedido = this.saveOrder()
    const finalizacaoPedido = this.clearCart()
    return {
      infoPedido,
      finalizacaoPedido,
    }
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }

  sendMessage(msg: string): string {
    return msg
  }

  saveOrder(): object {
    const feedbackPedido = this.sendMessage(
      `Ok...Seu pedido foi recebido com o total de R$ ${this.total()} com sucesso!`
    )
    const statusCarrinho = (this._orderStatus = "fechado")
    return {
      feedbackPedido,
      statusCarrinho,
    }
  }

  clearCart(): string {
    this._items.length = 0
    return `Compra finalizada...Carrinho de compras vazio!`
  }
}
