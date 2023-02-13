{
  anotados3: `
  
  .....
PENSAMENTO PGM DEV
tags: [ '#ouro', '#pensamento_dev', ]

variaveis a esquerda é sempre: 
[ 
' o retorno resultado da expressao a direita', 
' é sempre o que eu posso continuar usando' , ' é o valor do estado atual da variavel.'
],
propriedades: {
 hierarquia_de_estruturas: [
'Classe ||objeto', 'variavel | props', 'funcao', 
],
  dentro_de_tem: {
  de_classe: ['objeto', 'funcao' ]
   de_objetos: ['variaveis', 'funcao' ]
   de_variaveis: ['valor primitivo' , 'funcao', ]
},

acessos_propriedades: 

com_o_ponto: {
conceito: `Sempre a hierarquia de propriedades dentro de um objeto, acessa [funcao ou , varivel ]

- valor se for usar um valor primitivo final, ou trazer uma variavel qie ja tem um resultado final. 
- 
- funcao tem os parenteses , opcionais ou
-  que é para executar modificar ou trazer algo dependendo das variáveis de opcoes que ali dentro é padsado.
`,
- 
uso: 'acesso as propriedades',
narrativa: ` "O QUE TEM DENTRO"`
sintaxe: `objeto.funcao ( executa com as opcoes )`,

expressao : é formada por variavel || objeto & funcao( param? ) e intrucoes.

intrucoes: sao pedaços da expressao, sinais ex: de obrigatoriedade, comversao para boleano !!variavel , ? para opcional, metodos modificadores da linguagem...etc...

========

TRAZER INFORMACOES 
trazer_informacoes_para_classe: [
  {
  estrutura: 'objeto',  de_que_forma: 'importado ', uso: 'inserido no metodo ',
  },
 {
  estrutura: 'classeContratada',  de_que_forma: 'integradoComoPropDaClasse no param do construtor ', uso: 'acessivel com this. no metodo da classe ',
  },
  
]

=======
PADROES RZJ
 { 
  contexto: 'nomear',
  alvo: pastas / arquivos / Entidades
  modelo: ' oQueFaz?||Entidade?+Ferramenta?+Onde?',
  exemplo: `
    createHelloControll
    CreateHelloService
    CreateHelloRequest
    HelloRepositoInMemory
    HelloRepositoryPostgres
`,

================

GRAPHQL

Config :
Rotear colecoes de cada operacao :
 typeDefsTipos[ arquivos.gql ] , resolvers[ arquivos.ts ]

configurando as varaveis do servidorResponsavel que esta  aonde sobe o server: 

- para tipos gql  a variavel  typeDefs tem que apontar para pelos 1 de base.gql que extenderá todos gql e assim tera todos gql.
- 
- para tipos resolvers a variavel resolvers aponta para a variavel que guarda muitos resolvers.

metodos_de_operacao_graphql: [ 'Query/Consulta', 'Mutation/Modificacoes', 'Subdscription/Observacao' ]

na funcao de Borda agrupadora resolvers vamos resolver: Quwry e Mutatins
- serao funcoes : dentro de Query:{} para consultarem

serao funcos: dentro de Mutation: {}

.....

ESTRUTURAS:
OBJETO DENTRO DE OBJWTO COM METODOS TUDO COM SUAS TIPAGENS

resolver de Entidade é um objeto que vamos aclopar ao objeto do server.
entao:
resolverEntidade é um objeto / que tem o obj Query  e Mutayaion / e cada um deles tem metodos.

typeDefs é o gql string que faz a tipagem dos
objetos Query / Mutation / e suas subEntidades Personalizadas de campo
......

para cada operacao tem que fazer:
1 -  o contrato / que serao tbm a rota / identico a operacao que fazemos no front/playground. 

obs: os tipos de campos do tipos sao Entidades temos que criar seu type para usa-los ex: campo pedido: Pedido , criamos o type Pedido {} para usa-lo pra tipar um.campo.
- 
2 - e tem que fazer uma funcao Resolvedora que implementa este contrato.
- 
ex: vou fazer uma Consulta
- faco um contrato type {} como sera esta consulta.
- e para implementar este contrato faco uma funcao Resolvedora que obedecera este contrato...e guardo a referencia no objeto resolvidos = {  Query: funcaoQueImplementouEResolveu()
 }
- 
para Modificacao/ Mutation a mesma coisa:
- Contrato da Modificacao /  Funcao Implementadora / Guarda no objeto resolvidos = {
 Mutation: {
   funcaoQueImplementouEResolveu()
 }
}
............
geralmente:
Mutation:
- vai ser funcao create, update, delete

Query :: 
- vai ser funcao que recebe uma identificacao e retorna um singular.
- e uma funcao de plurais  que retorna lista de entidade
............

BREAKPOINT / ROTA / PORTA PERGUNTA E RESPOSTA  DE COMUNICSCAO COM O CLIENT.

em Resolvers que é o nosso breakpoint/Rota
tera 2 objetos {  Query: {} , Mutation: {} }

Query :: colocamos tudo que é get / consulta/ buscar informações. 

Mutation: colocamos todas funcoes que fazem mutacoes/modificacoes, insercoes , post/ update/ delete .


...
rota_breakpoint_entrada_e_saida: {
comunicacaoComOCliente: ['Receber o Pedido', 'Enviar a Resposta Processada' ]
},
....
a funcao resolvedora é um controler é a comunicacaoComOCliente usa o objeto injetado do service que traz o resultado do repo que gravou na base de dados.
...
objeto_pata_paginacao_graphql:
narrativa: `Quero que me traga 20 registros (per_page: 20 ) , 
estou na pagina 2 ( page: 2 ),
e o filtro é { onde este obj tem : prp1: 'valor tal'}
`,

campos_objetp_input_paginacao: {
per_page: Int // quantida que vai trazer
page: Int // pagina onde estou
filter: { } // objeto de condicao  que passa um objeto da forma que vc procura ..

- as condicionais sao passadas em objeto
- vc faz a operacao (consulta ou modificacao)
- e passa um objeto com os campos que quér retornar desta operacao.



================



FLUXO API EM CAMADAS

fluxo_api_em_camadas : 
conceito: {
em modo injecoes: `a classeFuncao recebera a info , passada pela ( operaria que esta no args )  `,
sintaxe: `novoDonoDaInfo = new  RecebiInfo( passeiInfo )`,
},

modo_classe: {
  conceito: `a Classe que precisa da info vai receber de forma privada pelos parametros a provedora que tem a informacao e assim esta informacao estara em sua posse em uma propriedadeIntegrada agora toda sua..e acessivel  com this. prop. integrada , podendo ser usada nos seus metodos.

No main da injecao dessas dependencias cdio os objetos cada um com sua competencia.
  
  `,
  
  sintaxe: `constructor(
    private readonly propIntegrada: ContratoProp
  ) {}
meuMetodo() {
  this.propIntegrada.OQueSabeFazerPraMim()
}
  
`,
},

.........
# ADAPTER
adapter : tem que receber do breakpoint , mas nao é injetado, faz sua adatacoes entra no servico como objeto (importado {como ObjetoProntoPraSerPreenchido} )

- é posicionado no servico apos o servico receber o pedido do controladorDsRota assim fara um match mergiando com o objeto do pedido e ainda dentro deste metodo servical entregara um objeto resultado lara o servico fazer suas manipulacoes e losteriormente gravar no repositorio - e dspous de gravado devolver a info adaptada e gravada para o controladorDeRota.



...............

ORGANIZAR PASTAS

infra/ servers/ express | routes / graphql | ...
domain/ contracts/ entities/ usecases/create/ inject | list/inject
repositories/ prisma_postgres/
controllers/ 
graphql/querys & resolvers & typedefs -- roteador que vai puxar os typeDefs = index ou base


..............

## Ordem Solid
ordem_solida_modulo_entidade: [
{ papel: ' 1 -  ROTA ', contexto: `VOU PEDIR PRO CONTROLE // ENTREGA FEITA.`, },

{ papel: ' 2 -   REPO', contexto: `TENHO TUDO - PODE VIM ME BUSCAR SERVICO `, },

{ papel: ' 3 -   SERVICO', contexto: `OLHA REPO FAZ ISTO PRA MIM COM ISTO , QUE O CONTROLE VIRA ME BUSCAR`, },

'{ papel:  4 -   CONTROLE para Rest /ou/ RESOLVER para graphql via container', contexto: `TUDO PRONTO...MUITO BEM SERVICO ENTREGA AQUI POR MIM QUE A ROTA VAI DESPACHAR.`, },
]

