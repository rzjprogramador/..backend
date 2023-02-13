/*
 ACESSOS PROPS DE OBJETOS
 doc: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/HasOwnProperty
 - VERIFICAR SE O OBJETO TEM UMA PROP COM O METODO DE OBJETO hasOwnProperty('<PROP>')
 */
const objPessoa: object = { nome: 'Reinaldo', idade: 44 }
const temAPropNome = objPessoa.hasOwnProperty('nome')
console.log(temAPropNome)
