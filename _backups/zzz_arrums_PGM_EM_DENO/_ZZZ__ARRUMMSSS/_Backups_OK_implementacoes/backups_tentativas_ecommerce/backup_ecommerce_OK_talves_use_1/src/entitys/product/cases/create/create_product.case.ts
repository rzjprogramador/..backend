/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateProductRequestAdm, ProductModel, DataEntrega } from "@src/entitys/product/contracts/product.contract"
import { ProductRepositoryMemory } from "@src/entitys/product/repository/implementation/memory/ProductRepositoryMemory"
import { MakeRegisterFieldsProduct } from "@src/helpers/makes/make_register_fields_product"

export class CreateProductCase {
  constructor(private readonly productRepository: ProductRepositoryMemory) {}

  async execute(product: CreateProductRequestAdm): Promise<ProductModel> {
    const productRegisterType = new MakeRegisterFieldsProduct()
    const precoView = { prop1: 1, prop2: 2 } // TODO: TRAZER QUEM SABE CALCULAR O PRECO

    const newProductModelFinal = { ...product, precoView, ...productRegisterType }
    await this.productRepository.add(newProductModelFinal)
    return await newProductModelFinal
  }
}
