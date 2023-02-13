import { describe, it, expect } from 'vitest'

import { seedProductOne } from '@src/core/product/_data/seeds/seedsProducts'
import { ProductEntity } from '@src/core/product/entity/product.entity'


describe('Product Entity >> Sucess', () => {
    const input = seedProductOne
    const sut = new (ProductEntity as any)(input)

    it(`deve criar objeto Product com objeto seed.`, async () => {
        const action = await sut
        // console.log('PRODUTO CRIADO BY SEED IN ENTITY TEST >>', action)
        expect(action).toHaveProperty('nomeProduto', 'nome produto one')
    })

})
