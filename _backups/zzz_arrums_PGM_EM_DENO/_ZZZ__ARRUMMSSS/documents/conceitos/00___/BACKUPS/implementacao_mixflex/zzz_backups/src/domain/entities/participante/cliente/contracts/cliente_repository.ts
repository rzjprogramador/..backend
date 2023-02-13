import { Cliente } from '@src/domain/entities/participante/cliente/entity/cliente'

export interface IClienteRepository {
  create(cliente: Cliente): Promise<Cliente>
  exists(email: string): Promise<boolean>
}
