import { seedProductOne } from '@src/entitys/product/data/seeds/seedsProducts'
import ProductRepositoryMemory from '@src/entitys/product/repositories/memory/product_repository_memory'

import { describe, it, expect } from 'vitest'


describe('Product Repository Memory >> Sucess', () => {

    const sut = ProductRepositoryMemory

    it(`deve criar um produto pelo repositorio memory.`, async () => {
        const input = seedProductOne
        const action = await sut.create(input)
        // console.log('CREATE PRODUCT : VIA REPO >>', action)

        expect(action).toHaveProperty('nomeProduto', 'nome produto one')
    })

})
