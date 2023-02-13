# INSTALACOES GRAPHQL

# PROJETO APOLLO SERVER EXPRESS USANDO O MESMO LISTER

### INSTALACOES:

```npm i graphql apollo-server-express```
```npm i -D @types/graphql```

[exemplo_mango_video: aos 1:55:00 ](https://www.youtube.com/watch?v=P0gpCCA8ZPs&t=6946s)
[exemplo_mango_github: ](https://github.com/rmanguinho/clean-ranking-loader)
[doc_apollo_server_express: ](https://www.apollographql.com/docs/apollo-server/v2/api/apollo-server/#applymiddleware)

# MIDDLEWARE APOLLO SERVER
> Cria o middle, instancia o ApolloServer, starta o apollo instanciado, manda aplicar middleware no meu app express
```
import typeDefs from '@src/main/graphql/schema_roots/type_defs'
import resolvers from '@src/main/graphql/schema_roots/resolvers'

import { ApolloServer } from 'apollo-server-express'
import { Express } from 'express'

export const setupApolloServer = async (app: Express): Promise<void> => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })
  await server.start()
  server.applyMiddleware({ app })
}

```

---

# NO APP EXPRESS
> no app express usa o setup do server apollo
```setupApolloServer(app)```

# NO SCHEMA ROOTS : QUE SAO OS AGRUPADORES DE TYPEDEFS E RESOLVERS
> exportacoes: 
: exportar como default os arrays:
: exportar como default cada modulo de typeDefs e Resolvers :
> 
```
// TANTO NO TYPE DEFS COMO NO RESOLVERS:

export default [
    exemplo1,
]
```

---

# 