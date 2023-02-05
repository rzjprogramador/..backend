import { gql } from 'apollo-server-express'


const exemplo1TypeDefs = gql`
  type Exemplo1 {
    prop1: String
    prop2: String
  }

  input CreateExemplo1Input {
    prop1: String
    prop2: String
  }

  type Query {
  exemplo1Inicio: String
  }

type Mutation {
  createExemplo1(createExemplo1Input: CreateExemplo1Input): Exemplo1
}
`

export default exemplo1TypeDefs


