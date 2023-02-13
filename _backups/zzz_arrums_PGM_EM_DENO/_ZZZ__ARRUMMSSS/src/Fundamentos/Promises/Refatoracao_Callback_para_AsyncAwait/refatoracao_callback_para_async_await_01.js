import { setTimeout } from 'timers/promises'

function sum(num1, num2) {
    return num1 + num2
}

// OK
// function timer refatorada de callback para async/await a funcao sum() é o callback que sera usado passado por param.

const timer = async (num1, num2, callback) => {
    await setTimeout(1000)
    return await sum(num1, num2)
}

// function timer em callback LEGADO
// function timer(num1, num2, callback) {
//     setTimeout(() => callback(sum(null, num1, num2)), 1000)
// }

async function showTimerAsync(num1, num2) {
    const result = await timer(num1, num2)
    return result
}
console.log(showTimerAsync(100, 100))
// console.log(timer(100, 100))