{
  anotados_testes_de_Codigos: `
  Modelagem Model Banco com Prisma ::

um_para_muitos: {
  conceito: `1:N -- PARTE 1 PERTENCE A >>  PARTE 2 QUE TERA MUITOS DA PARTE 1`,
  
na_parte_um : `ao que Pertence declara como valor só  o ModelAoQuePertece ... que ele faz a referencia do  id doQualPertence.`,

na_parte_dois: `que tera muitos da pertecente declara pertecente Pertecente [] tera muitos deste.`,
},
.................

muitos_para_muitos: {
  conceito: `PARTE 1  pode estar SER REGISTRADO em Muitos  da PARTE 2
e a Parte2 podera GUARDAR MUITOS da Parte1`,

detalhe: `parteExtra_Pivo`é uma tabela Pivo opcional  que une parte1 e parte2 no caso de relacao Muitos para Muitos...opcional porque senao o prisma faz a relacao automatica sem dar pra vc inserir novos campos na Pivo. `,

na_parte_extra_pivo: ``,
na_parte_um: ``,
na_parte_dois: ``,


  
},


=====

COMPARANDO COM.BANCO PRISMA FULLCYCLE:

Trilha {} >>
 a trilha tera MUITOS Cursos []
.....

Licoes {}  >>
licao PERTENCE ao Curso
....

Cursos {} >> 
- cursos PERTENCE a UMA trilha  >> Trilha 

.....

Estudantes {} >> 
estudante User pode estar matriculado em muitas Trilhas [] 
e a trilha podera ter muitos Estudantes é um N:N muitos. para muitos

.....
=========

// CALLBACK

function imprimeDuasVezes (fooArg) {
  console.log(fooArg())
  console.log(fooArg())

  // CALLBACK: FUNCAO PASSADA COMO ARG TEM QUE SER SÓ REFERENCIA.
  // SÓ PODE SER CHAMA COM () PARA EXECUTAR DENTRO DA FUNCAO
}

function provedora () {
  return `Me repita 2vz.`
}

// USO
imprimeDuasVezes(provedora)

/*
* 
*/  
// ==============

IDEAL
REMOVER OBJ DO ARRAY --> OK
E ADICIONAR NA LIXEIRA_MEMORY

const array = [
{ id: 1, nome: 'deleta'},  
{ id: 2, nome: 'dois'},  
{ id: 3, nome: 'tres'},  
{ id: 4, nome: 'quatro'},  
]

let lixeiraArray = []

function remova(id) {
  const alvo = array.findIndex(a => a.id === id)
 // console.log(alvo)
 const deletado = array.splice(alvo, 1)
// console.log(deletado)  

lixeiraArray.push(deletado)
console.log(!!deletado)  

return !!deletado  
  
}

remova(1)

console.log(array)

// console.log(lixeiraArray)



...........

DELETAR OBJETO DO ARRAY 
NAO IDEAL >> PORQUE TIRA COPIA DO ARRAY
// COM FILTER  >> VAI CRIAR COPIA DO ARRAY E FILTRAR RETIRAR O ALVO

ES2015

let someArray = [
               {name:"Kristian", lines:"2,5,10"},
               {name:"John", lines:"1,19,26,96"},
               {name:"Kristian", lines:"2,58,160"},
               {name:"Felix", lines:"1,19,26,96"}
            ];

someArray = someArray.filter(person => person.name != 'John');

====
// MANIPULANDO VALORES ANTES DE USAR

let a = 20

function soma(a, b ) {
  if(a > 10) {
   a = a * 20
  }
  return a + b
}

console.log(soma(a, 10)) 
/*
  - TEM QUE DAR 410
  - PORQUE "a" RECEBIDO ERA 20
  - NA MINHA CONDICAO : SE "a" FOR MAIOR QUE 10 >> "a" SERA ESSE SEU VSLOR PASSADO DE 20 VEZES 20 ENTAO "a" FICA SENDO 400 DAQUI PRA FRENTE
- NO USO DA FUNCAO FOI FEITA A SOMA DE 400 + NOVO VALOR QUE PASSARAM.

*/
=========


const enviado1 = {
  nome: 'Rei',
  idade: 44,
  valor: 10
}

const enviado2 = {
  nome: 'Guga',
  idade: 94,
  valor: 10
}

// ================================

function useParams(data) {
  const { nome, idade, valor } = data

 /*
 OBS: PARA MANIPULAR VARIAVEIS VINDAS POR PARAMS TEMOS QUE CRIAR NOVAS VAR_AUXILIARES E COMO VALOR USAMOS OPERACOES COM AS QUE VIERAM DOS PARAMS
E DEVOLVEMOS ESSAS NOVAS MANIPULADAS
*/

  const newNome = data.nome.toUpperCase()
  const newIdade = idade + 50
  const newValor = valor + 200

  console.log(`
Sr. ${newNome} tem ${newIdade} de idade
e recebeu R$ ${newValor}`)  
 
}

// USO
useParams(enviado1)
useParams(enviado2)

// ==================

// ================================
const array = [
  {
  id: 1,
  nome: 'Rei',
  idade: 44,
  valor: 10
},

 {
  id: 2,  
  nome: 'Guga',
  idade: 94,
  valor: 10
  },
]  

// ================================
// EDITAR COM JS

function update(id, newDados) {
const encontrado = array.findIndex(e => e.id === id)  
  
   return {...encontrado, ...newDados }
}



// USO
console.log(update(1, {
  nome: 'Rei --EDITADO',
  idade: 400,
  valor: 10000
}
))

// ================================

` 
}