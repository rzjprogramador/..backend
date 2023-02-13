// DADOS

const obj1 = { nome: 'reizao', idade: 44 }
const objAux1 = { casado: true, programador: true}

// MESMO NIVEL: SE ESPALHAR TODOS OBJETOS .. O OBJETO FINAL FICA COM TODOS OS CAMPOS NO MESMO NIVEL

const newObjetoDeMesmoNivel = { ...obj1, ...objAux1 }
console.log('OBJETO FINAL DE MESMO NIVEL: ', newObjetoDeMesmoNivel)

// SE NAO ESPALHAR OS OBJ APARTIR DO 2º PARAM ELES FICARAM EM SUBNIVEIS- OBJETO DENTRO DE OBJ.

const newObjAuxiliarSubObjeto = { ...obj1, objAux1 }
console.log('OBJETO FINAL DE SUBNIVEIS: ', newObjAuxiliarSubObjeto)