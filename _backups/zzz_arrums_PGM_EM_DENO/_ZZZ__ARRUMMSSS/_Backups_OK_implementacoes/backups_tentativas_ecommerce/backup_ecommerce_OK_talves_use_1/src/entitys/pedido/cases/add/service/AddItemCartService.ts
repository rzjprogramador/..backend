import { ProductModel, EnderecoEntrega } from "@src/entitys/product/contracts/product.contract"
import { CartRepositoryProtocol } from "@src/entitys/cart/contract/CartRepositoryProtocol.contract"
import { ListItemsCartServiceProtocol } from "@src/entitys/pedido/cases/list/service/list_items_cart_service_protocol"
import { CheckoutCartServiceProtocol } from "@src/entitys/pedido/cases/checkout/service/checkout_cart.service_protocol"
import { FindProductByCepProtocol } from "@src/modules_entitys/FindProductByCep/FindProductByCepProtocol.contract"
import { CartItemsModel } from '@src/entitys/cart/contract/Cart.contracts'

type Props = EnderecoEntrega
type Response = CartItemsModel

export class AddItemCartService {
  constructor(
    private readonly cartRepositoryTemp: CartRepositoryProtocol,
    private readonly listItemsService: ListItemsCartServiceProtocol,
    private readonly checkoutCartService: CheckoutCartServiceProtocol,
    private readonly findProductByCep: FindProductByCepProtocol,
  ) {}

  async handle(item: Props): Promise<Response> {
    const produto = await this.findProductByCep.execute(item.cep)
    const dataEntrega = item.dataEntrega
    // const preco = produto.precoBase + 100 // TODO NAO FAZER AQUI REGRA DE PRECO

    const newProductItem = { ...item, dataEntrega, produto }

    await this.cartRepositoryTemp.addItem(newProductItem)

    return {
      items: this.listItemsService.handle(),
      checkout: this.checkoutCartService.handle(),
    }
  }
}
