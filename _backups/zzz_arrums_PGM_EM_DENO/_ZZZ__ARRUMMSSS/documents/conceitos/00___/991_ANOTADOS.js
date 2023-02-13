{
  anotados2: `
  
  //  PGM  //=====================

estrutura_de_dados:
mapeamento: as chaves de  campos ,o tipo de valor e a obrigatoriedade tem que combinar fazer um match para o que vai ser usado no final :: objeto.
ex:
meuObj combina >> type CustomizadoGraphQl >> tabelaBanco.
....
fluxos_pgm :
definir >> recuperar
obter >> deixar do tipo que precisa(casting converter) >>  preparar >> recuperar
o que tem >> chama metodo para o tipo que tem
se for container de muitos o que tem tem metedos para tal. so chamar e usar.

# significado:

variavel :: informacao , se esta entrando é uma pergunta / se esta saindo é uma resposta.

container = de muitos | interavel | ex: string, array,
recuperar = usar 

chamar = invocar | executar

identificador =  referencia | onde chamar esta referencia trago todo seu valor.

empacotar = encapsular | agrupar | guardar em uma estrutura ex: objeto.

desempacotar = extrair | desestruturar | pegar cada parte ou propriedade

Tipagem de Argumentos Nomes = Args | Input | DTO | Request

TipoCustomizado = Objeto /para recuperar desempacota igual objeto e usa cada chave

capturar ==  encapsular resultado | guardar

casting =  converter tipp, para tipo que precisa

tipos de dados :
contexto: cada tipo de dado tem suas ferramentas para poder manipula-lo.

variavel = tudo que vareia , pode mudar guarda resultado/valor ||| para recuperar usar uso seu identificador / referencia

pense: tenho este tipo de dado , qual ferramenta posso usar nele ? #tag ouro

para atribuicoes : o que aceita quem vai ser configurado, dou dados do tipo que aceita.

tudo que vem depois de uma clausula , ou sinal de atribuicao posso guardar / empacotar em uma variavel e usar no lugar a sua referencia.

container = de muitos , intsravel ex: string, array

tipoDados_simbolos: [
  tipoDeDado: 'objeto',
  acesso: `{ }` ,
  empacotamento_desempacotamento: `{ }` ,
  metodos_para_este_tipo: `
  metodos personalizados Modificadores, create, delete etc.. metodos Object do js.
`,
mais: `Em funcoes pode acessar cada NIVEL SE FOR EMPACOTADO ABRINDO E ACESSANDO COM CHAVES SE FOR OBJETO`,
]
.......
IMPLEMENTACOES PREFERENCIAS
identificador
id da entidade , configure na classe entity , senao tiver id setar o id via makeID.
......

JS
==================================

TIPO PRINCIPAL : TODOS CAMPOS

resumao :
dto > pede só obrigatorios ou input ocasionais

retorno Funcao > pede tudo quando é PrincipalEntidade.

 id só  declare e "opcionalmente" no tipo Principal 
 
e gere seu valor no servico que recebe um DTO de obrigatorios mas promete retornar este Principal que é a Entidade Principal....ou o servico retornar vazio/void e o ultimo utilizador resilvedor Retorna a Entidade Principal pra criar completa atraves deste tipo de retorno finalizador.

tipagem  Entidade Principal sempre se declara todos os campos que vai ter obrigatorio e opcionais
ex: de opcionais sao os que vao ser gerados pelo sistema , e os que querem comecar nulo pra ter valor apos uma decisao do client estes tem que atribuir:  ?? null ?????

Importante : este tipo Principal é  o  que se promete que vai retornar dentro de []! e nao pode ser nulo tem que retornar.

e tambem é o que pegamos de retorno no playground/client ..só que neste uso podemos  pedir pra retornar os campos que quisermos.

DTO a tipagem do  que  vai pedir pro Utilizador

nao declare opcionais em DTOS

só declare opcionais em Dtos de Input que vao ser todos opcionais e pra uso opcional ex: paginacao.

RESOLVENDO ID E CAMPOS 

id resolver : https://youtu.be/mgBPvqH42YQ

 Campo opcional que vai ter valor do sistema ex: id ::

Tipagem id : combinacoes : 
-no tipo Principal > declarado como opcional..
-no Dto da consulta, nao pedido/nemDeclarado
-na FuncaoResolvedora, seta ele ao copiar todos os dasos que vieram sem este opcional, e seta com valor este opcional nao passado, mas existe no tipo Entidade Principal que é  o tipo que vai retornar obrigatorio.

==================================

TS
compilacao: tsc --watch arquivo.ts // vai assistir compilacao para a dist
posso pegar este compilado e acompanhar com nodemon. no script start
tutorial aos 2:35 > https://youtu.be/rxpycPZnT6I


quando tem certeza que existe e nao retornara null uma instrucao confirme com "!" no final 
tutorial aos 4:40 > https://youtu.be/-BKYrctVmmg
.....


.....

TYPE UTILITS

Partial< DoTipo > : obtem pra si  todas as  propriedades do tipo alvo que vai usar com as formas opcionais.
use: quando quwr deixar tudo opcional sem ficar escolhendo.

Pick< DoTipo > : obtem somente as propriedades que explicitar em strings ex: "quero as" :: 'pro1' | 'prop2'
use: quando quiser pegar "POUCAS" assim vc explicita poucas.

Omit < DoTipo > : Omit as props que nao quer do alvo.
use: quando quiser pegar "MUITAS" props. assim vc omite poucas do alvo

Readonly <OTipo> : nao deixa editar mudar as  props originais torna todas só leitura.

=====================
Criar Objeto
modo_estatico : usando a Classe
- definir todas variaveis da classe publica
- funcao contrutora privada que recebera os dados pra criacao do objeto do tipo da propria Classe
- com Object.assign atribuir a cada campo recebido o this e retornando estes dados.
- metodoCriacao static pra quando receber o objeto com as variaveis de criacao do tipo da propria classe 
- encapsula em um novo objeto = um new clone desta classe passando o obj os campos que pode fazer a criacao e retorna este novo obj criado.
- 

=====================

//  POO   //=====================

- dar desconto, inserirAcrescimo :: sao metodos ...sao acoes.
ISP Unterface Segregation > diferenciar uma Entidade se é de um tiponou outro ex: cliente juridico ou fisico
- 
classe : ao fazer umq classe vc esta modelando um objeto , que vai se concretizer quando instancia-la.

pense: Ao fazer classe imagine estar fazendo o objeto.
Porque tudo que tem na classe terá no objeto.
#ouro

os atributos seram as propriedades e os metodos  os metodos do objeto.

os atributos podem ser configurados na parte superior somente tipo e valor default ou dentro dos metodos acessiveis assim no objeto.metodo() , 

declare e configure no contrutor 
Se for atributos viajantes com informacoes externos, contratos , ou classe/obj que sabe fazer alguna operacao.
......
construtor : é uma funcao que vc passa args e usa estes args nos metodos da classe como variaveis...pode ser ponto de entrada pra importacoes de outras classes ou contratos abstracoes.

invocacao_do_contrutor:
-privado : a invocacao privada é dentro da propria classe em um metodo static recebendo os args definidos no construtor neste metodo.
caso_de_uso: quando quer criar objeto desta classe sem instancia-la só usando o metodo objetivo chamando a propria classe e o metodo. ela nao podera ser instanciada criado novo objeto só ela a classe chamando o  seu metodo podera fazer algo fora da classe.

- invocao_publica de args privados: 
- a invocao do construtor publico com args privados é feita fora da classe com injecoes de dependencia injetando na new classe os objetos que a funcao espera receber que vieram da instancia de outras subClasses  
- e assim retornar um controlle super injetado.
- caso_de_uso: quando quer receber importados de fora subclasses que sabem fazer tarefas como sua propriedade.
- .....

CONTRATOS /TIPAGEM /OBJETO
contratos : tipos/ type graph/ tyepe Customizado/ type/interface ts... encare como objetos tambem...se uma propriedade tem um tipo/contrato como valor ...pense que este valor é um objeto quando for recuperar...é objeto dentro de propriedade...voce esta modelando um objeto.
.... 

CRUD
operacaoCrud: [criar, ler, editar, deletar],

usabilidade: `
cliente faz:escolhe uma operacaoCrud passa as informações  que a entidade quer, ela pega e salva executa Operacao desejada em uma lista, atualiza o estado da lista e mostra para o cliente. 
`,
......
# ouro :: nao use delete () no.js 
tuto: https://youtu.be/9E7v3wecsp0
=====================

LINKS PGM
Links importantes:
Crud Hard Js bySoltinho : https://youtu.be/5I4W0Mtcfqo

.....
fluxo:
contexto: 'api node graphql prisma testInMemory vitest',
ordem: [
1- Test,
2- Modulo/typeDefs, 3- Modulo/ Entity.ts , 
4- Contratos / Repo+  Input DTO, 
5 - CasoUso/Create , 6- typeDef Mutation,
7- Models Prisma + Migracao + Pretest + Seed , 
8 -  Repositorio Tabela,
9- Servico, 10- Injecoes, 
11- Resolver,
]
.......
configurados para pathMapping: []
falta_compatibilizar_com_pathMapping: []prisma, seed, graphql ]
......
mapear = combinar chaves, tipo de valores e obrigatoriedades entre dados de tipos diferentes , seguindo um só  modelo. 

=====
comportamentos:

conceito: 'Um metodo sempre vai mudar o comportamento do valor , que ele recebera por Argumento || Parametro . ',

capturar_resultado:
sempre que haver uma instrucao  || ou algo que gere resultado pode capturar e referenciar em uma variavel .

FUNCAO

funcao = `Voce prevê, deixa preparado pra quando acontecer se comportar desta forma que voce vai instruir.
Execucao: quando a funcao é invocada/chamada() ai sim se realiza o que vc instruiu.
`
acessos: acesso cuncao atraces de objeto com  ". " "ponto" === #pense CHAMAR

executar: realizar execucao com ()

• É para modificar / mutacao  é um setter recebe o que sera manipulado, manipula e devolve.
• É para mostrar nao recebe vai onde esta o alvo e o devolve.
•  .....

TESTS
lib_vitest:
para_pathMapping; https://www.npmjs.com/package/vite-tsconfig-paths

TEST INMEMORY
- usar test InMemory para tests unitarios.
- mapas:
- nas pasta tests da raiz :: insiro só implementacoes inmemory com banco na memoria dos Repositorios
- os arquivos de tests .spec deixo em cada modulo.
- 

# priorizar_tests: {
  local: em servicos regras de negocio ,
  tipo: 'tdd',
}

describe: descricao é a categoria dos tests dentro.

it = este | isto
 mensagem padrao:
 'deve retornar .... quando ..."
 
// METODOS VITEST & JEST // =====

conceito: 
- do lado esquerdo expect() vai o que quer checar.
- pense: "EU ESPERO QUE O RETORNO DE.."
- 
- do lado direito  depois do metodo: é o valor que estou esperando.
- pense: "VAI ME RETORNAR ...()",
- 
importacoes: todas funcoes de test sao importadas de 'vitest'

toBe = '"igual"..que o resultado seja igual?'
" use para checar Primitivos"
ele  usa o Object.is() sobre valores. nao sobre objetos.

toEqual() :: checa se o objeto da espectativa é igual ou o mesmo do objeto passado.
" use para checar Objetos"

.compare( <1° a ser comparado> , <2° a ser comparado>).toBe(<que o resultado da comparacao seja?>)

toHavePropety("<em string a prop>") == tenha a propriedade passada.


...................
pense_test:
fluxo 1 :[ {  
DADO QUE : 
QUANDO: 
ENTAO:  },

{
RED: Vermelho, Sem copilar, nao existe ainda
YELLOW: Amarelo, Atencao ir construindo
GREEN : Verde, tudo existe e funciona.
},

   { qual é o metodo ? >>,
 qual.informacao vou passar pra este metodo agir sobre ? >>,
com este cenario ()  "Espero que me retorne () " } 

]
=======
.....
Funcoes

capturas: sempre que se tem um metodo ou instrucao dentro da funcao vc pode capturar pra uma novaVariavel e evoluir este valor obtido.


blocos_escopo:
bloco de chaves "{ }" em funcoes quer dizer
"FAÇA ISTO..." E A COM O QUE QUER USAR OU ACESSAR  OU [ ] SE FOR ARRAY.

Ou seja dependo do tipo do dado a prop que quer alcancar desempacote ate abte-lo com seu simbolo de acesso.
exemplo:
transformMaiusculaValorNomeDoOjb(obj) {
  const maiuscula = obj.nome.upperCase()
  resturnmaiuscula
}
- 

pattern command query segregation

- acoes de escrita nao traz retorno só vazio ..instrui só o comando.
- ex: acoes de esceita = [ criar, editar, deletar, ]

acoes de pesquisa traz o retorno 
ex: acoes de pesquisa = [ get, buscar,   ]
......

PRISMA
prisma migrate : atualizar a estrutura do banco... usa mais quando trabalha em time, e antes de recomecar rodar o migrate para ver se tem alguma migracao esperando na fila pra ser feita.
......

CONTRATOS
nomeclatura para contrato ou objeto de requisicoes que o client pode enviar: usar input.
input === Dto | Request = '

...
prisma :: chamar de bd fica semantico se quiser trocar.i 
.....

ERROS
tratamento_erro: [
'https://danieldcs.com/tratamento-de-erros-e-excecoes-em-javascript/',

],

erros_em_funcoes: {
  erro: 'ao_invocar',
  retorno: ``se ao invocar retornar o corpo do return inteiro sem executar`,
  solucao: `execute a funcao ao invocar com () `,
.....

FUNCOES
- o que tiver apos o return é o que sera de valor para quem usar esta funcao.
- 
- se for usar uma funcao como argumento/param nao coloque () somente referencie
- 

em_funcoes: 
mutacoes: se for modificar algo no objeto desempacote extraia suas propriedades....senao for mudar nada pode receber e executar empacotado.
...
Da requisicao vou receber um objetoEmpacotado.
dentro da funcao faco o objetivo dela.
...
Parenteses de params é a porta de entrada de dados.
....
para cada  empacotamento de objeto
para usar tem que desempacotar ao mesmo  nivel . 
ex:

# definicao
campo: objUser

# uso
campo: user { prop1, prop2 ...}
..........

ALGORITMO :: CRIAR NOVO DADO ::

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
...

NODE 
script reconhecer mudanca em arquivo para restart :
flag : -e  extencoes que quer  reconhcer sepatadas por virgula ex: ts, gql
tutorial : aos 6:30 > https://youtu.be/fktvJawkGdQ

=============

GRAPHQL

evite erros de voltar nulo inserir instrucao "!" apos o que espera de retorno na tipagem.
tutorial: https://youtu.be/c_bAYPpBuFY

Com prisma o graphql  nao precisa de dataloader . tutorial: aos 1:04:00 > https://youtu.be/C8Oc31uk2Hw
......
RZJ ENTENDENDO:

acoes_disponiveis_para_o_client: {
registrar_em: [
Query (registre as Consultas que podem fazer) , 
Mutation (Registre as Modificacoes que podem fazer),

Customizado_Resolver_Trivial: posso criar um obj resolver Customizado para resolver um campo que nao tem combinacao correta entre os mapeamentos tem uma chave diferente no banco .
assim consigo resolver este campo nao mapeado para nao retornar nulo.
caso _de_uso: quando se precisa resolver um campo de api externa ou banco que  depende de externos sua estrutura. e nao fizemos um adapter para combinar com nossas entidades mapeadas. ]
,
organizacao  `definir Query e Mutation no tipo da Entidade Principal do moduloGraphql`,

resolucao: `cada registro de Query e Mutation tem que ser 1x1  resolvido com um funcao()`,
}

fluxo_requisicao: {
 cenario_mapeamento: ['resolver >>', 'type Customizado >>',  'Tabela no Banco' ],
 
  entrada_requisicao_client: `entra pelo resolver() a requisicao.`,
  
  processo: `resolver confere se o obj consultado combina com o mapeamento feito no type Customizado Definido e tambem esta combinando com o mapeamento da tabela no banco, entao  o graph consegue retornar o dado.  `,

erro_em_mapeamento: `se alguma chave estiver diferente entre estes mapeamento ele retorna nulo null.`,
}
...
erros
erro_na_requisicao: 
erro_nulo: `null`, motivo: `provavelmente nao foi resolvido()`,


.....
obrigatoridade :
nao deixar retornar nulo , no valor de dentro do [array] instruir obrigatorio com "!"
.....

argumentos_resolver: {
1° obj, 2° args, 3° context

obj : 'É o meu objeto resposta vindo da base de dados antes de ir como resposta da requisicao... é o que quero responder pro client entao posso recepta-lo antes e manipular antes de responder.',

args: `É o obj da requisicao que o client enviou pra rota do  resolver`,

context: `É o obj global onde posso registrar apis externas e recuperar e manipular no resolver.`,
},

typeDefs = [
'Estes conjuntos formarao a definicao de tipos.',

'objectTypesEntitys[] // cada objeto Entity tera sua Consulta e Mutation que pode fazer + ',

'objTypesSubEntitys[] //cada subObjeto tera seus campos e sera usado pelos objetoEntidades ',
....

resumao: graphql é buscar chaves de objetos

chave x resolver 1x1 - cada chave Query tem que ter um resolver.

toda vez que chamar na Query uma chave 
tem que ter uma funcao resolver() pra retornar o valor prometido na chave da Query.
...
Tipos Customizados sao ObjectTypes tipos de objeto que sao usados para dar um formato personalizado a um sub campo que nao é scalar primitivo.
....
DADOS DINAMICOS
- todos estes passos tem que fazer ym match : [
'- Do Client recebemos um dadoObjetoRequest',

'- Na definicao de tipos avisamos que vamos receber este dadoObjetoRequest.',

'- No resolver em 2° param é onde esta reservada a Entrada dos args que é este dadoObjetoRequest  enviado pelo client.',

'na classe os campos obrigatorios sera o modelo para este dadoObjetoRequest.
- os campos opcionais poderam ter seu valor gerado pelo sistema no Service. ',

' no Service, no Repositorio preparamos para receber este dadoObjetoRequest',
....

//  NOMES NOMECLATURAS   //===========
usar hifen "-" para separar nomes compostos,
handerline para separar atividades, o que faz,  que local.
ex: prod-encomenda_repository_postgres

root  : raiz // usar tambem em implementacors do ts sem frames. ex:
user-root.spec  ou user_root.spec 
> para testar a classe raiz de user.

Tipagens para argumentos
ex: de dados vindos da requisicao do client , usar alternativa ao DTO :: Args para o ts e Input para o Graph / 
.....


//  INGLES   //=====================
traducao : 
parent = pais ( pai & mae )

.....
=============
depreciacao >>
{
contexto: 'instalar pacote node',
tecologia: 'Node',
conceito: `Instala pacote como devDependencies`,
deprecido: '--save-dev',
atual: `- D`,
},

{
contexto: 'importar todas funcoes/modulo do arquivo de uma vez',
tecologia: 'Typescript',
conceito: `em js es6 seria modules.export em volta de todas funcoes a ser exportadas`,
deprecido: 'modules.expprt = { funcoes/modulos }',
atual: `em typescript :: export default { funcoes // }  onde importar este arquivo pode colocar o nome que quiser no conjunto de modulos porque exportou por default`,
},

==========
JAVASCRIPT
operadores_logicos: 
  ou : operador "||" Or / Ou pode ser um valor ou outros.
  obs: se o valor do primeiro passado for falsy ele atribui o proximo ou seja o primeiro que for verdadeiro.
  uso: podemos atribuir a uma propriedade um valor || ou outros.
exemplo:
const obj1 = {
  prop1: 'Rei',
  prop2: '' || 'Leo'
}

const var1 = '' || 'mae'

console.log(obj1)
console.log(var1)
......

  `,
}