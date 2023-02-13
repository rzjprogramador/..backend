
const objExistente = { texto: 'Normal', number1: 4 }

const request = { texto: 'MUDOU_1', number1: 4000 }

// EXEMPLO EM OBJETO ::  ADICIONANDO TODOS OBJ A 1 SÓ OBJETO

const newObjetct = { ...objExistente, ...request }

console.log(newObjetct)



