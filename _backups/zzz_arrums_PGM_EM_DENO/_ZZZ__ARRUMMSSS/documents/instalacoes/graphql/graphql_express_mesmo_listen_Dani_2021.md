# INSTALACOES GRAPHQL

# PROJETO EXPRESS E GRAPHQL JUNTOS USANDO O MESMO LISTER

### INSTALACOES:

> obs: o graphql,express-graphql e o graphql-tools >> tem que ser versoes especificas senao da conflito erro.
> 
```npm i graphql@15.5.1 express-graphql@0.12.0 graphql-tools@7.0.5```


[exemplo: ](https://github.com/rocketseat-content/youtube_graphql_express/blob/master/package.json)


---

# CONFIGURACOES

### NO APP TS
: mandar o app express usar o middle graphql e definir a url
```app.use("/graphql", serverGraphqlMiddle)```

---
### ROOT RESOLVERS
> nos roots de rotas : buscar os arrays : 
> resolvers root : (arrays de resolvers)
```
import exemplo1 from '@src/entitys/exemplo1/endpoint_graphql/exemplo1.resolvers'

export default [
    exemplo1,
]
```

---

### ROOT TYPEDEFS
> typeDefs root : (arrays de typeDefs)
```
import { loadFilesSync, mergeTypeDefs } from 'graphql-tools'
import path from 'path'

const mergePath = loadFilesSync(path.join(__dirname, '../../../**/endpoint_graphql/*.gql'))

const typeDefs = mergeTypeDefs(mergePath)

export default typeDefs
```
---

### SCHEMA UNIAO DOS ROOTS : TYPEDEFS E RESOLVERS

> no server_graphql :: defnir o schema > e chamar os arraysRoots de typeDefs e resolvers.
```
import typeDefs from '@src/main/graphql/type_defs/type_defs'
import resolvers from '@src/main/graphql/resolvers/resolvers'

import { graphqlHTTP } from "express-graphql"
import { makeExecutableSchema } from "graphql-tools"

const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
})

export const serverGraphqlMiddle = (graphqlHTTP({
      schema,
      graphiql: true,
    })
)
```
---

### USABILIDADE
> em cada modulo:
Os modulos typeDefs terao a extensao .gql ou .graphql
> importacoes entre si:
podem fazer importacoes entre si de type defs com ```# import Tipo from 'caminho'```
