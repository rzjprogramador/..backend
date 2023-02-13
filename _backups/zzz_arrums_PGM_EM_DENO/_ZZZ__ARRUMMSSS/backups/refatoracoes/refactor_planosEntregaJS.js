// REFATORADO PARA CONDICOES OBJETOS

const makePlanos = {
    dia: PlanoEntregaDia,
    default: PlanoEntregaDefault,
    feriado: PlanoEntregaFeriado
}

const showMakePlanos = (type) => {
    return makePlanos[type]()
}
console.log(showMakePlanos('dia'))


// ======================

// LEGADO -- A MESMA DE CIMA >> CONDICIONAL COM SWITCH CASE


const makePlanosLegacy = (type, ...args) => {
    switch (type) {
        case 'dia':
            return PlanoEntregaDia(...args)
        case 'default':
            return PlanoEntregaDefault(...args)
        case 'feriado':
            return PlanoEntregaFeriado(...args)
    }
}

const handleFactory = () => {
    return { makePlanosLegacy }
    makePlanosLegacy()
}

// USO CLI
const productRequest = handleFactory()

console.log(productRequest.make('dia'))

console.log(productRequest.make('default'))

console.log(productRequest.make('feriado'))

// TUDO ACIMA FOI TROCADO PELO REFACTOR DO TOPO.
