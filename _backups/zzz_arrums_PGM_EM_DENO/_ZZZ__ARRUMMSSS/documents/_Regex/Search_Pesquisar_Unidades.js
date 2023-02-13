
const target = 'Sao Paulo77   ,'
const regra = /\s/gim
const pesquisa = target.search(regra)

// console.log(pesquisa)

// PESQUISANDO POR ALGO QUE NAO TEM NO ALVO USANDO O -1 QUE RETORNA
const target3 = 'Sao Paulo77   ,'
const regra3 = /www/gim
const pesquisa3 = target3.search(regra3)

if(pesquisa3 == -1) {
  console.log('Nada Encontrado')
}
else {
  console.log('OK')
}

console.log(pesquisa3)


/*
metodo de string : search ,é o "QUANTAS UNIDADES TEM - SOBRE A MINHA REGRA" recebe um param e retorna o indice o total de digitos na resultado da regra pesquisada ex: \d na regra vai trazer quantos digitos tem no alvo, /s vai trazer quantas unidades de espaços tem no alvo

obs: se a regra for pesquisar algo que nao tem ele retorna -1, entao podemos fazer u
*/