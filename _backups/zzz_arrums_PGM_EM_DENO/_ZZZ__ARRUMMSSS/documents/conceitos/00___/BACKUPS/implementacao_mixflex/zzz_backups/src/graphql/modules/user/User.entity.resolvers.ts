import { helloUser } from './handlers/hello_user'
import { getUsers } from './handlers/get_users'
import { createUser } from './handlers/create_user'
import { id, createdAt, tipoUser } from './triviais/user_triviais'

export const userResolvers = {
  Query: {
    helloUser,
    getUsers,
  },

  Mutation: {
    createUser,
  },

  User: {
    id,
    createdAt,
    tipoUser,
  },
}

// OBS: IMPORTAR O OBJETO DE RESOLVERS NO CENTRALIZADOR DE RESOLVERS
