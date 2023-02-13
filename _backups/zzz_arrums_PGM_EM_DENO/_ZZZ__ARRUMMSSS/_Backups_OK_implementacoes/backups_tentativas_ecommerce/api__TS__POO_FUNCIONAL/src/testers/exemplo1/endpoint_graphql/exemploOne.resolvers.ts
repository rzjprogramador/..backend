import { exemploOneInicio } from "@src/testers/exemplo1/endpoint_graphql/handlers/exemplo1"
import { createExemploOne } from "@src/testers/exemplo1/endpoint_graphql/handlers/create_exemplo_one"

type CreateExemploOneInput = {
  propOne: string
  propTwo: string
}

export default {
  Query: {
    exemploOneInicio,
  },

  Mutation: {
    createExemploOne: async (_: any, { propOne, propTwo }: CreateExemploOneInput) => {
      console.log({ propOne, propTwo })

      return await { propOne, propTwo }
    },

  }
}
