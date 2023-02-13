import { describe, it, expect } from "vitest"


// FUNCAO NO ARQUIVO :
export const decimalsTwo = async (value: number) => await +value.toFixed(2)


describe("Decimais Two () ", () => {
    const sut = decimalsTwo

    it(`deve retornar resultado com de 2 casas decimais. >> Sucess`, async () => {
        const input = 11.123456
        const action = await sut(input)
        // console.log('Sucess DECIMALS TWO >>', action)

        expect(action).toBe(11.12)
    })


    it(`nao deve retornar resultado com mais de 2 casas decimais. >> Fail`, async () => {
        const input = 11.123456
        const action = await sut(input)
        // console.log('Fail DECIMALS TWO >>', action)

        expect(action).not.toBe(20.111)
    })
})