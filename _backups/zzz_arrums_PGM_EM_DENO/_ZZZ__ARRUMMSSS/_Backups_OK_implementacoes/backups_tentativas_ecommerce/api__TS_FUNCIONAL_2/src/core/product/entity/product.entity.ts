import { generateID, generateIDB } from "@src/app/helpers/generators/records_generators"
import { recordsDNAProduct } from '@src/app/use_objects_global/records_dna_product'
import { ModelProduct, ArgsCreateProduct } from '@src/core/product/entity/product.contract'


export function ProductEntity(this: ModelProduct, product: ArgsCreateProduct) {

    const { nomeProduto, precoBase, proRulePriceProduct: {
        cepInicial, cepFinal, regiao, cidade, typeEntrega
    } } = product

    this.nomeProduto = nomeProduto
    this.precoBase = precoBase
    this.proRulePriceProduct = {
        cepInicial, cepFinal, regiao, cidade, typeEntrega
    }
    this.records = recordsDNAProduct
    this.id = generateID()
    this.idb = generateIDB()

}
