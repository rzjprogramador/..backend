/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductModel } from "@src/entitys/product/contracts/product.contract"
import { makeFakePrecoView } from "@src/entitys/product/data_layer/makeFakePrecoView"

export const fakeProductsListMemory: ProductModel[] = [
  {
    idDB: "1",
    uid: "1",
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    produtoNome: "produto_um",
    precoBase: 10,
    quant: 1,
    precoView: makeFakePrecoView,
    productControl: {
      cepInicial: "00000010",
      cepFinal: "00000019",
      regiao: "cidade tiradentes",
      cidade: "sao paulo",
    },
  },

  {
    idDB: "dois",
    uid: "dois",
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    produtoNome: "produto_dois",
    precoBase: 10,
    quant: 1,
    precoView: makeFakePrecoView,
    productControl: {
      cepInicial: "00000020",
      cepFinal: "00000029",
      regiao: "poa",
      cidade: "sao paulo",
    },
  },

  {
    idDB: "tres",
    uid: "tres",
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    produtoNome: "produto_tres",
    precoBase: 10,
    quant: 1,
    precoView: makeFakePrecoView,
    productControl: {
      cepInicial: "00000030",
      cepFinal: "00000039",
      regiao: "poa",
      cidade: "sao paulo",
    },
  },
]
