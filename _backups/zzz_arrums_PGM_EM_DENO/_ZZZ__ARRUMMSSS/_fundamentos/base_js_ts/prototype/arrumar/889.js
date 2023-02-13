// LICAO DE CASA // =======
NA APP MIXFLEX
- merge schema graphql : https://gist.github.com/icebob/553c1f9f1a9478d828bcb7a08d06790a
- 
- injetar instancias
- nao  criar metodos crud nas entidades só  o create porque tem campos a serem adicionados no nascimento do filho.
- o crud restante fazer somente no banco e servico...e aproveitar no breakpoint.

-  mapear estes metodos no graphql
- implementar contrato Repo com BD prisma
- estudar  >> functional error handling
- tutorial: erro flexivel , pequenas surprezas ao inves de try catch :: https://youtu.be/ai-gumm3Ois

=============================

// dicas_aleatorias // =======

pgm: 
algoritimo: instrua com instrucoes o pc, porque o computador só sabe >>  horario, tempo && falso, verdadeiro && operacoes aritmeticas.
o restante vc tem que instruir com a sintaxe da linguagem escolhida, voce pode manipular aproveitar o que o pc ja sabe tambem.
toda tarefa tem entrada , processamento e saida

// VALORES

nos representamos valores com variaveis que contem ou junto com outra em operacao ou passando  por um metodo retorna um valor de resultado.

implemento: preciso de um valor :: ou vou ate onde tenho a informacao ou crio apos o sinal de atribuicao com combinacoes operacoes de variaveis ou a propria variavel que tem a informacao do valor que quero...e aproveito este retorno capturando ou nao conforme precisar evoluir ou devolver o resultado do dado obtido.

pense: preciso de um valor esta variavel ou metodo me da este valor? faca combinacoes de variaveis ou passe um metodo pra chegar no valor que precisa e evolua. 

aproveite sempre o retorno de valores a direita da atribuicao... é o resultado falsy ou trufy .. aproveite.
.........

ao_inves_de_verificar_possivel_nulo: ao capturar ou chamar objetos que vem de requisicoes cliente que corre o risco de ser nulo sem valor e vc faria um if pra saber se é nulo...coloque apenas "?"  apos o objeto é o opcional channel
tutorial: https://fb.watch/dQNkU--b7C/
porque senao o js vai executar o objeto.null 
se ele for nulo na falta do objeto. ter valor.

valores_de_objeto_request: 
responde o valor se for trufy ou null se for falsy
o js ao chamar um obj ou metodo tem que dar uma resposta...ele procura pelo metodo no prototipo chamado se existir procura o valor pra responder senao encontrar ele responde nulo ou undefined.
....

undefined é mais para expressao que retorna falsy

quando for usar um valor que pode ser o valor ou undefined 
expresse que pode ser o valor OU "&&"  algo que pode trazer este valor por ex: um metodo que o traga
exemplo: id ?? makeID()
// explicando: este id se apssar o mouse vai ver que pode ser um id ou undefined entao digo que é id  OU "&&"  esta funcao que traz o valor que preciso apra id.

null é mais para retorno de variavel que retorna falsy ...sempre aproveite os retornos.

retornos_nao_boleanos_trufy_falsy:
tutorial: https://youtu.be/NzMpWsMKf4A

// falsy sao considerados falsy:
conceito: tudo que nao tem valor
possibilidades: [ undefined, null, 0, ' ', false, NaN ]


// trufy :: é tudo que nao é falsy...tudo que tem valor na maioria primitivo

quando o valor é trufy ele sempre retorna o que tem de valor.
...

============

// quando usar  // =============
quando_usar_classe: quando quér ter filhos objetos deste contexto.

quando_usar_funcao:  é um solteiro colaborador ...quando quer deixar comportamentos disponiveis pra quem precisa ... nao precisa procriar, nem fazer filhos pra usar...é publico seus poderes.

