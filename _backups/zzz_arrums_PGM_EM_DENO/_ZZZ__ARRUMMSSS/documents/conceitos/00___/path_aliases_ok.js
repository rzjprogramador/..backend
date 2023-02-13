// TODO
todo: `APOS BUILD PARA DE FUNCIONAR PRINCIPALMENTE:: OS CAMINHOS MAPEADOS NO GRAPHQL `


// OK FUNCIONANDO PATH_ALIASES ::

funcionando_path_aliases: [
  'seed_prisma', 'graphql', 'core_typescript','javascript buildado na pasta dist/', 'vitest',

],

todo_ainda_nao_funciona_path_aliaes : `Sem TODO --> por enquanto tudo funcionando!`



// RESOLVIDOS :: ======================

// RESOLVENDO PATH ALIASES - CAMINHOS MAPEADOS PARA VITEST
 lib: yarn add vite-tsconfig-paths
 doc_lib: https://www.npmjs.com/package/vite-tsconfig-paths

 uso: `
 no arquivo de configuracao do vitest :: vite.config.js
 importar e colocar a funcao da lib no array de plugins ex:
 
 import tsconfigPaths from 'vite-tsconfig-paths'

 plugins: [tsconfigPaths()],


 `,


// RESOLVENDO PATH ALIASES - CAMINHOS MAPEADOS PARA GRAPHQL RESOLVERS E QUEM PRECISAR COM MODULE ALIAS
 lib: yarn add module-alias
 link: https://stackoverflow.com/questions/60067281/typescript-path-aliases-not-resolved-correctly-at-runtime/60131288#60131288

 uso: `
 no servidor ou primeiro arquivo da aplicacao ex: para o graphql adicionar no server 
 na primeira linha do arquivo a importacao de registros da lib: 

 import 'module-alias/register'
 
 no package.json adicionar o script que aponta o caminho da variavel definida no modulo :

  "_moduleAliases": {
    "@/": "./src/"
  },



 `,


// RESOLVENDO PATH ALIASES - PARA O SEED DO PRISMA COM TSCONFIG-PATHS
 lib: yarn add -D tsconfig-paths
 link: https://github.com/prisma/prisma/issues/6195

 conceito:  `SEMPRE QUE QUISER RODAR ALGUM ARQUIVO DEPOIS DO SEU RODADOR DE ARQUIVO MANDE USAR A PORTA DA LIB/REGISTRADA ex: -r  tsconfig-paths/register prisma/seed.ts  // PARA RODAR O ARQUIVO SEED`,

 uso: `
 no package.json adicionar o script que aponta o caminho da variavel definida no modulo :
 >> Para o prisma manda o compilador ts-node usar com -r , a porta da lib: tsconfig-paths/register >> Para rodar o arquivo prisma/seed.ts

   "prisma": {
    "seed": "ts-node -r tsconfig-paths/register prisma/seed.ts"
  }



 `,

// RESOLVENDO PATH ALIASES - PARA O BUILDADO JAVASCRIPT NA PASTA DIST
 lib: 'yarn add module-alias',
 link: '',

 conceito:  `SEMPRE QUE QUISER RODAR ALGUM ARQUIVO DEPOIS DO SEU RODADOR DE ARQUIVO MANDE USAR A PORTA DA LIB/REGISTRADA ex: -r  tsconfig-paths/register prisma/seed.ts  // PARA RODAR O ARQUIVO SEED`,

 uso: `
 no package.json adicionar o script que mapeiar "DE : PARA"
 DE: @src  PARA: "dist"
 // Porque na dist tera um index.js que ele vai procurar como primeiro arquivo da app que tambem esta careegado o module-alias/register apontado no TS ...ele vai procurar este primeiro arquivo buildado que é o que levanta a aplicacao.
 >>
 exemplo:

 "_moduleAliases": {
  "@src": "dist"
},

// NO TSCONFIG JA ESTA MAPEADO APRA NESTA VARIAVEL IR PARA A SRC
"rootDir": "src",
    "baseUrl": "src",
    "paths": {
      "@src/*": ["*"]
    },

 `,

