import CreateModalidadeEntregaService from '@src/entitys/modalidade_entrega/controllers/create/service/create_modalidade_entrega.service'
import { modalidadeEntregaSeedOne } from '@src/entitys/modalidade_entrega/data/seed/modalidade_entrega_seed'
import ModalidadeEntregaRepositoryMemory from '@src/entitys/modalidade_entrega/repository/memory/modalidade_entrega.repository.memory'

import { vi, describe, it, expect } from 'vitest'

describe(' >> Sucess', () => {
    const sut = CreateModalidadeEntregaService
    const visitor = ModalidadeEntregaRepositoryMemory

    it(`deve chamar o metodo handle apenas uma vez.`, async () => {
        const input = modalidadeEntregaSeedOne
        const sutMock = await vi.spyOn(sut, 'handle')
        await sut.handle(input)

        expect(sutMock).toHaveBeenCalledTimes(1)
    })

    it(`deve utilizar o repository in memory sempre no test do service.`, async () => {
        const input = modalidadeEntregaSeedOne
        await vi.spyOn(sut, 'handle').mockReturnValueOnce(visitor.create(input))
        const action = await sut.handle(input)
        // console.log('MOCKADO PARA USAR O REPO MEMORY >> ', action)

        expect(action).toHaveProperty('nome', 'modalidade entrega one')
    })

})
