import { describe, it, expect } from 'vitest'
import { useSeedEntregaMesmoDia, useSeedEntregaProximoDiaUtil, useSeedEntregaNotPromocao } from '@src/_modelos_top_rzj/modelo_de_entidade/_data/seed/promocao_entrega_unitarys_seed'


describe.todo('Seed >> Sucess', () => {

    // it(`[obj entrega_mesmo_dia] deve ser possivel aplicar metodo de desconto via objeto seed promocao_entrega.`, async () => {
    //     const action = await useSeedEntregaMesmoDia.usePerformPromocaoEntrega(100, 10)
    //     console.log('APLICANDO 10% DE PROMOCAO EM 100.00 RESPOSTA >>', action)
    //     const response = 90
    //     expect(action).toEqual(response)
    // })

    // it(`[obj entrega_proximo_dia]deve ser possivel aplicar metodo de desconto via objeto seed promocao_entrega.`, async () => {
    //     const action = await useSeedEntregaProximoDiaUtil.usePerformPromocaoEntrega(100, 20)
    //     // console.log('APLICANDO 20% DE PROMOCAO EM 100.00 RESPOSTA >>', action)
    //     const response = 80
    //     expect(action).toEqual(response)
    // })

    // it(`[obj entrega_sem_desconto]deve ser possivel aplicar metodo de desconto via objeto seed promocao_entrega com zero de desconto.`, async () => {
    //     const action = await useSeedEntregaNotPromocao.usePerformPromocaoEntrega(100)
    //     // console.log('APLICANDO 0% DE PROMOCAO EM 100.00 RESPOSTA >>', action)
    //     const response = 100
    //     expect(action).toEqual(response)
    // })

    // it(`[obj entrega_sem_desconto]deve ser possivel nao aplicar procentagem se nao passar valor de porcentagem.`, async () => {
    //     const action = await useSeedEntregaNotPromocao.usePerformPromocaoEntrega(100)
    //     // console.log('SEM PASSAR VALOR DE PORCENTAGEM :: RESPOSTA >>', action)
    //     const response = 100
    //     expect(action).toEqual(response)
    // })

})
