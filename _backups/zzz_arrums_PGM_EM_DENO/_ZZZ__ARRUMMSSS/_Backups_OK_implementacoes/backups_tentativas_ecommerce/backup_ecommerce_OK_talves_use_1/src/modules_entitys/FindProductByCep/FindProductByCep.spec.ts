import { FindProductByCep } from "@src/modules_entitys/FindProductByCep/FindProductByCep"
import { ProductRepositoryTempUseProduction } from "@src/entitys/product/repository/implementation/TempUseProduction/ProductRepositoryTempUseProduction"

import { describe, it, expect } from "vitest"

const productRepositoryTempUseProduction = new ProductRepositoryTempUseProduction()
const sut = new FindProductByCep(productRepositoryTempUseProduction)

describe("[Produto_um] >> Repository temp - Regra Encontra Produto", () => {
  describe("Sucess", () => {
    it(`deve retornar o produto_um - pelo limite.`, async () => {
      const productFound = await sut.execute("00000010")
      console.log(productFound)
      expect(productFound).toHaveProperty("produtoNome", "produto_um")
    })
  })
  describe("Fail", () => {
    it(`nao deve retornar o produto_um - pelo limite fail. .. Cep passado nao é um produto_um.`, async () => {
      const productFound = await sut.execute("00000009")
      expect(productFound).toBeFalsy()
    })
  })
})

describe("[Produto_dois] >> Repository temp - Regra Encontra Produto", () => {
  describe("Sucess", () => {
    it(`deve retornar o produto_dois - pelo limite.`, async () => {
      const productFound = await sut.execute("00000020")
      expect(productFound).toHaveProperty("produtoNome", "produto_dois")
    })
  })
  describe("Fail", () => {
    it(`nao deve retornar o produto_dois - pelo limite fail. .. Cep passado nao é um produto_dois.`, async () => {
      const productFound = await sut.execute("00000019")
      const productDois = await sut.execute("00000020")
      expect(productFound).not.toEqual(productDois)
    })
  })
})

describe("[Produto_tres] >> Repository temp - Regra Encontra Produto", () => {
  describe("Sucess", () => {
    it(`deve retornar o produto_tres - pelo limite.`, async () => {
      const productFound = await sut.execute("00000030")
      expect(productFound).toHaveProperty("produtoNome", "produto_tres")
    })
  })
  describe("Fail", () => {
    it(`nao deve retornar o produto_tres - pelo limite fail. .. Cep passado nao é um produto_tres.`, async () => {
      const productFound = await sut.execute("00000029")
      const productTres = await sut.execute("00000030")
      expect(productFound).not.toEqual(productTres)
    })
  })
})
