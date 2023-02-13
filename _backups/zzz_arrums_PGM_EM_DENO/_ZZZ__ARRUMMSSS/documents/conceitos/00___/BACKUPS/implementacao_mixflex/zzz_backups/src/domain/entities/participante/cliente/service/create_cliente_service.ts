import { IClienteRepository } from '@src/domain/entities/participante/cliente/contracts/cliente_repository'
import { Cliente } from '@src/domain/entities/participante/cliente/entity/cliente'
import { IClienteProps } from '@src/domain/entities/participante/cliente/contracts/cliente_dto'
import { MSG_EXCEPTION } from '@src/globals/message/messages'

export class CreateClienteService {
  constructor(private clientesRepository: IClienteRepository) {}

  async execute({ nome, email, identificador }: IClienteProps) {
    const userAlreadyExists = await this.clientesRepository.exists(email)

    if (userAlreadyExists) {
      throw new Error(MSG_EXCEPTION.INCORRECT)
    }

    const userCreate = Cliente.create({ nome, email, identificador })
    const user = await this.clientesRepository.create(userCreate)
    return user
  }
}