....
TS
COMPILAR TS
transpiladores de Typescript para Javascript,   fazer [ jest, ] entender o Typescript. 
concorrencia: [ babel, ts-node, swc-jest ]

obs: swc-jest muito mais rapido pra fazer [ jest  ] entender o Typescript. 


....
parametros:
vao trazer dados para funcao consumir.
em funcao entra via argumentos
em classe solida entra via funcao construtora constructor() {}
que é a melhor forma de receber valores de fora pra dentro da classe, e que esses valores sejam contratos...ai na instanciacao recebemos os objetos destes contratos.
....
funcoes_promessa 
contexto: buscam dados externos fora da app.

conceito:
Assincronos sao promessas que podem da sucesso ou erro..entao sempre faca dentro do try e o possivel erro no catch.
....
dados magicos marretados sempre podem ser trocados por variaveis via parametros.
....
funcoes_:
expressao: espressao ou instrucao
o que voce quér realizar ...defina em linhas
se este seu desenho vai usar em outros lugares, ou para mais de uma entidade faca esta sua expressao dentro de uma funcao e onde for usar chame a execucao dssta funcao.
....
refatorar promise para async await
o que deu certo que iria no then mudar para await na frente desta expressao.
- coloca tudo ddntro de uma funcao async.
- 
...
- comandos: expressoes nao traz retorno , entao seu retorno. é vazio void...
- quem vai trazer  rstorno é quem vai usar invocar executar este metodo.
....

