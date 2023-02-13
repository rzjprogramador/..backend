/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgsCreateProduct } from "@src/entitys/product/contracts/product.contract"
import CreateProductController from "@src/entitys/product/controllers/create/create_product.controller"
import { seedProductOne } from "@src/entitys/product/data/seeds/seedsProducts"

import { describe, it, expect } from "vitest"

describe("Product Entity >> Sucess", () => {
  const input: ArgsCreateProduct = seedProductOne
  const sut = CreateProductController

  it(`deve criar um produto.`, async () => {
    const action = await sut.execute(input)
    // console.log('VIA CORE >>', action)

    expect(action).toHaveProperty('nomeProduto', 'nome produto one')
  })
})
