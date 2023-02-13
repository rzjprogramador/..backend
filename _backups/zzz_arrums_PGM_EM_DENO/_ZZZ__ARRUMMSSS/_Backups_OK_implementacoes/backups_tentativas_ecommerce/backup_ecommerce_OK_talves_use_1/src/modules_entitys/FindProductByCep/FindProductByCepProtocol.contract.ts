import { ResponseFindProduct } from "@src/entitys/product/contracts/product.contract"

export interface FindProductByCepProtocol {
  execute(cep: string): Promise<ResponseFindProduct>
}
