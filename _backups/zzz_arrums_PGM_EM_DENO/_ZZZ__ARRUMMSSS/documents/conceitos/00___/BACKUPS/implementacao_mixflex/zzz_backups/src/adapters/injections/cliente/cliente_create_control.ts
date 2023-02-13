import { ClientePostgresPrismaRepo } from '@src/external/database/orm_prisma/implementations/postgres_repositories/cliente/cliente_postgres_prima_repository'
import { CreateClienteService } from '@src/domain/entities/participante/cliente/service/create_cliente_service'

export const clienteCreateControll = () => {
  const clienteRepository = new ClientePostgresPrismaRepo()
  const createCliente = new CreateClienteService(clienteRepository)
  return createCliente
}
