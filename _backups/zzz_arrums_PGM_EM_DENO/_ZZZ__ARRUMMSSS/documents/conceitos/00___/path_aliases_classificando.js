{
  tecnologia: `Typescript`,
  contexto: `caminhos mapeados, path mapping`,
  instalar_dependencies: `module-alias `,
  instalar_DevDependencies: `tsconfig-paths @types/module-alias `,
  adicionar_package_json: `
  "_moduleAliases": {
    "@": "dist"
  },
  `,
  adicionar_primeiro_arquivo_que_roda_app: `import 'module-alias/register'  `,
  adicionar_em_scripts: `para usar a porta antes de ler o endereco do server :: -r tsconfig-paths/register`,
  adicionar_tsconfig: `
  "rootDir": ".",
      "baseUrl": "./src",
      "paths": {
          "@/*": [
              "*"
          ]
      },
      `,
  xxx: ``,
  xxx: ``,
}


// ARRUMAR

// FALTA_RESOLVERS_CAMINHOS_MAPEADOS
// - na api rest : nao esta encontrando so path alias caminhos mapeados.

// - prisma seed arquivos noa esta encontrando caminhos mapeados path aliases

instalar_caminhos_mapeados: [
  { 
    nome: `module-alias`, 
    instalar_como: `dependencies`, 
    instalacao: `yarn add module-alias`, 
    detalhes: `adicionar ao primeiro arquivo que sobe a app a importacao: 
  import 'module-alias/register'
  e no gerenciador de pacotes o destino do build:
  "_moduleAliases": {
    "@": "dist"
  }

  `, 
  
  objetivo: `Vai resolver os caminhos mapeados na compilacao do Ts e no Js`
   },

  { 
    nome: `tsconfig-paths`, 
  instalar_como: `devDependencies`, 
  instalacao: `yarn add -D tsconfig-paths`, 
  detalhes: `adicionar logo depois do tsnd para o tsnd antes de executar o spript usar esta port -r do pacote...exemplo: tsnd -r tsconfig-paths/register --restante script`,
   objetivo: `Para o ts-node-dev entender os caminhos mapeados` },

  { 
    nome: ``, 
  instalar_como: ``, 
  instalacao: ``, 
  detalhes: ``, 
  objetivo: ``
   },

]

caminhos_mapeados_ts: {
  definir_a_url_base: {
    definir_como: `src`,
    conceito: `as @variaveis definidas abaixo vai comecar com o uqe foi definido aqui na base url`,
    exemplo: `se eu definir uma @variavel com o valor infra/* na verdade ela sera interpretada como src/infra/*`,
  }

  denifir_as_variaveis_de_url_no_obj_path: {
    variavel: `'Sempre que encontrar esta '@variavel/* 'com tudo que tiver vier depois': `,
  }

  todo_resolver_nao_entende_ainda_caminhos_mapeados: [
    'resolver em graphql',
    'resolver em prisma',
    'resolver em prisma/seed',
  ]
}

/*

==================
USAR SOLUCAO CAMINHSO MAPEADOS :
https://stackoverflow.com/questions/50679031/tsconfig-paths-not-working


Crie um arquivo referenciando todos os aliases

// src/paths.ts

import 'module-alias/register';
import { addAliases } from 'module-alias';

addAliases({
  '@common': `${__dirname}/common`,
  '@services': `${__dirname}/services`,
});
E importe-o em seu script de entrada como primeira importação

// src/server.ts

import './paths';
import express, { Request, Response, NextFunction } from 'express';
...

const app = express();
...
app.listen(port, onListen(port));


================

EXEMPLOS CODIGOS - SANDOBOX - USANDO CAMINHSO MAPEADOS >
https://codesandbox.io/examples/package/tsconfig-paths

* O tsconfig-pathsprocura tsconfig.jsonem process.cwd, e neste caso é seu diretório raiz, e não packages/backend/.
Em vez de especificar --project, tente especificá-lo usando variáveis ​​de ambiente: TS_NODE_PROJECT=packages/backend/tsconfig.json(consulte https://www.npmjs.com/package/tsconfig-paths#with-ts-node ).
*/