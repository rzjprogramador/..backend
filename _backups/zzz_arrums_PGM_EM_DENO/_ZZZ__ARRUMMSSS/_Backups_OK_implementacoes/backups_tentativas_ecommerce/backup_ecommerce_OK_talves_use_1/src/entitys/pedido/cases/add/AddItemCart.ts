import { EnderecoEntrega } from "@src/entitys/product/contracts/product.contract"
import { AddItemCartService } from "@src/entitys/pedido/cases/add/service/AddItemCartService"

type Props = EnderecoEntrega

export class AddItemCart {
  constructor(private readonly addItemCartService: AddItemCartService) {}

  async execute(item: Props) {
    return await this.addItemCartService.handle(item)
  }
}
