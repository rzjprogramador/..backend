// import { IClienteProps } from '@src/domain/entities/participante/cliente/contracts/cliente_dto'
// import { IClienteRepository } from '@src/domain/entities/participante/cliente/contracts/cliente_repository'
// import { Cliente } from '@src/domain/entities/participante/cliente/entity/cliente'
// import { MSG_EXCEPTION } from '@src/globals/message/messages'

// export class InMemoryClienteRepository implements IClienteRepository {
//   public collectionClientes: Cliente[] = []

//   async findUnique(id: any) {
//     const clienteUnique = await this.collectionClientes.findIndex((i) => i.id === id)
//     return clienteUnique
//   }

//   async exists(id: any) {
//     const exist = await this.collectionClientes.some((e) => e.id === id)
//     if (exist) {
//       return !!exist
//     }
//   }

//   async create(props: IClienteProps, id?: any) {
//     const exist = await this.exists(id)
//     if (exist) {
//       throw new Error(MSG_EXCEPTION.INCORRECT)
//     }

//     const cliente = await Cliente.create(props)
//     return cliente
//   }
// }
