{
  nome: `empacotamento de dados via parametros`,
  conceito: `Melhor empacotar os dados enviados via parametros e dentro da funcionalidade desempacotar se for manipular :: OBS: MELHOR DESEMPACOTAR SOMENTE NO SERVICO QUE É UM MANIPULADOR
  ...beneficio: Se for adicionar mais campos muda só no Contrato Request do Dado.`,
  
  exemplo: `
  // GRAPHQL SEM INPUT AINDA NO TYPEDEFS
  (_: any, data: UserRequest) => {
    const { nome, email, password, identificacao } = data

  `,
}

{
  empacotamento_input: `empacotamento input no graphql`,
  conceito: `
  QUANDO SE USA UM INPUT ELE É UM OBJETO..ENTAO PARA USA-LO SE EXTRAI ESTE OBJETO
  - O args é uma variavel no 2º param dos resolvers :: 
  - Agora um input é um  objeto passado como valor da variavel args no 2º param dos resolvers :: para usa-lo extraia com mais um nivel de chaves. 
  
  `,
  importante: `importante usar a variavel de empacotamento como data ..o graphql espera o "data".`
  no_typeDefs: `
    // 1º - NO TYPEDEFS : CRIA O input Nome { ..campos ...}

    // 2º - NO TYPEDEFS : EMPACOTA OS CAMPOS COMO PARAMETRO data NA FUNCAO DE MUTACAO 
    ex: createUser(data: CreateUserInput): User!
    # AO INVES DE >>>> createUser(nome: String, email: String, password: String, identificacao: String): User!

  `,
  no_resolvers: `
  // 1º - NO RESOLVERS : CRIA UM TYPE UTIL COM A variavel data dentro do obj sendo do tipo Request para amarrar os contratos...e poder extrair o data dentro da funcao
  exemplo: type CreateUserInputResolve = { data: UserRequest }

  // 2º - NO RESOLVERS : USA O 2º PARAM QUE É O ARGS PASSANDO ENTRE CHAVES o { data }
  INDICANDO QUE PARA PRIMITIVOS SERIA O ARGS QUE IRIA EXTRAIR OS PRIMITIVOS AGORA É UM OBJ INPUT REPRESENTADO PELA VARIAVEL O OBJ data entao entre chaves extrai ela { data }

  // 3º - NO RESOLVERS : EXTRAI DENTRO DA FUNCIONALIDADE AS VARIAVEIS QUE ESTAO DENTRO DO OBJETO INPUT DATA SE FOR MANIPULAR ALGUMAS DELA. // OBS: MELHOR DESEMPACOTAR SOMENTE NO SERVICO QUE É UM MANIPULADOR

  `,
  no_uso_cliente_playground: `
  // DESEMPACOTA SOMENTE NOS PARAMETROS DA FUNCAO DE MUTACAO
  exemplo: 
  createUser(
    data: {
     nome: $nome, email: $email, password: $password, identificacao: $identificacao
   }
 ) 
  `,
}