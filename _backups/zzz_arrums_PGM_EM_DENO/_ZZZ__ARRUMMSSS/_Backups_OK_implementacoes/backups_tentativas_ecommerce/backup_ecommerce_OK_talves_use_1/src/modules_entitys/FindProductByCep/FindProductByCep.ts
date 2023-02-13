import { ProductRepositoryProtocol } from "@src/entitys/product/repository/contract/ProductRepository.contract"
import { FindProductByCepProtocol } from "@src/modules_entitys/FindProductByCep/FindProductByCepProtocol.contract"

export class FindProductByCep implements FindProductByCepProtocol {
  constructor(private readonly productRepository: ProductRepositoryProtocol) {}

  async execute(cep: string) {
    const arrayItems = await this.productRepository.getItems()
    const productFound = arrayItems.find((p) => {
      const ruleCep = p.productControl.cepInicial <= cep && p.productControl.cepFinal >= cep
      return ruleCep
    })
    return productFound
  }
}
