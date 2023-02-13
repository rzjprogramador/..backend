import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'
import { ClienteRequest, IClienteCreate } from '@src/domain/entities/participante/cliente/contracts/cliente_dto'
import { IClienteRepository } from '@src/domain/entities/participante/cliente/contracts/cliente_repository'
import { Cliente } from '../../../../../../domain/entities/participante/cliente/entity/cliente'

export class ClientePostgresPrismaRepo implements IClienteRepository {
  async exists(email: any): Promise<boolean> {
    const clienteExist = await prisma.cliente.findUnique({
      where: email,
    })
    return !!clienteExist
  }

  async findUnique(email: any) {
    const unique = await prisma.cliente.findUnique({
      where: email,
    })
    return unique
  }

  async create(props: IClienteCreate): Promise<IClienteCreate> {
    //   const {nome, email, identificador } = props
    // const newCliente = { ...props, id: props. }

    const cliente = await prisma.cliente.create({
      data: props,
    })
    return cliente
  }
}
