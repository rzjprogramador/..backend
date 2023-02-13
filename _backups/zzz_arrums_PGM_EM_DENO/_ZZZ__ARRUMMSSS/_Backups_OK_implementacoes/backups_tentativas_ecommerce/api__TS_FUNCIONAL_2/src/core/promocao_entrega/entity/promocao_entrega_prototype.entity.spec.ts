import { describe, it, expect } from 'vitest'

import { entregaMesmoDiaPromocaoEntregaSeed, proximoDiaUtilPromocaoEntregaSeed } from '@src/core/promocao_entrega/_data/seed/promocao_entrega_unitarys_seed'
import { RulePromocaoEntregaEntity } from '@src/core/promocao_entrega/entity/promocao_entrega.entity'
import { aplicDiscountPriceProduct } from '../utils_entity/methods_prototype/aplic_discount_price_product'


describe('[Prototype] PromocaoEntregaEntity >> Sucess', () => {
    const input1 = entregaMesmoDiaPromocaoEntregaSeed
    const input2 = proximoDiaUtilPromocaoEntregaSeed
    const sut1 = new (RulePromocaoEntregaEntity as any)(input1)
    const sut2 = new (RulePromocaoEntregaEntity as any)(input2)

    it(`deve existir o metodo aplicDiscountPriceProduct no prototype do objeto PromocaoEntregaEntity `, async () => {
        const action = await sut1
        // console.log('OBJETO CRIADO NO TESTER PROTO >> ', action)
        const response = await sut1

        expect(response).toContain(aplicDiscountPriceProduct)
    })


    it(`deve conter o metodo aplicDiscountPriceProduct no prototype de todos objetos PromocaoEntregaEntity `, async () => {
        const action1 = await sut1
        const action2 = await sut2
        const response = action1.aplicDiscountPriceProduct === action2.aplicDiscountPriceProduct
        expect(response).toBeTruthy()
    })

})
