import { vi, describe, it, expect } from 'vitest'

import { makeInstancePromocaoEntrega } from '@src/entitys/promocao_entrega/utils_entity/makers/makers_promocao_entrega_entity'
import { useSeedEntregaMesmoDia } from '@src/entitys/promocao_entrega/_data/seed/promocao_entrega_unitarys_seed'


describe('[maker Instancia] useMakeByEntityPromocaoEntrega >> Sucess', () => {
    vi.clearAllMocks()
    const sut = makeInstancePromocaoEntrega

    it(`deve ser possivel criar objeto via maker gerador de intancia.`, async () => {
        const input = useSeedEntregaMesmoDia
        const object = await sut(input)
        const response = object.usePerformPromocaoEntrega(10)

        expect(response).toBeTruthy()
    })


})