retorno: clausula return retorna dali onde esta e encerra a funcao e se tiver algo na frente é o resulyado da funcao que por estar ali depois do return entao se tornará  publico pra quem for invoca-la usa-la...quem usa-la pega este pedaco de codigo da frente do return. 

usar_quando: `
  Usar return quando prometeu que a funcao.      retorna algo.
- quando és o ultimo a ser esperado retornar algo
`,

nao_usar_quando: `
nao usar return quando prometeu que a funcao retorna vazio void ,
- quando nao és o ultimo na arquitetura que vai retornar um resultado final ex: servico, entao deixa só o comando que retorna void para o proximo pegar este comando e retornar.
`,

....
nao_traz_retorno: 
- acoes_de_escrita: [create, delete], 
- padrao: pattern command query, sao só comandos :: vc nao traz retorno volta vazio
- acoes_de_ : vc traz retorno.

trazretorno:
- somente acoes de consulta:: vc traz retorno. 
- tutorial: aos 44:20 > https://youtu.be/w_el04y0cHo

================

DOCKER
ver logs se docker em background esta rodando: docker logs -f

....

CLEAN CODE
Presentation 
sao apresentacao : Controle/Resolver

.....
PRISMA USO
- criar objeto da entidada usa no metodo do objetivo o dado ou seja data: {}  
ex: create({ data: {} })  ou seja criar( { dado: {} })  

- criar objeto de tabela pivo que faz relacoes no metodo do objetivo usa o objeto create: {} .. ex: o create({ create: {} })
- 
- condicional objetivo fazer algo , quando?
- usa o obj where: {} , quando o dado for este
- faca isto... 
-
........
PRISMA CRUD
cada metodo de objetoTabela tem objetos a disposicao
pedemNosMetodosObjTabela: {
nome: 'data' : significado: dado , objetivo: 'para criar um objeto'
 }
condicional: {
  nome: 'where',
  significado: 'onde'
  objetivo: `o campo que for passado aqui vai ser referencia para fazer algo a frente que sera pedido em objeto`
  
uso_comum: `
buscar/ atualizar/ remover tudo que precisa de uma condicao de identificador unico , esta identificacao é feita no where "QUANDO" Identificar isto faca isto (create | update | delete) `,

}

=========
VSCODE

TEMAS
Tokio Nigth Storm // Dani 2022
Dragon // CodFalado

Extensoes:
- Fig : extensao pata auto complete por enquanto só mac.

==========
MELHOR FORMATO DTO :
contrato de dados recebidos_dto : melhor criar tipos dto mesmo e deixar validacoes para serem feitas no servico e input opcionais de paginacao de outra forma  ???  ou >>>

- fazer em Classe que extende Prisma Unchecked e ja faz validacoes nesses dados que o Client vai enviar.
aos 1:01:00 by Salvatore
> https://youtu.be/8IwUvk6hZaI

....

# setup:

APELIDO DE CAMINHOS
baseUrl: {

conceito: `é a base dos meus caminhos que serao personalizados, entao para eles sempre tera na frente antes do caminhos deles o caminho da baseUrl `,

exemplo_ideal: `by mang::mapear_para_compilacao_typescript:  definir a baseUrl com * que é a raiz e @variaveis como @/  vai substituir a raiz por variavel @/`,

definir_como: `src ...sera a base para outros caminhos...que entederam como src/ com barra no final.

pensamento: `Dentro do objeto paths, as @variaveis que tiver substitua pelo que esta na baseUrl + o valor que for passado para essas @variaveis.`,

exemplificando: `se eu fizer um apelido @testes e definir pra ele o caminho tests/ sempre tera na frente o caminho da baseUrl entao o ts entenderia src/tests`
....
...
ts-node-dev : {
  nome: 'ts-node-dev',
  objetivo: `faz restart reiniciando automaticamente o servidor`,
  conceito: `faz os trabalhos::
  - de compilar para js (tsc) obs: Só nao faz build compila em background.
  - de executar o codigo (node)
  - de ficar observando mudancas em real time // tempo real (nodemon)
`,
dependencia_do_tipo: 'devDependencies',
intalacao: `yarn add -D ts-node-dev`,

}

======
TESTS JEST

metodo: {

nome : metodo beforeEach() : 

significado: `Antes de tudo , para todos escopos ...disponha o que tem  aqui.`,

contexto: expoem deixa globalmente no escopo as variaveis que carrega.

configuracao: vc declara as variaveis fora dele da seu valor e usa dentro dele as variaveis ja declaradas.

uso: as variaveis detro dele ja estao global pode chama-las dentro de cada test de escopo inferior.
uso_comum: ['compartilhar injecoes de dependencias', ]
}

lib para jest :
yarn add -D ts-node // Porque o arquivo de test que o jest vai ler esta ccom extensao .ts
....
REPO 
Repositorio InMemory para tests : crie na pasta test na raiz do projeto para subir e destruir quando sobe a aplicacao.
....

ERROS NODE JS

EXCESSOES : Lança - se excessao throw new Error("MSG")  para erros de negocio se precaver para falhas inesperadas quando da errado por nao vir o esperado.

lança-se new Error("MSG") que extende do Error() do javascript para erro do sistema "Inesperado Erro".
.....

`,
}