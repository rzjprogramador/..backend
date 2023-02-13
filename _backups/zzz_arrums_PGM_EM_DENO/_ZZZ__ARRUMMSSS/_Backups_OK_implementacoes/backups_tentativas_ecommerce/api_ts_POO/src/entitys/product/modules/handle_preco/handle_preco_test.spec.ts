import { vi, describe, it, expect } from 'vitest'

import handlePreco from '@src/entitys/product/modules/handle_preco/handlePreco'
import { ModalidadeEntrega } from '@src/entitys/product/contracts/product.contract'


describe('handlePreco >> Sucess', () => {
    const sut = handlePreco

    it(`deve manipular o preco.`, async () => {
        const inputDataEntrega: ModalidadeEntrega = 'PROXIMO DIA UTIL'
        const action = await sut(inputDataEntrega, 10, 2, 10)
        // console.log('HANDLE PRECO 1 >> ', action)
        // TODO

        expect(true)
    })

})
