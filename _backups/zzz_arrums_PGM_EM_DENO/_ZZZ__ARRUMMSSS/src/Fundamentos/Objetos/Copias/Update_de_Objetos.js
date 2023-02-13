// 1 >> ENTREGAS FUNCIONAL

const listaObj = [
    { id: '1', texto: 'Rei', number1: 1 },
    { id: '2', texto: 'Renata', number1: 2 },
    { id: '3', texto: 'Guga', number1: 3 },
]

const request = { texto: 'MUDOU_1', number1: 4 }

// EXEMPLO EM FUNCAO ::

const updateListaObj = (id, objUpdate) => {
    const captured = listaObj.find(obj => obj.id === id)
    // console.log(captured)
    const transformObj = { ...objUpdate, number1: 10, novaKey1: 'foo' }
    const updated = { ...captured, ...transformObj }
    return Object.assign(captured, updated)
}

// EXECUTAR A FUNCAO PARA FAZER EFEITO
updateListaObj('1', request)

// MOSTRAR NA TELA RESULTADO
console.log(listaObj)


