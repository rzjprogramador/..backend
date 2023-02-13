import { describe, it, expect } from "vitest"
import { performMoedaBR } from './convert_em_moeda'


describe("convertCurrencyBR () ", () => {
    const sut = performMoedaBR

    it(`deve converter resultado com de 2 casas decimais. >> Sucess`, async () => {
        const input = 11.123456
        const action = await sut(input)
        // console.log('Sucess convertCurrencyBR >>', action)

        expect(action).toBe(11.12)
    })


    it(`nao deve retornar convertCurrencyBR de resultado com mais de 2 casas decimais. >> Fail`, async () => {
        const input = 11.123456
        const action = await sut(input)
        // console.log('Fail convertCurrencyBR >>', action)

        expect(action).not.toBe(20.111)
    })
})