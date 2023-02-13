/* eslint-disable @typescript-eslint/no-unused-vars */
import { recordsDNAProduct } from '@src/app/use_objects_global/records_dna_product'
import { ModelProduct } from "@src/core/product/entity/product.contract"
import {
  dataFont_for_SeedProduct,
  dataFont_for_SeedProduct_ModalidadeEntrega1, dataFont_for_SeedProduct_ModalidadeEntrega2, dataFont_for_SeedProduct_ModalidadeEntrega3
} from '@src/core/product/utils_entity/by_products/data_by_products_seeds'

type ModelProductSeed = ModelProduct

export const seedProductOne: ModelProductSeed = {
  nomeProduto: dataFont_for_SeedProduct.one.nomeProduto,
  precoBase: 10,
  proRulePriceProduct: {
    cepInicial: dataFont_for_SeedProduct.one.cepInicial,
    cepFinal: dataFont_for_SeedProduct.one.cepFinal,
    regiao: dataFont_for_SeedProduct.one.regiao,
    cidade: dataFont_for_SeedProduct.one.cidade,
    typeEntrega: dataFont_for_SeedProduct_ModalidadeEntrega1
  },
  id: 'one',
  idb: 'one',
  records: recordsDNAProduct
}

export const seedProductTwo: ModelProductSeed = {
  nomeProduto: dataFont_for_SeedProduct.two.nomeProduto,
  precoBase: 10,
  proRulePriceProduct: {
    cepInicial: dataFont_for_SeedProduct.two.cepInicial,
    cepFinal: dataFont_for_SeedProduct.two.cepFinal,
    regiao: dataFont_for_SeedProduct.two.regiao,
    cidade: dataFont_for_SeedProduct.two.cidade,
    typeEntrega: dataFont_for_SeedProduct_ModalidadeEntrega2
  },
  id: 'two',
  idb: 'two',
  records: recordsDNAProduct
}

export const seedProductTree: ModelProductSeed = {
  nomeProduto: dataFont_for_SeedProduct.tree.nomeProduto,
  precoBase: 10,
  proRulePriceProduct: {
    cepInicial: dataFont_for_SeedProduct.tree.cepInicial,
    cepFinal: dataFont_for_SeedProduct.tree.cepFinal,
    regiao: dataFont_for_SeedProduct.tree.regiao,
    cidade: dataFont_for_SeedProduct.tree.cidade,
    typeEntrega: dataFont_for_SeedProduct_ModalidadeEntrega3
  },
  id: 'tree',
  idb: 'tree',
  records: recordsDNAProduct
}
