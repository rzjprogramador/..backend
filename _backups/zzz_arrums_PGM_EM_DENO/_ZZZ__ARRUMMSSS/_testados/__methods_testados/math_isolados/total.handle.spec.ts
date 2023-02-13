import { describe, it, expect } from "vitest"


describe("total ()", () => {
  const inputArray = [{ precoBase: 10 }, { precoBase: 10.111 }]

  const totalSTUB = async () => {
    return await +(inputArray.reduce((acc, atual) => acc + atual.precoBase, 0)).toFixed(2)
  }

  const sut = totalSTUB

  it(`deve somar os items do array com retorno de 2 casas decimais.`, async () => {
    const action = await sut()
    // console.log('total() :: SOMA ITEMS DO ARRAY >>', action)

    expect(action).toBe(20.11)
  })
})