/* eslint-disable no-unused-vars */

const install_graphQl = {
  npm_inicio: `npm init -y`,

  dependencies: `graphql apollo-server`,

  devDependencies: `@types/graphql`

  servidor_dependencia: `apollo-server`

}

{
  contexto: `Mergiar todos schemas graphql`
  ferramenta: `graphql_tools_merge_schemas `
  instalacoes: `yarn add -D @graphql-tools/load @graphql-tools/graphql-file-loader`,
  doc: `https://www.graphql-tools.com/docs/schema-loading`,
  tutorial: `https://www.youtube.com/watch?v=I79_b7K0rIk`,
  exemplo: `
  // no CENTRALIZADOR QUE VAI ENTREGAR OS TYPEDEFS APRA O SERVIDOR APOLLO
  import { loadSchemaSync } from '@graphql-tools/load'
  import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'


  export const typeDefs = loadSchemaSync("./**/*.graphql", {
    loaders: [new GraphQLFileLoader()]
  })

  // IMPORTANTE ESTA CHAMADA DE ONDE ESTAO OS ARQUIVOS .GRAPHQL ESTA ASSIM : ./DESTE LUGAR/**SOBE 1 PASTA/ A PROXIMA TODOS QUE TIVER A EXTENSAO *.graphql
  PASSA UM OBJ DE CONFIGURACAO APRA FAZER LOADERCOM A O OBJ DA CLASSE GraphQLFileLoader()

  // EM CADA ARQUIVO PODE EXPORTAR SUAS DEPENDENCIAS COM #import Entidade from 'caminho/arquivo.graphql'

  // IMPORTANTE QUE CADA PASTA DO MODULO ESTEJA COM O NOME DO ARQUIVO  ACAO.GRAPHQL 
  
  `
}

{
  contexto: `Mergiar resolvers`
  ferramenta: ` `
  instalacoes: `yarn add -D @graphql-tools/merge @graphql-tools/load-files`,
  doc: ['https://www.graphql-tools.com/docs/schema-merging',  ],
  tutorial: ['https://www.graphql-tools.com/docs/schema-merging', 'https://www.youtube.com/watch?v=6Jd5nKQrqcU', ]
  exemplo: `
  
  `
}
