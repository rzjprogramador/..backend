/*
# metodo disponivel no prototipo de string

## split() , significado: dividir

entrada: via args >>> passamos o separador que queremos que encontre no target

processo: e se ele encontrar este separador no alvo..

saida: caso Truthy ele retorna um array com items separados com este separador,

casoContrario: caso Falsy se o separador nao existir no alvo ele nao faz nada
*/

// ex: 1
const target = 'São Paulo , SP'
const pre = target.split(',')
console.log(pre)

