import { TypeEntrega } from "@src/core/product/entity/product.contract"

export const dataFont_for_SeedProduct = {
  unity: {
    idDB: "unity",
    uid: "unity",
    nomeProduto: "nome produto unity",
    cepInicial: "00000010",
    cepFinal: "00000019",
    regiao: 'Sao Paulo',
    cidade: 'Sao Paulo',
  },
  one: {
    idDB: "one",
    uid: "one",
    nomeProduto: "nome produto one",
    cepInicial: "00000010",
    cepFinal: "00000019",
    regiao: 'Sao Paulo',
    cidade: 'Sao Paulo',
  },

  two: {
    idDB: "two",
    uid: "two",
    nomeProduto: "nome produto two",
    cepInicial: "00000020",
    cepFinal: "00000029",
    regiao: 'Sao Paulo',
    cidade: 'Sao Paulo',
  },

  tree: {
    idDB: "tree",
    uid: "tree",
    nomeProduto: "nome produto tree",
    cepInicial: "00000030",
    cepFinal: "00000039",
    regiao: 'Sao Paulo',
    cidade: 'Sao Paulo',
  },

  registers: {
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
  }

}

export const dataFont_for_SeedProduct_ModalidadeEntrega1: TypeEntrega = 'PROXIMO_DIA_UTIL'

export const dataFont_for_SeedProduct_ModalidadeEntrega2: TypeEntrega = 'MESMO_DIA'

export const dataFont_for_SeedProduct_ModalidadeEntrega3: TypeEntrega = 'PROXIMO_DIA_UTIL'