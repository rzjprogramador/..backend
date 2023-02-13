empacotamento_dados_recebidos = {
  contexto: `input`,
  conceito: `empacotamento dados recebidos com input é como um DTO`,
  casoDeUso: `usa-se em Mutation para encapsular dados que serao recebidos`,
  no_typeDefs: `usar a clausula input NomeAcaoInput { campos e tipos a serem usados }`,
  no_typeDefs_em_mutation: `usar a clausula input NomeAcaoInput { campos e tipos a serem usados }`,
  no_resolver: `no 2º argumento args dentro dele terá o input criado e usado na mutacao, entao dentro de args extrair o input usado na mutacao ex: { data }`,
  no_client: `desempacotar o input aonde enviara os campos variaveis dos dados para o server.`,
}