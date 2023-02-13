import { vi, describe, it, expect } from 'vitest'

import { auxText1, mainPrincipal, metodoFazNada } from './mock_retorno_uma_vez'


describe('MOcando Funcoes e Retornos >> Sucess', () => {
    const sut = mainPrincipal

    it(`deve mudar a implementacao completa do metodo original usando o metodo fazNada()`, () => {
        const input = '*** texto no test ***'
        const spySut = vi.fn(mainPrincipal).mockImplementationOnce((input) => metodoFazNada(input))
        const action = spySut(input)
        // console.log('MOCK RETORNO UMA VEZ >> ', action)

        expect(action).toBe(input)
    })

    it(`deve udar o valor de retorno da funcao uma vez.`, () => {
        const input = '*** texto no test ***'
        const spySut = vi.fn(mainPrincipal).mockReturnValueOnce(metodoFazNada(input))
        const action = spySut(input)
        // console.log('MOCK MUDANDO VALOR DE RETORNO >> ', action)

        expect(action).toBe(input)
    })

    it.todo(`deve mockar só a ultima linha dentro da funcao respeitando as logicas feitas antes `, () => {
        const input = '***do_test***'
        // TODO: AINDA NAO ESTA PEGANDO O QUE FAZ DENTRO DO METODO PRINCIPAL ANTES DO RETURN - E ESTE É O OBJETIVO DESTE TEST PEGA RO ANTES DO RETURN E MUDAR A ULTIMA LINHA PRA USAR OUTRA ACAO DE RETORNO.

        vi.fn(mainPrincipal).mockImplementationOnce(() => metodoFazNada(input))
        const action = sut(input)
        console.log('MOCK SÓ A ULTIMA LINHA >> ', action)
        const response = `${input} ${auxText1}`

        expect(response).toEqual(action)
    })

})
