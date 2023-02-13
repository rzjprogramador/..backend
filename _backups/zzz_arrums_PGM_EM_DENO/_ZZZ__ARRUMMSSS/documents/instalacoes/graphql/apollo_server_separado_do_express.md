# CONFIGURACOES GRAPHQL COM APOLLO SERVER : SERVER SEPARADO DO EXPRESS

# PROJETO COM APOLLO SERVER SEM PLAYGROUND SANDBOX

> inserir manualmente typeDefs e resolvers
> DEPENDENCIAS
```npm i graphql apollo-server```
```npm i -D @types/graphql```

configurar server_graphql com apollo :

```
import typeDefs from '@src/main/graphql/type_defs/type_defs'
import resolvers from '@src/main/graphql/resolvers/resolvers'

import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

server.listen(5051).then(({ url }) => {
    console.log(`SERVER GRAPHQL >> ${url}`)
})

// TEM QUE CRIAR UM SCRIPT NO PACKAGE.JSON PARA SUBIR SERVIDOR SEPARADO APRA GQL:
"graphql": "tsnd -r tsconfig-paths/register --respawn --transpile-only --ignore-watch node_modules --no-notify src/main/graphql/server/server_graphql.ts"

```

---
