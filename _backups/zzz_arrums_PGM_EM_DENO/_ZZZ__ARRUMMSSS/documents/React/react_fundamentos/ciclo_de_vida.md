# COMPONENTES JSX

JSX são Componentes Js com Html. é o que retorna uma funcao React dentro da funcao renderizadora return()

# ESTADO / STATE

- stado/state é um valor atual que podera ser modificado, alterado, deletado.

---

# CICLO DE VIDA

> devem ser uma state:

- por parte da app as estruturas de entidade: ou seja os "arrays | objetos "
- por parte da app o state normalmente é um array , por parte do client o state normalmente é um objeto.
-
- por parte do client: a "variavelDeEntradaDeDados" o objeto input
-
- todas variaveis por onde entram ,setam ou modificam dados.

> exemplo dos que poderam ser state:

- pai/parent: tarefa , porque tera os filhos/children : tarefa1, tarefa2, tarefa3...,
-
- pai/parent: user, porque tera os filhos/children: user1, user2, user3...,
-
- pai/parent: produto, porque tera os filhos/children: produto1, produto2, produto3...,

- input : variavel de entrada de dados por parte do client.
-

> ciclo de vida:

- ciclo de vida é tipo um crud na entidadeDeUso... ela tera um ciclo de criacao/montagem/, update/alteracao, delecao/remover,

# HOOKS

> Hooks são funcoes do react disponiveis para entidades state.

- para usar as funcoes hooks a entidadeDeuso tem que ser um state.

---

# USE STATE

> useState :

- hook que transforma entidade em state:
- Para dar ciclo de vida a uma variavel/entidade tem que transforma-la em state.
- apartir do momento que a entidade é um state, voce pode usar os hooks nela.

> sintaxe: [entidade, setEntidade] = useState()

- no array recebe 1º a entidade que sera um state,
- em 2º a funcao que será o arg e vai setar configurar o valor do state do 1º param,
- e na funcao useState( <o valor que vai iniciar a entidade satte do 1º param.>)
- ***

# USE EFFECT

> useEffect:

- efeito colateral/apos alguma mudanca em entidades state

> sintaxe:

- useEffect ( () => {}, [EntidadeState])
-
- o useEffect recebe primeiro uma funcao e em segundo um array de state... ele fica monitorando uma state e assim que ela sofr
  e alguma alteracao ele executa a funcao passada no seu primeiro parametro

> aplicabilidade:

- bom para salvar o estado atual da state toda vez que é modificado no localStorage ... esta funcionalidade sera a funcao do primeiro param.

---

# APRESENTACAO : MOSTRAR NA TELA O STATE

Na funcao Component dentro do return() : return() é uma funco que renderiza o html codificado comas logicas do js sendo assim ele mostra o resultado do jsx.

Pai HtmlEstrutura usa o Pai EstruturaStateJs
.. os PaisJs geralmente sao arrays e usam metodos de loop para acessar os filhos de estruturasHtml
Filho EstruturaJs usa o Filho EstruturaHtml

exemplos estruturas:
estruturasHtml: <url> |
estruturasJS: tarefas | input

> implementacao: Dentro do PaiHtml ,MetodoPaiJs devolvendo filhosJs na estrutura berço filhosHtml

- implementacao: escolho a estruturaHtml pra apresenatr um state.

- escolhi <ul>
  dentro dela faco um map() no meu arrayState
  neste map retorno um filhoDaEstruturaHtml escolhida com os items/filhos do array da EstruturaPai

> obs: o blsoco de retorno de uma funcao dentro do return() html JSX é => () com parenteses ao inves de chaves... porque retornar uma executavel Js com Html JSX ... nao igual os retornos de funcao normal que retornam objetos ..estes usam parenteses apra retornar um JSW : Componente Js com Html.
>
> exemplo:

  <ul>
    {tarefas.map(t => ())}
