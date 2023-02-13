/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductModel } from "@src/entitys/product/contracts/product.contract"
import { dataFont_for_SeedProduct, dataFont_for_SeedProduct_ModalidadeEntrega } from '@src/entitys/product/data/by_products/data_by_products_seeds'


export const seedProductOne: ProductModel = {
  nomeProduto: dataFont_for_SeedProduct.one.nomeProduto,
  precoBase: 10,
  acrescimo: 1,
  desconto: 5,
  precoUnitarioFinal: 10,
  quantidade: 1,
  ruleFieldProduct: {
    cepInicial: dataFont_for_SeedProduct.one.cepInicial,
    cepFinal: dataFont_for_SeedProduct.one.cepFinal,
    regiao: dataFont_for_SeedProduct.one.regiao,
    cidade: dataFont_for_SeedProduct.one.cidade,
    modalidadeEntrega: dataFont_for_SeedProduct_ModalidadeEntrega
  },
}

export const seedProductTwo: ProductModel = {
  nomeProduto: dataFont_for_SeedProduct.two.nomeProduto,
  precoBase: 10,
  acrescimo: 1,
  desconto: 5,
  precoUnitarioFinal: 10,
  quantidade: 1,
  ruleFieldProduct: {
    cepInicial: dataFont_for_SeedProduct.two.cepInicial,
    cepFinal: dataFont_for_SeedProduct.two.cepFinal,
    regiao: dataFont_for_SeedProduct.two.regiao,
    cidade: dataFont_for_SeedProduct.two.cidade,
    modalidadeEntrega: dataFont_for_SeedProduct_ModalidadeEntrega
  },
}

export const seedProductTree: ProductModel = {
  nomeProduto: dataFont_for_SeedProduct.tree.nomeProduto,
  precoBase: 10,
  acrescimo: 1,
  desconto: 5,
  precoUnitarioFinal: 10,
  quantidade: 1,
  ruleFieldProduct: {
    cepInicial: dataFont_for_SeedProduct.tree.cepInicial,
    cepFinal: dataFont_for_SeedProduct.tree.cepFinal,
    regiao: dataFont_for_SeedProduct.tree.regiao,
    cidade: dataFont_for_SeedProduct.tree.cidade,
    modalidadeEntrega: dataFont_for_SeedProduct_ModalidadeEntrega
  },
}
