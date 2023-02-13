import { vi, describe, it, expect } from 'vitest'

import { entityMaker, objProto1 } from './heranca_proto_TS_01'


describe('Conceito Prototype Heranca js/TS >> Sucess', () => {
    const sut = entityMaker
    const inputInstance1 = { nome: 'Rei', idade: 45 }
    const inputInstance2 = { nome: 'Renata', idade: 40 }
    const sutObjProto1 = objProto1

    it(`deve criar um objeto da entidade EntityProto1`, async () => {
        const actionInstance1 = sut(inputInstance1)
        const actionInstance2 = sut(inputInstance2)
        const response = (sutObjProto1.isPrototypeOf(actionInstance1) && sutObjProto1.isPrototypeOf(actionInstance2))

        console.log('ESTAO NO PROTO DO OBJ_PROTO1? >> ', response)
        expect(response).toEqual(true)
    })

})
