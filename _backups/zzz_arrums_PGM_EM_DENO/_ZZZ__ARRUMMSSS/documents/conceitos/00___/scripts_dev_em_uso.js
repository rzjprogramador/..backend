// SCRIPTS EM USO

{
  apontar_para_server_TS_graphql: {
    script: `"dev": "ts-node-dev --transpile-only --respawn --ignore-watch node_modules -r tsconfig-paths/register src/graphql/_app/servers/graphql_server/index.ts",`,
  },

  apontar_para_server_JS_graphql: {
    script: `"start:js": "npx nodemon dist/graphql/_app/servers/graphql_server/index.js",`,
  },

}

/*
// ESTADO ATUAL

"scripts": {
    "dev": "ts-node-dev --transpile-only --respawn --ignore-watch node_modules -r tsconfig-paths/register src/graphql/_app/servers/graphql_server/index.ts",

    "start:js": "npx nodemon dist/graphql/_app/servers/graphql_server/index.js",

    "start": "yarn build && yarn start:js",

    "nao": "npx dotenv-cli -e .env -- npx prisma migrate reset --force --skip-generate --preview-feature",

    "build": "rimraf dist && tsc -p tsconfig-build.json",

    "vitest": "vitest",

    "pretest": "npx dotenv-cli -e .env.test -- npx prisma migrate reset --force --skip-generate --preview-feature",
    
    "linter": "eslint"
  },

*/