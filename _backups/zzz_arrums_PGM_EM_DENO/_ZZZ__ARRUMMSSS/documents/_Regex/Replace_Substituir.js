// SUBSTITUINDO POR TEXTO
const target = 'Sao Paulo77   ,'
const regra = /\d/gim
const substituir = 'NOVO'
const pesquisa = target.replace(regra, substituir)
// console.log(pesquisa)

// SUBSTITUINDO POR FUNCAO
const target2 = 'Sao Paulo77   ,'
const regra2 = /\d/gim
const substituir2 = (data) => {
  return `${data.toUpperCase()}=== `
}
const pesquisa2 = target2.replace(regra2, substituir2('a'))
// VAI SUBSTITUIR A LETRA PASSADA COMO ARG 'a' PELO QUE FOI DEFINIDO NA FUNCAO
console.log(pesquisa2)

/*
replace: significado dividir
args: terá dois params,
1º a regra de pesquisa,
2º o que quér substituir o pesquisado pela regra...pode ser uma funcao este que vai substituir ou qualquer outra coisa
*/

// export default 1