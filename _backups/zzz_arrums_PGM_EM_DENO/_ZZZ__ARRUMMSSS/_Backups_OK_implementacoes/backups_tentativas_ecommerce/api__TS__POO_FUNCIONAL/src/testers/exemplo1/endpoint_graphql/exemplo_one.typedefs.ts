import { gql } from "apollo-server-express"

const exemploOneTypeDefs = gql`

  type ExemploOne {
    propOne: String
    propTwo: String
  }

  input CreateExemploOneInput {
    propOne: String
    propTwo: String
  }

  type Query {
    exemploOneInicio: String
  }

  type Mutation {
    createExemploOne(args: CreateExemploOneInput): ExemploOne
  }
`

export default exemploOneTypeDefs
