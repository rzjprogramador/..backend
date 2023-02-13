import { deepStrictEqual } from 'node:assert'
import { describe, it, before, beforeEach, after, afterEach } from 'node:test'
import { setTimeout } from 'node:timers/promises'

function sum(num1, num2) {
    return num1 + num2
}

// function timer em callback LEGADO
// function timer(num1, num2, callback) {
//     setTimeout(() => callback(sum(null, num1, num2)), 1000)
// }

// function timer refatorarda de callback para async/await a funcao sum() é o callback que sera usado passado por param.
const timer = async (num1, num2, callback) => {
    await setTimeout(1000)
    return sum(num1, num2)
}


describe('Using Node.js only!!!', () => {

    // beforeEach(() => console.log('vou rodar antes de cada test/it') )

    // afterEach(() => console.log('vou rodar apos cada test/it.'))

    // beforeEach(() =>  console.log('vou rodar antes do proximo test/it.') )

    it('it should sum two values... deve somar dois valores.', () => {
        const expected = 10
        const current = sum(5, 5)
        deepStrictEqual(current, expected)
    })

    it.skip('it should sum two values... deve somar tres valores.')

    it('it should sum two values... deve somar quatro valores.', { only: true })

    it('deve chamr a funcao sum depois de 1 segundo.', () => {

    })
})