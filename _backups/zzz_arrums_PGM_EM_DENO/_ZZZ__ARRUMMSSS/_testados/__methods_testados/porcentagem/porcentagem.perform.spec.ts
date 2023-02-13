import { performPercentage } from './perform_percentage'

import { describe, it, expect } from 'vitest'


describe('Porcentagem >> Sucess', () => {
    const sut = performPercentage

    it(`deve descontar 10% de desconto`, async () => {
        const action = await sut(100, 10)
        // console.log('10% DE 100 >> ', action)

        const response = 90

        expect(action).toEqual(response)
    })

})
