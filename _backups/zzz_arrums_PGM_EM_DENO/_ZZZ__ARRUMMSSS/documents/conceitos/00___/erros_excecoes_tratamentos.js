// EXPLICACAO ERROS EXCESSOES
{
  objeto_de_error: "é a variavel error que vem padrao como aprametro da funcao catch e captura o erro";

  variaveis_do_objeto_de_parametro_de_error: [
    "name: que traz o nome do erro vindo do js",
    "e message: que traz a mensagem do erro vinda do js",
  ];

  cenarios_de_erros: [
    "ReferenceError: Erro de Referencia :: Variavel nao existe ou nao tem valor",

    "SintaxeError: Erro de Sintaxe :: Erro de codigo Sintaxe algum comando errado",

    "TypeError:  Erro de Tipo :: Esta tentando fazendo algo que nao é compativel com o tipo da variavel, ex: transformar numero em maiuscula isto só é possivel com string e nao com numero",

    "ERRO_CUSTOMIZADO : Criar uma funcao que auto retornara um objeto, nela acessamos via this as variaveis do objeto de erro do js... e sobreescrever / assumir o valor das variaveis padroes:: name & menssage .. e redefini-las com valores do nosso gosto ou precisao.",
  ];

}

// ERROS - EXCESSOES
erro_de_referencia: {
  tipo: `classe Js`,
  nome: 'ReferenceError',
  significado: 'Erro de Referencia',
  conceito: ``,
  causa: 'a variavel usada nao tem referencia nao foi declarada noa existe',
  uso: `...`,
  exemplo: `
  // exemplo: ReferenceError :: com nome e mensagem do erro vindas por padrao do 
  
  let enviadaClienteSemValor;
  try {
    enviadaClienteSemValor + naoExiste;
  } catch (error) {
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
  }
  `,
},
//
erro_de_sintaxe: {
  tipo: `classe Js`,
  nome: 'SintaxeError',
    significado: 'Erro de Sintaxe',
    conceito: ``,
   causa: 'algum erro na escrita do codigo',
   uso: `...`,

   exemplo: `
   // exemplo: SintaxeError com nome e mensagem do erro vindas por padrao do js

 let enviadaClienteSemValor;

  try {
    eval(
      'alert("Vai dar Erro de sintaxe vou errar algo no comando- esquecendo fechar virgula da string)'
    );
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  `,  
}
//

erro_de_tipo: {
  tipo: `classe Js`,
  nome: 'TypeError',
  significado: 'Erro de Tipo',
  conceito: ``,
  causa: 'Esta tentando fazendo algo que nao é compativel com o tipo da variavel',
  uso: `...`,

  exemplo: `
  // exemplo: com nome e mensagem do erro vindas por padrao do js
  try {
    //
    let enviadaClient = 2;
    enviadaClient.toUpperCase(); // Vai dar erro de Tipo - o tipo numero nao pode tentar transformar em maiuscula
    //
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  `, 
},
//

erro_excessao_customizada: {

  tipo: `funcao que herda a classe Js`,
  nome: 'Defino o nome ex: ErrorCustmizado()',
  significado: 'Erro Customizado',
  conceito: `
  Mais para lancar excessoes, esperamos algo e veio outro entao avisamos que nao enviaram como esta se esperando esta solicitacao. ex: to esperando numeros positivos veio negativo

  criando_funcao_objeto: 
  CRIANDO FUNCAO DE ERRO_CUSTOMIZADO ::
  
   - COM .THIS ACESSAMENOS O OBJETO DO JS PARA SOBREESCREVER SUAS VARIAVEIS
    REDEFININDO AN FUNCAO: 
    >> A VARIAVEL MESSAGE DO JS ERROR PARAM >> VAI SER A MESSAGE QUE VAMOS RECEBER POR PARAM
    >> A VARIAVEL NAME DO JS ERROR >>  VAI SER O NOME DA FUNCAO OU CLASSE EM STRING.
    `,
  

  causa: '...',

  uso: `
  - apos receber e capturar alguma solicitacao do Client
  - fazer avaliacao conforme a regra que voce quer pra lancar um erro excessao
  - se cair nessa avaliacao devolva ao inves d ereturn um throw new ErroCustomizado('Aqui a mensagem de aviso que aparecerá no console do erro')

  obs: ao inves de return use throw , e ao inves de new Error use new ErroQuecustomizou
  `,

  exemplo: `

  function ErroCustomizado(message) {
    this.message = message;
    this.name = "ErroCustomizado";
  }

  // USANDO A FUNCAO DE ERRO_CUSTOMIZADO:
  try {
    //
    let enviadaClient2 = -10; // ENVIADO PELO CLIENTE

    if (enviadaClient2 < 0) {
      throw new ErroCustomizado("O numero tem que ser positivo!");
    }

    //
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  
  `, 

}
//
