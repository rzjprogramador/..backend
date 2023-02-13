import ProductRepositoryMemory from '@src/entitys/product/repositories/memory/product_repository_memory'
import { seedProductOne } from '@src/entitys/product/data/seeds/seedsProducts'
import CreateProductService from '@src/entitys/product/controllers/create/service/create_product.service'

import { vi, describe, it, expect } from 'vitest'


describe('Create Product Service >> Sucess', async () => {

    const sut = CreateProductService
    const visitor = ProductRepositoryMemory

    it(`deve criar um produto no service sempre pelo repository memory.`, async () => {
        const input = seedProductOne
        await vi.spyOn(sut, 'execute').mockReturnValueOnce(visitor.create(input))
        const response = await sut.execute(input)

        // console.log('MOCKADO SERVICE SEMPRE CRIANDO PRODUCT VIA REPO IN MEMORY >>', response)

        expect(response).toHaveProperty('nomeProduto', 'nome produto one')
    })

})
