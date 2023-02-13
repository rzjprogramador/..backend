{
  tipo_valor: `PRIMITIVOS (COPIAS) : APONTA PARA O MESMO VALOR NA MEMORIA`,
  cenarios_possiveis: `STRING & NUMBER & BOOLEAN & UNDEFINED & NULL`,
  essencia: `SAO VALORES`,
  diferencas: `diferenca para "Referencias" é que é somente valor unidade, enquanto "Referencias" sao agrupadores varios valores agrupados`,
  efeitos: `SE MUDAR O ORIGINAL PRIMEIRO DECLARADO >> MUDA TODOS QUE USA SUA COPIA >> NAO CONSEGUE REATRIBUIR >> USE SEMPRE CONSTANTES`,
 exemplo: `
 let valor_MUTAVEL_pode_mudar_mas_reflete = 'Reinaldo 2'
 let copia = valor_MUTAVEL_pode_mudar_mas_reflete

console.log(valor_MUTAVEL_pode_mudar_mas_reflete) 
console.log(copia) 
`,
}

{
  tipo_valor: `REFERENCIA (APONTAMENTO :; NAO DA PRA COPIAR) : APONTA PARA O MESMO VALOR NA MEMORIA`,
  cenarios_possiveis: `ARRAY & OBJETO & FUNCAO`,
  essencia: 'SÃO AGRUPADORES OU MODIFICADORES',
  diferencas: `diferenca para "Primitivos" é que é somente agrupador, enquanto "Primitivos" sao somente valores`,
  efeitos: `SE MUDAR O ORIGINAL PRIMEIRO DECLARADO >> MUDA TODOS QUE USA SUA COPIA >> NAO CONSEGUE REATRIBUIR >> USE SEMPRE CONSTANTES`,
 exemplo: `
 const referencia = [1, 3, 5] 
// console.log(referencia)

// REFERENCIA É UMA CONSTANTE , NAO DA PRA REATRUIBUIR O VALOR DE UMA REFERENCIA ..SOMENTE ONDE ELA É DECLARADA NA PRIMEIRA VEZ
// referencia = 'Tente mudar' // ERRO : HARDCODE / TENTANDO MUDAR UM VALOR DE UMA REFERENCIA
// console.log(referencia)
`,
}