// PGM  hierarquias // ========
pai: {
  traducao: parent

filho: {
  traducao: children

dna: {
  traducao: prototype
  conceito: `propriedades e comportamentos que todo filho herdara do pai....metodos disponiveis que herda esta dentro de __proto__ pode acessar com objeto.prototype.<terá metodos>`,
....

coerencia:

se nao tem nada dentro
use sem nada dentro,
se promete_um_tipo: devolva este tipo

--em_classe: metodos tem que ser coerentes com a classe, tem que ser comportamentos deste contexto ...ex: class Cliente ..metodos:: atualizarCliente(), criarCliente(), deletarCliente() ...obs: todos tem o nome da classe no final entao sao comportamentos dela...mesmo se nao tiver o nome igual é para este contexto a funcionalidade.

.....

reprodutor: é a classe ou funcao construtora

.....

props_da_classe: {
conceito: `
todas as props serao campos do objeto.
vc tera campos fixos ou dinamicos.

sequiser fixo :: declare no topo da classs que tera  valor estatico marretado.

se quiser dinamico declare como patam no construtor que tera valores importados configurados ou com funcionalidades e tipos de fora.

toda propriedade da classe é para usar nos metodos...sendo as fixas ou dinamicas.`,

fixas: `sao as declaradas no topo, se usar é para definir valores estaticos , campos ja iniciados com valor base de referencia`,

dinamicas: `
sao as declaradas no construtor  que é a BARRIGA"  onde vai gerar todos os filhos.
sempre com as propriedades  obrigatorias que tera que ter.

similar a uma funcao ss variaveis aqui sao parametros e tera valor na instanciacao invocacao ao pasarem argumentos pedidos.

tambem pode ser porta de entrada de importacoes tendo o valor de classe, interface., o que vc quiser trazer pra denyro da classe em forma de seu campo sua variavel.

o que declarar no contrutor receberas o valor de fora na hora de instanciar , o que esta aqui no contrutor sera prop da classe campo do objeto.
`

bloco_construtor: `é onde se configura as props do construtor como um bloco de funcao..que manipula as variaveis parametros vindas do construtor.`,
}
.....

this: 
significado: o filho | este filho | planos para o bebê 

narrativa: ao escrever this ..diga "O FILHO" ... " O FILHO QUANDO CRESCER ... "

conceito: faz planos habilitando o filho a ter do seu jeito  propriedades e comportamentos iniciados pelo pai.
......

// quando_quero // =====

quero_acessar_de_fora_uma_propriedade: faco um get na origem desta prop.

quero_dar_valor_a_prop_por_fora_de_seu_escopo: faco um set

=============

// ALGORITMOS // =======

comandos_de_entrada: {

caixa_comunicacao: {
comando: `prompt('mensagem: ')`,
exemplo: `const leia = prompt('Digite seu nome : ')
`,
},

},

comandos_de_saida: {

  conceito: 'mostra na tela view do tipo de tela',

  para_terminal: `console.log(<valor variavel ou primitivo>)

  para_documento_html: `
  
  caixa_comunicao: {
   comando: `alert() `,
   }
   
  document.write() // js vanilla
  send() // express
`,

}
operadores: {
  logicos: {
    conceito: 'apos avaliar entre dois operandos retorna um boleano falso ou verdadeiro.',

instrucoes: `
<  // menor que

>  // maior que

? // opcional

?? // se for ausente

! // a esquerda no inicio é negacao --- a direita apos o valor é afirmacao.

!! // antes da variavel transforma o valor de resultado da mesma var em boleano

==! // diferente

|| // OU para retornar falso todos tem que ser falsy

&& // E para retornar verdadeiro todos tem que ser verdadeiro...ele interrompe no primeiro falsy e retorna falso
`,
  },
  
},

funcoes : {
procedimento: {
  conceito: `rotinas que serao usadas em mais que um lugar, para nao repetir codigo inserimos a rotina em uma funcao e usamos a fincao onde precisarem desta rotina é uma factory fabrica de rotinas`
},

funcao_construtora: {
conceito: `cria objetos da forma certa usando this e se precisar de metodos no objeto adiciona o metodo criado no prototype deste objeto.`,
},

funcoes_visualizadora: {
  contexto: `
comando que só  mostra o que esta pronto - nao devolve nada...se na ultima expressao nao usar o resultado da ultima expressao é só um comando ..o retorno da funcao  é void`
},

funcao_modificadora: 
  conceito: `
modificadora que recebe, faz operacoes e retorna este tipo recebido
`,

funcao_callback: {
conceito: `Callback são bem usados quando vc deseja criar funções mais genéricas, segue um exemplo de uso.

Vc cria uma função para exportar uma tabela para PDF, Excel etc... Essa função pode ter um callback para que quando o código termine de fazer a exportação, ele chame o callback para fechar um popup ou aparecer um alerta que a exportação foi feita.`,

detalhes: `

aulacallback :: https://blog.unicorncoder.dev/callbacks-javascript/
....

Callback :: funcao que vai ser chamada ou executada depois

geralmente vem no ultimo param.. com a funcao de dar um retorno de algo depois de executado o parametro anterior ex: 
mandei no 1° param rodar na porta 3333 e como callback depois uma anonima mostrando as informacoes que deu certo o primeiro.

entao : uma anonima em ultimo param dizendo que a primeira tarefa deu certo.
.....


 QUANDO PRECISO FAZER DUAS OPERACOES DIFERENTES NA MESMA FUNCAO
exemplo: Somar e depois Multiplicar ::

Funcao Callback executa depois , é uma funcao por param q executa sobre o valor de uma resultado da primeira funcao , ela faz outra funcionalidade sobre o resultado de uma funcionalidade.

Pode ser usada dentro da funcao depois da primeira instrucao ou na invocacao

é assinalada na ultima posicao dos  parametros

exemplo:
function somaMultiplica(a, b, fazDepois) {
    return a + b

    fazDepois = function(totalDaSoma)  {
    totalDaSoma * 3
    
}

}
somaMultiplica(2, 4, fazDepois)
// vai dar 6 * 2 totalizando

// ---------------
const resp1 = (back) => back('resp x1')

const outra2 = (back) => resp1((lower) => back(lower))

//Mostrar na tela
outra2((magica) => console.log(magica))
 
/*
CALLBACK :: HIGH ORDEM FUNCTION
  CENARIO::
- Uma funcao recebe uma func e retorna Algo
- outra func vai receber a msm func q a outra recebeu
e vai executar a primeira func recebendo uma func pra fazer por ultimo
esta func recebe o param desta func que aguardava resolver o da outra

--> usar
invocar a segunda e injetar uma varInvent ecretornar esta var na amostra


*/
// --------------

# Descrever Funcionalidade ::  CALLBACK ::

--------------------------------------

// O QUE QUER DIZER  :: CALLBACK ::
      callback === ligar de volta
--------------------------------------

// CONCEITO RESUMIDO :: CALLBACK ::
      executar depois
--------------------------------------

// QUANDO USAR  :: CALLBACK ::
      
      Tudo que é delegado a terceiros e necessita de uma resposta se deu certo ou nao
      Ler ou executar mais que um arquivo
      Enviar email
------------------------------------

// EXEMPLO :: CALLBACK ::
      array.filter(param1 => param1.includes("minha busca no array"))
--------------------------------------

// O QUE POSSO FAZER COM :: CALLBACK ::
      Uma função por parametro
--------------------------------------

// O QUE ESPERA :: CALLBACK :: 
      uma função por parametro
--------------------------------------

// Sintaxe :: CALLBACK ::
      (param => param/argumento.metodo)
--------------------------------------

// Exemplo Otimizado :: CALLBACK ::

array = ["pais Reinaldo", "pais Renata", "Gustavo", "Leonardo"]

novoArray = array.filter(param => param.includes("pais"))

console.log(novoArray)


# ==============================

/*
======== CALLBACK === LIGUE DE VOLTA === Depois do metodo ele vai retornar sucesso ou insucesso =====================================
É UMA FUNÇÃO DENTRO DA OUTRA PASSADA POR PARAMETRO
Quando um metodo assincrono termina a execucao ele é chamado 
Voce tem uma metodo assincrono - Voce liga seu callback -- quando esse metodo assincrono é concluido --sua funcao callback é chamada 

*/

/* 
1- Inicialização : CALLBACK É UM METODO QUE VC APONTA ELE POR PARAMETRO NA FUNÇÃO QUE DESEJA QUE ELE SEJA EXECUTADO DEPOIS DELA 
    ex:   metodo(param1, param2, callbackNome)

2- Processamento : INVOCA ELA DENTRO DA FUNÇÃO ANTES DO FIM DO ESCOPO  
Ex: DENTRO DO ESCOPO DA FUNÇAO ASSINCRONA EXECUTA-LA ::: callbackNome()

3- Invocação: Em forma de arrow function na invocação do metodo que ela esta sendo ligada e em forma de atribuição da funcao assincrona: 
    ex:
    enviarEmail('texto', 'texto, () => { --AKI CONTEUDO DO MEU CALLBACK -- })
*/



function enviarEmail(corpo, para, callbackNome) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ---------------------------------------
            ${corpo}
            ---------------------------------------
            De: Reinaldo Programador
        `)
        callbackNome()
    },3000)
}
console.log('INICIO DO ENVIO DE EMAIL')
enviarEmail('Oi seja bem vindo aos CONECTADOS', 'reinaldo@email.com', () => {
    console.log('ISSO É UM CALLBACK -- CONFIRMANDO A FUNCAO QUE FOI ASSINCRONA')
    console.log('Seu email foi enviado , deve chegar em minutos ')
    console.log('TUDO OK')
})

// -------------
// Mais exemplo callback ::

function enviarEmail(para, msg, back) {
  setTimeout(() => {

    console.log(`Enviando Email...`)

    setTimeout(() => {
      back(5)
    }, 4000)
    
  }, 2000)
  
  
}

enviarEmail('foo@email', 'bar msg',(segundos) => {
  console.log(`enviando back depois em ${segundos} segundos`)
})

// ---------‐--

// Treino callback

// primeiro
function mostraNome(nome) {
  return nome
}

// depois : callback - 
function callSucesso() {
   alert('INSERIDO COM SUCESSO')
}

// recuperar
function useNome(mostraNome,call) {
   alert(mostraNome)
   call()
}

//mostrar

useNome('Reinaldo', callSucesso)

// -----


`,
},

getter buscar um conjunto nao tem params e sempre retorna o tipo do que procura

getter buscar especifico tem params e retorna o solicitado .

dinamico_vs_marretado:
ou vc usa uma variavel com valor marretado ou se quiser dinamico o dado troaue esta var por um parametro em funcao e use este param dentro do bloco da mesma...
seu valor sera dinamico conforme o preenchimento do utilizador nos args ao invoca-la.

exemplo:
// FUNCAO MARRETADA

function saudarMarretado() {
  const nome = 'Reinaldo'
  return `Ola ${nome}`
}
console.log(saudarMarretado())

// FUNCAO DINAMICA
function saudarDinamico(nome) {
  // SE O PARAM ENTROU PELO INPUT IMAGINE QUE ELE JA 3STA DENTRO DA FUNCAO E PODE USA-LO
  return `Ola ${nome}`
}
console.log(saudarDinamico('Leo'))

// FUNCAO DINAMICA EM ARRAY
const pessoas = ['Gustavo', 'Renata', 'Victor']


function saudarArray() {
  const saudacoes = pessoas.map(item => `Ola ${item}`)
  return saudacoes
}
console.log(saudarArray())

.........

error:
  excessoes: quando usar try catch >>  só usar onde tem throw new Error
detalhe: usa- se como um wrapper por volta pra segurar proteger de vazamento a explosao do tratamento de erro que lancou excessao com throw.
....
}

retorno de funcao: 
o_que_recebe: costuma retornar o que recebe ou um Pai do que recebeu.
ex: se nao recebe nada , provavelmente retorna void nada.

se recebe um email, provalmente vai retornar o Pai dono deste email.


=========

// APP API IMPLEMENTACAO  // =========
camadas: {
  dominio: {
    conceito: `é dominio tudo que nao depende de nada externo nem framework para funcionar na app , é o coracao da app....quem manda na app...quem quiser fazer parte tera que cumprir implementar seis contratos. `,

  exemplos: [entities, repositories_protocols , implementations/ usecases,  inmemory,  tests_domain ]
},

adapters: {
  conceito: `faz a ponte de entrada e saida de dados entre o dominio e os externos`,

  exemplos: [injections, adapters ],
  },
  
},

external: {
  database: 
  conceito: `camada que se cknecta ao banco de dados e implementa os contratos de repositios do dominio`,
  
exemplos: [orm_prisma, _connect_db, postgres_repo, ]

},

globals: {},

}

.....
1x1: conceito: acoes que o usuario pode fazer ::  no repo :: usecase >> no banco :: transacao

.............
banco_repositorio: `
vai implementar conteato para todos repo.
vai só implementar as funcoes :
exist() 
create()
`,

no_ssrvice: `
utiliza os metodos implementados no repo.

`,

...
================

// APP ESTRUTURA RELACOES //  ===========

entidades: 
entidades_ciclo: define os campos e somente o metodo de criacao .

aplication: {
possibilidades: [ repositories , usecases  ], 

repositorios: contratos de metodos de avaliacoes para poder ou nao criar as entidades

usecases: relacoes entre participante e evento | transacoes :|| temos entidades e elas performam operacoes entre si

estamos usando contrato pra respostas de funcionalidades que vem do banco ...ex: seExiste antes de criar

implementar_contrato_repo: {
com_orm_prisma: ``,

main_injecoes: {
  dos_contratados: fazer injecoes dos contratados pata dar contratado concreto para os servicos de casos de uso ...que implementaram com contratos...agora precisam de mao de obra concreta pra realizar o que foi contratato....e esta realizacao servirá o OUTPUT que é controle da api  que da resposta para o ClienteHttp.

}

====================


// PGM INSTRUCOES // ==========
?? = frase: SENAO FAZ OUTRA COISA | Se nao tiver a  propriedade, variavel dado.

throw new Error() ou ErroCustomizado: para erro ou excessao e  parar alguma acao. geralmente usado no ENTAO se falhar  da condicional

// IMPLEMENTANDO EM  POO 

no arquivo acao de participante ex: CorrecaoDesafio. 
precisara dos campos:
campoEstrangeiro_id : para importar um participante Forekjey 

createdAt : do tipo Date >> pra saber quando aconteceu |  horario/data especifica algo um evento aconteceu.

private construtor pra nao fazer filhos desta classe,

para classe que herda uma classe contrato
para usar as props da herdada usar o metodo super( PASSANDO AS PROPS QUE DESEJA DO PAI QUE HERDOU )

nesta classe estatica QUALQUER metodo statico create() vai fazer a funcao do metodo construtor fora da classe e criar novos filhos.

qualquer validacao a nivel desta entidade posso usar aqui.

....
// validacao de props : implementar com a tecnica object_values
contexto: so inves dos campos serem primitivos , sejam classe statica.
tutorial: https://youtu.be/7ItqiuM_LXU
....

entidade_desafio:
tera campos pra realizar o desafio ex: titulo, etc...
exemplo de desafio: verbo() | açao principal | correcao_prova | fazer EntregaEncomenda 

este Filho herda o contrato Pai e tambem tera props ,super, metodos herdado inclusive statico de criacao para poder criar outros desafios.

regra: antes de criar pode haver regras de negocio desre contexto para que seja criada.
....

entidade_Usuaria_Participante : tambem herda o que esta no contratoPai

entidade_submissao_do_desafio:
conceito : evento >> sera um pivô...agrupador de estrangeiros desafio e participante.
ex: submissao | pedido | matricula...

pense: PRA QUEM, PRA UM, EM UM?,

esta submissao ela acontece pra quem? >> serao os campps::
- pra um desafio_especifico_id
- pra um participante_especifico_id
- em um horario/data especifico > createdAt
.....
ACOES QUE O PARTICIPANTE PODE FAZER 
caso de uso: é o servico .
em aplication/ usecases: 

exemplos de acoes do user: 
pense: O Participante pode:: verbos() -- enviar uma submissao de desafio seria :: CreateDesafioSubmissao {} // o nome da classe é o objetivo da acao que precisa.
ela tera um unico metodo execute()  ou handle ().

este metodo tera a missao de realizar o objetivo que leva o nome da classe.

nao necessario contrato pra este servico, melhor deixar livre pra realizar sua missao.

tipagem pra este objetivo : 
pense: o que preciso pra este objetivo.

frases: QUAL É O.. &&  QUE VAO REALIZAR  ..
ex: 
- qual participante_id deste desafio
-  qual é o desafio_id

recebe estes dados desempacotados no exe ute() e cria a submissao com metodo statico de criacao que ela traz.

// costuma implementar como //
metodo_acao : [
  status(), 
]
=======
CRUD : 
crud banco & servico

crud é o ciclo de vida da entidade...todas entidades tem ciclo , senao tiver nao é uma entidade pode ser somente um metodo.

===========

casoDeUso : no modo banco sera transacoes.

===============

TESTS
testes_inmemory:
comum_unidade_testar: o servico sempre fazer test do servico pra ter certeza das regras estarem logicas e corretas com o seu objetivo do que o participsnte pode fazer...e tambem sabermos se esta tudo funcionando.

PERSISTENCIA REGISTRO
implementar contrato repo com ormBanco
preparar para registrar filho .

no_servico: usar este preparo de registro:
- criar o filho com minha Entidade
- com o filho criado entregar pro Repo registrar ja que ele esta preparado
- pronto tenho o filho registrado posso apresenta-lo pro controle ...que responde ao ClienteHttp. 

//  JS   //=====================
objetivo: descobrir algo 
exemplo_objetivo: mostrarMeuAnoDeNascimento ()
metodo: funcao
implementacao: 
1 - obter informacao para operar com meu dadoProprio = posso conseguir com metodoProprio se tiver ou com metodos deste tipo de dado que quero que tem no prototipo da linguagem.
obs:: se esta info vier statica ou marretada nao produzirá resultado dinamico...entao pra ter dado dinamico a info auxiliaar tem que vir de metodo dinamico.

2- fazer uma OPERACAO do dadoObtido com meu dadoProprio ...assim tenho uma resposta.

3- posso retornar deixar publica pra quem interessa a resposta do objetivo da funcionalidade.

exemplo:
const reinaldo = {
  nome: 'Reinaldo',
  idade: 45
}

// OBJETIVO : SABER O ANO DE NASCIMENTO DO OBJ FILHO >> REINALDO

function anoNasc(pessoa) {
  const anoAtual = new Date().getFullYear()  
  return anoAtual - pessoa.idade    
}

console.log(anoNasc(reinaldo));

=============

//  OBJETOS   //=====================
// OBJETOS LIYERAIS ..TUDO É INDIVIDUAL AO OBJETO EM QUESTAO..OUTROS NAO TERAO OS MESMOS RECURSOS.

const reinaldo = { nome: 'Reinaldo', idade: 44 }


//ACESSAR PROPS DO OBJ SEM SER POR PARAM
// PASSE A CHAVE COMO [STRING] OU PONTO
//console.log(reinaldo['nome'])

// ACESSAR PROPS OBJ POR PARAMETRO
// PASSE A CHAVE EM STRING PARA UMA VAR E USR A VAR

const chave = 'idade'
// console.log(reinaldo[chave])

// CRIAR OBJ PELO CONSTRUTOR DE OBJ
// OBS É A MESMA COISA DE CRIAR LITERAL

const pessoa2 = new Object() 
  pessoa2.nome = 'Leonardo'
  pessoa2.idade = 6

console.log(pessoa2)

// DELETAR CHAVE DE OBJ

delete reinaldo.idade
// console.log(reinaldo)

// ADICIONAR PROP AO OBJ

reinaldo.idade = 45
// console.log(reinaldo)

MAIS SOBRE OBJETOS

// Objeto sao uma colecao de variaveis e metodos

const user = {
  nome: 'Reinaldo',
  idade: 43,
  profissao: 'Programador',
  youtube: 'RzjProgramador'
}
//Como extraia variaveis do obj tradicionalmente 
// var nome = user.nome
// var idade = user.idade

// Extraindo variaveis de obj com Destruct - nao precido criar vars e atribuir do obj.prop ele ja extrai e cria 

const { nome, idade } = user

// trocar nome de variavel , passa o valor de uma variavel existente no obj para uma nova ha existir
const { youtube: novoCanal } = user
console.log( novoCanal )

// -------------
// Extrair prop. de obj aninhado
userAninhado = {
  nome: {
    primeiro: 'Valor do Primeiro',
    ultimo: 'Valor Ultimo '
  }
}

// extraindo aninhado tradicional 
// const novaVar = userAninhado.nome.primeiro
// console.log(novaVar)

// extraindo obj aninhado  -- extrair pelas chaves com { a cada camada
const { nome: { primeiro, ultimo } } = userAninhado
console.log(primeiro)
console.log(ultimo)

 Falback - criar uma prop. no obj que nao existe ainda, e se vier a existir ela é sobrescrita
// obs: a falback nao fara parte do obj ...é somente uma variavel solta

let user3 = {
  primeiro: 'primeiro'
}
let { segundo = 'segundo' } = user3

console.log( segundo )

//  ------------------------------------------

// Destruct extraindo props obj em params de 

const imprimeUser = ({ nome, foo }) => {
  return `${nome} - ${foo}`
}

const user4 = {
  nome: 'fulano2',
  foo: 'bar'
}

console.log( imprimeUser( user4 ) )

//obs: Se ja tenho um console.log dentro da funcao nao posso dar outro ao querer mostra-la na invocacao da undefined.

// ---------------------------------

// Object.keys retorna array de chaves do obj
// Object.values retorna array de valores das chave do obj

const user5 = {
  nome: 'fulano1',
  foo: 'bar'
}

console.log( Object.keys( user5 ) )
console.log( Object.values( user5 ))

// ---------------------------------
Testando ::

const obj1 = { 
   nome: 'Reinaldo',
   idade: 43,
   hobbies: ['Futebol', 'Musica', 'Estudar'],
   linguegens: [{web: ['Html','Css', 'Jquery']},
       {back: ['Node', 'Go', 'Java', 'Python'] 
  }]

}

// Acessando :

obj1.linguegens[0].web
obj1.linguegens[0].web[0]


=========================================


// ADICIONAR METODO AO OBJETO

reinaldo.getAnoNascimento = function() {
  const anoAtual = new Date()
  return `${anoAtual.getFullYear() - this.idade}`
}
console.log(reinaldo.getAnoNascimento())

Getter e Setter
Getter : como pode ser visualisado o valor da prop. ...pode ter regras ..ex: saldo vc ve mas nao pode mudar diretamente

Setter : Como mudar o estado/valor de uma prop. via metodo...ex: depositar...tem regras
é o protetor da prop. vc muda algo nela via setter()

// SOBRE O JS   //=====================

não é que haja tantas formas de se manipular objetos em js, ele é uma linguagem orientada a protótipos, e o que você vê na realidade não são várias formas de se fazer algo, são muitas funções que parecem ser semelhante devido a servir propósitos diversos, mas se você decompor essas mesmas funções lá dentro dos módulos você vai ver que são apenas um aninhamento de ifs, elses e laços de repetição, e na tentativa de dar ao javascript a mesma coisa que o jquery fazia antigamente e ainda faz, que é tentar facilitar a vida do programador foram criadas essas novas funções que vez ou outra são atualizadas, mas que por baixo dos panos continuam sendo protótipos de ifs, elses e laços. Outra coisa a se considerar também é o uso das funções  function() e o arrow function =>, um considera os objetos como global e o outro privado, por isso a preferência de acordo com as versões mais recentes é que se use  => e não apenas pela economia de escrita do código. Tem um livro que explica essas coisas de forma mais clara, quando eu lembrar do nome posto aqui.

...


// WEB COMPONENTS   //==============
tutorial: https://www.section.io/engineering-education/how-to-create-a-web-component-with-vanilla-javascript/

// TESTANDO CODIGOS :
// CONDIONAL SWITCH CASE :: PARA OPCOES LIMITADAS.

const userRequest = {
  nome: 'Reinaldo',
  cargo: 'COMUM'  // AVALIADO
}


switch(userRequest.cargo) {
  case 'COMUM': 
    console.log('é comum')
  break    
 case 'ADMIN': 
    console.log('é admin')
  break    
  case'EDITOR': 
    console.log('é editor')
  break
  default: 
    console.log('NENHUMA ESPERADA : MSG DEFAULT')
}


// =====================

// CLASSE JS E TS
// DEFININDO  FUTUROS CAMPOS DO OBJETO


class User {
  fixa = 5
  anoNascimento = 0
  
 constructor(nome, idade)  { 
   this.nome = nome
   this.idade = idade
   // PARA O FILHO TER OS CAMPOS TEM QUE USAR O THIS... 
// ATRIBUIR AS THIS.CAMPOS QUE VAI QUE OS FILHOS TERAO .. PARA RECEBER OS CAMPOS DINAMICOS VINDOS DOS PARAMS CONSTRUTOR.
   // NO TS UM RACK USANDO private campoFilho: campoDinamico JA FAZ ESTA INSERCAO DE CAMPO NO OBJETO FILHO
   // NO TS SE FOR USAR O BLOCO CONSTRUTOR É PARA CONFIGURACOES EXTRAS NOS FUTUROS CAMPOS DO FILHO

// FIXAS: É UM PONTO DE PARTIDA INICIAL >> POSSO MUDAR SEU VALOR DEFAULT ... COM RESULTADOS DE OPERACOES NO METODOS
 }

configAnoNasc() {
  const anoAtual = new Date().getYear()
  const res = anoAtual - this.idade
  this.anoNascimento = res  
}
  
}

const u1 = new User('Rei', 44)
u1.configAnoNasc()
console.log(u1)

// ====================

Modelo Contrato Webs >> 
https://github.com/rafaelrodrigoperes/modelo-contrato

// ====================
PORCENTAGEM
<script>

  valorEmprestimo = Number(prompt("Qual o valor do emprestimo ? "))

  taxaAcrescimo = 20

  emprestimoComTaxa = (valorEmprestimo * taxaAcrescimo) / 100

  emprestimoAtualizado = emprestimoComTaxa + valorEmprestimo

  alert(`O valor total do seu emprestimo ficou em R$ ${emprestimoAtualizado} `)

  parcelasDesejadas = Number(prompt(" Quer dividir entre quantas parcelas ? "))

  parceladoApagar = emprestimoAtualizado / parcelasDesejadas

  alert(`Você pagará ${parcelasDesejadas} parcelas de R$ ${parceladoApagar}`)

</script>

<script>

  // DESCONTO PORCENTAGEM BRASIL

  preco = Number(prompt("Qual o preço do produto em R$ "))
  taxa = 60

  imposto = (preco * taxa) / 100

  alert(`O imposto será de R$ ${imposto.toLocaleString('pt-BR', {minimumFractionDigits: 2})} `)


  /*
  Para saber a porcentagem de um VALOR :
  VALOR * %DESEJADA / 100
  EX: 30% DE 1000 --> 
  1000 vezes 30 dividido por 100 >> 
  "Ai vem a expressao 30 por cento alusão a 30%"
  
  */
</script>

<script>
  // DESCONTO PORCENTAGEM DOLAR

  preco = Number(prompt("Qual o preço do produto em Dolar: U$$ "))
  taxa = 60

  imposto = (preco * taxa) / 100

  alert(`O imposto será de U$$ ${imposto.toLocaleString('en-US', {minimumFractionDigits: 2})} `)


  /*
  Para saber a porcentagem de um VALOR :
  VALOR * %DESEJADA / 100
  EX: 30% DE 1000 --> 
  1000 vezes 30 dividido por 100 >> 
  "Ai vem a expressao 30 por cento alusão a 30%"
  
  */
</script>


// ====================
YOUTUBER
Microfone Lapela :
200,00 -- Sony ECM - CS3
https://m.casasbahia.com.br/microfone-ecm-cs3-sony-lapela-11033225.html?utm_medium=cpc&utm_source=googledisplay&IdSku=11033225&idLojista=37749
...........................
// ====================



HADWARE
Tamanho em mega bit 1.024
Se quero tirar 50 giga de um disco faço esses  1.024 x 50 = 51200  (51.200 GB a dispor)
..............................
BIOS  HP  DA DAY  ...
Sair tecla :: F10
Em caso de Dual boot  : 
Secure Boot -- deixar Disable -- 
UEFI/ Legacy boot  ;; Pra instalar eDualBioot deixar em UEFI
para iniciar a maquina deixar em Legacy para mostrar loaders do dual boot

.....................................................
Notebook Day : Intel(R) Core(TM)2 CPU  T5500  @1.66 GHz  1.67 GHz
Memoria : 2,00 gb  HD SATA 74 GB
Windows e poucos arquivos tao consumindo  56 gb e sobrando 18 gb

Sistema 32 bits , processador com base em x64
(  Pode instalar programas e sistema em 64 bits )
..............................................................................
Meu Notebook
Samsung = BootPEndrive :: apertando o Delete
Pendrive Botavel Ventoy no pendrive vermelho SanDisk
..............................................................................
