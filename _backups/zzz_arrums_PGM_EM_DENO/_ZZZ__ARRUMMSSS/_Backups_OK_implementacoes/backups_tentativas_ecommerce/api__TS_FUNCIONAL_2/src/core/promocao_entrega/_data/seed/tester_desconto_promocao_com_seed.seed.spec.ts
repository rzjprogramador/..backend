import { describe, it, expect } from 'vitest'
import { useSeedEntregaMesmoDia, useSeedEntregaProximoDiaUtil, useSeedEntregaNotPromocao } from '@src/core/promocao_entrega/_data/seed/promocao_entrega_unitarys_seed'


describe.todo('Seed >> Sucess', () => {

    // it(`[obj entrega_mesmo_dia] deve ser possivel aplicar metodo de desconto via objeto seed promocao_entrega.`, async () => {
    //     const input = { inputRequest: 100, percentage: 10 }
    //     const action = await useSeedEntregaMesmoDia.useDiscountPromocaoEntrega(input)
    //     // console.log('APLICANDO 10% DE PROMOCAO EM 100.00 RESPOSTA >>', action)
    //     const response = { inputRequest: 100, percentage: 90, valorFinalComDesconto: 90 }
    //     expect(action).toEqual(response)
    // })

    // it(`[obj entrega_proximo_dia]deve ser possivel aplicar metodo de desconto via objeto seed promocao_entrega.`, async () => {
    //     const input = { inputRequest: 100, percentage: 20 }
    //     const action = await useSeedEntregaProximoDiaUtil.useDiscountPromocaoEntrega(input)
    //     // console.log('APLICANDO 20% DE PROMOCAO EM 100.00 RESPOSTA >>', action)
    //     const response = { inputRequest: 100, percentage: 80, valorFinalComDesconto: 80 }
    //     expect(action).toEqual(response)
    // })

    // it(`[obj entrega_sem_desconto]deve ser possivel aplicar metodo de desconto via objeto seed promocao_entrega com zero de desconto.`, async () => {
    //     const input = { inputRequest: 100, percentage: 0 }
    //     const action = await useSeedEntregaNotPromocao.useDiscountPromocaoEntrega(input)
    //     // console.log('APLICANDO 0% DE PROMOCAO EM 100.00 RESPOSTA >>', action)
    //     const response = { inputRequest: 100, percentage: 100, valorFinalComDesconto: 100 }
    //     expect(action).toEqual(response)
    // })

    // it(`[obj entrega_sem_desconto]deve ser possivel nao aplicar procentagem se nao passar valor de porcentagem.`, async () => {
    //     const input = { inputRequest: 100 }
    //     const action = await useSeedEntregaNotPromocao.useDiscountPromocaoEntrega(input)
    //     // console.log('SEM PASSAR VALOR DE PORCENTAGEM :: RESPOSTA >>', action)
    //     const response = { inputRequest: 100, percentage: 100, valorFinalComDesconto: 100 }
    //     expect(action).toEqual(response)
    // })

})
