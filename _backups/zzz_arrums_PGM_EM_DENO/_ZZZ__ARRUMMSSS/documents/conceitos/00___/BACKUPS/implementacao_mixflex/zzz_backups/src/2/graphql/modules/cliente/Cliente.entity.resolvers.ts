import { getClientes } from './handlers/get_clientes'
import { createCliente } from './handlers/create_cliente'
import { id, createdAt } from './triviais/cliente_triviais'

export const clienteResolvers = {
  Query: {
    helloCliente: () => `alo Mundo..by HelloUser`,
    // getClientes,
  },

  Mutation: {
    // createCliente,
  },

  Cliente: {
    // id,
    // createdAt,
  },
}

// OBS: IMPORTAR O OBJETO DE RESOLVERS NO CENTRALIZADOR DE RESOLVERS
