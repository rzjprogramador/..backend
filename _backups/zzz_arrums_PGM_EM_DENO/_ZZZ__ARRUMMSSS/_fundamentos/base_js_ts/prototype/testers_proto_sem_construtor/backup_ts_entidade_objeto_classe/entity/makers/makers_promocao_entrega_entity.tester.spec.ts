import { vi, describe, it, expect } from 'vitest'

import { useMakeByEntityPromocaoEntrega } from '@src/entitys/promocao_entrega/entity/makers/makers_promocao_entrega_entity'
import { entregaMesmoDiaPromocaoEntregaSeed } from '@src/entitys/promocao_entrega/_data/seed/promocao_entrega_unitarys_seed'


describe('[make] useMakeByEntityPromocaoEntrega >> Sucess', () => {
    vi.clearAllMocks()

    const sut = useMakeByEntityPromocaoEntrega

    it(`deve  .`, async () => {
        const input = entregaMesmoDiaPromocaoEntregaSeed
        const object = await sut.create(input)
        const response = object.usePerformPromocaoEntrega(10)

        // const createdObjectByEntity = await sut(input)
        // console.log(createdObjectByEntity)

        expect(response).toBeTruthy()
    })


})

