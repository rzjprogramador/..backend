import { createPromocaoEntregaService } from '@src/entitys/promocao_entrega/cases/create/create_promocao_entrega.service'
import { PromocaoEntregaRepositoryMemory } from '@src/entitys/promocao_entrega/_data/repositories/memory/promocao_entrega.repository.memory'
import { entregaMesmoDiaPromocaoEntregaSeed } from '@src/entitys/promocao_entrega/_data/seed/promocao_entrega_unitarys_seed'

import { vi, describe, it, expect } from 'vitest'

describe('[Service] createPromocaoEntregaService >> Sucess', () => {
    vi.clearAllMocks()

    const sut = createPromocaoEntregaService
    const sutRepoMemory = new PromocaoEntregaRepositoryMemory()

    it(`deve SUT ATUAL.`, async () => {
        const input = entregaMesmoDiaPromocaoEntregaSeed
        const action = await sut(input)
        // console.log(action)

        expect(action.promocao).toHaveProperty('nomePromocao', 'entrega no mesmo dia')
    })

    it(`deve criar objetos promocao_entrega sempre via repo memory aqui no tester.`, async () => {
        const input = entregaMesmoDiaPromocaoEntregaSeed
        vi.fn(createPromocaoEntregaService).mockImplementationOnce(async () => await sutRepoMemory.create(input))
        const createdObjectByEntity = await sut(input)
        // console.log(createdObjectByEntity)

        expect(createdObjectByEntity.promocao).toHaveProperty('nomePromocao', 'entrega no mesmo dia')
    })

    it(`deve ter o metodo "usePerformPromocaoEntrega" dentro via prototype do objeto`, async () => {
        const input = entregaMesmoDiaPromocaoEntregaSeed
        vi.fn(createPromocaoEntregaService).mockImplementationOnce(async () => await sutRepoMemory.create(input))
        const createdObjectByEntity = await sut(input)
        // console.log(createdObjectByEntity)
        const response = createdObjectByEntity.usePerformPromocaoEntrega

        expect(response).toBeTruthy()
    })


})

