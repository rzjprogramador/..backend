{
  anotados_CRUD: `
  
// =================
CRUD JS bySOLTO

// CRUD
const empresa = {
  usuarios: [
    { username: 'user1' },
    { username: 'user2' },  
   
  ],
   pedidos: [
     { id: 1, author: 'user1', prod: 'prod1', entrega: 'rua1' }
   ],  
}


// CREATE
function criaPedido(dados) {
const { author, prod, entrega } = dados
  empresa.pedidos.push({
    id: empresa.pedidos.length + 1,    
    author,
    prod, 
    entrega  
  })  
}

criaPedido({ author: 'user1', prod: 'prod1', entrega: '44' })

// console.log(empresa.pedidos)


// READ / LER / MOSTRAR
function mostraPedidos() {
  return empresa.pedidos
}
// console.log(mostraPedidos())


// UPDATE 
function atualizaConteudoPedido(id, entregaEditar) {
 const pedidoEditado =  mostraPedidos().find((p) => p.id === id)
  pedidoEditado.entrega = entregaEditar
  
}

atualizaConteudoPedido(2, 'Entrega2 EDITADA-1')

// console.log(mostraPedidos())


// DELETE
function deletaPedido(id) {
  const listaAtualizada = mostraPedidos().filter(atual => atual.id !== id)

  empresa.pedidos = listaAtualizada
}

deletaPedido(1)
console.log(mostraPedidos())


// FIM CRUD SOLTO

============

/*
# CRUD CONCEITO :: CODIGO
*/
// ======================

CRIAR NOVO DADO

const dadoRequest = {
  prop1: 'um',
  prop2: 1
}


const createDado = (data) => {
  const newDado = { ...data, prop1: '1' }
  return newDado
}

// USO
const novoDado = createDado(dadoRequest)
console.log(novoDado)

/*
ALGORITMO:: 
* PREVENDO DEIXANDO PREPARADO A FUNCIONALIDADE :
 QUANDO FOR CRIAR_UM_DADO(), (RECEBENDO UM DADO)
 { COPIO ESTE DADO RECEBIDO, MUDANDO ALGUM VALOR DE PROPRIEDADE}
CAPTURO E RETORNO ESTE NOVO_DADO

USANDO A FUNCIONALIDADE :
CHAMO A FUNCAO E PASSO MEU DADO ALVO

RESULTADO:
TEREI O MEU NOVO OBJETO COM AS MESMAS CHAVES DO QUE RECEBI DA REQUEST.

MORAL:
CRIEI UM NOVO OBJETO COM AS MESMAS CHAVES DO QUE RECEBI.
FIZ UM CLONE PERSONALIZADO DO MEU JEITO.
APROVEITEI SÓ A ESTRUTURA.
*/  

// =======================



// Listar Colecao de Objetos
const pessoas = [
  { nome: 'Reinaldo', idade: 44 },
  { nome: 'Renata', idade: 40 },
  { nome: 'Gustavo', idade: 11 }
]

function list (lista) {
  return lista.map(i => i)
}

console.log(list(pessoas))

// --‐------

artigo remover link array -- https://qastack.com.br/programming/5767325/how-can-i-remove-a-specific-item-from-an-array


// =================

// CONCEITO BUSCA POR UNICO 

const listEntidade = [
 { id: '1', nome: 'Um' },
 { id: '2', nome: 'Dois' },
 { id: '3', nome: 'Tres' }
]

function buscarUnico(id) {
  const entidade = listEntidade.find((entidade) => entidade.id === id.id)
  return entidade
}  

/*
* logica: 
   buscaPorUnico: no metodo receberei um arg. passado por quem quer buscar
   percorro aonde o alvo esta guardado com metodo find() passo pra ele
uma funcao que vai receber um interador vou retornar::
este interador.propriedade desejada se for muito igual ao argumento.prop solicitada no arg.
capturo todo este comando e retorno o resultado que esta nesta captura.
*/  

console.log(buscarUnico({ id: '2' }) )

=============
LIXEIRA

let bd = [
  { id: 1, prop1: 'vv1', prop2: 'vv11' },
  { id: 2, prop1: 'v2', prop2: 'v22' },
  { id: 3, prop1: 'v3', prop2: 'v33' },
  { id: 4, prop1: 'v4', prop2: 'v44' },
  { id: 5, prop1: 'v5', prop2: 'v55' }
]

let lixeira = []

// buscar item passando colecao e id
function buscaItem(colecao, id) {
  return colecao.find((i) => i.id === id )
}

const res = buscaItem(bd, 3)
console.log( 'Buscado item id 3: ', res )

// remover item
function removeItem (colecao, id) {
  let removido = colecao.splice(colecao[id], 1)
  addItemColecao(lixeira, removido)

  return colecao
}
// adiciona item em colecao
function addItemColecao (colecao, item) {
  colecao.push(item)
}

removeItem(bd, 1)
removeItem(bd, 3)

console.log('BD Estado Atual: ', bd)


console.log('Lixeira: ', lixeira)

==========





`;
}
