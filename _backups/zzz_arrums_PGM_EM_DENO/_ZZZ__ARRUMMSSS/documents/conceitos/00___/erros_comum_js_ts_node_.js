{
  tecnologia: 'node_js',
  local_erro: `...`,
  tipo_erro: `Require stack`,
  local_uso: `...`,
  erro: `Error: Cannot find module '@src/orm/prisma/find-all_user_repository_prisma'
  Require stack:
  - /home/rzj/_git/masters/master_graphql_FN/src/core/modules/user/usecases/implementations_repo/find-all_user_service.ts
  - /home/rzj/_git/masters/master_graphql_FN/src/graphql/modules/user/handlers/get_users.ts
  - /home/rzj/_git/masters/master_graphql_FN/src/graphql/modules/user/User.entity.resolvers.ts
  - /home/rzj/_git/masters/master_graphql_FN/src/graphql/_app/centralizers/resolvers.ts
  `,
  traducao: `Não encontra o modulo`
  causa: 'erro na exportacao',
  solucao: `
    ABAIXO DE " Require stack: " // ESTA APONTANDO QUAIS OS ARQUIVOS QUE ESTA REQUERENDO FALTANDO IMPORTACAO CORRETA -- VÁ ATÉ ESTES ARQUIVOS E ARRUME OS ERROS DE IMPORTACAO REQUERIDOS.
    - /ENDERECO/ARQUIVO.ts  // VÁ ATE ELE E ARRUME IMPORTACAO
    - /ENDERECO/ARQUIVO.ts  // VÁ ATE ELE E ARRUME IMPORTACAO
  `
},

{
  tecnologia: 'graphql',
  local_erro: `arquivo.ts ou .js`,
  tipo_erro: `Erro de sintaxe`,
  local_uso: `variaveis e objetos`,
  erro: `No value exists in scope for the shorthand property 'prop'. Either declare one or provide an initializer`,
  traducao: `Não existe nenhum valor no escopo da propriedade abreviada 'prop'. Declare um ou forneça um inicializador`
  causa: 'nao inicializada a atribuicao - por falta de sinal de atribuicao.',
  solucao: `use o sinal para atribuir >> ":" para obj ou "=" para variavel`
},

erros_diversos: {
  debugando_nao_ver_nada_no_console: `erro: net::ERR_FILE_NOT_FOUND -- NAO ESTA DANDO CONSOLE.LOG --NAO VAI CONSEGUIR VER NADA NO CONSOLE >>> DE CONSOLE.LOG NO QUE DESEJA VER.`,
}



/* MODELO
{
  tecnologia: 'graphql',
  local_erro: ``,
   tipo_erro: `Erro de sintaxe`,
  local_uso: ``,
  erro: ``,
  traducao: ``,
  causa: ``,
  solucao: ``
},


*/