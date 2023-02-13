import { createClienteInjectControll } from '@src/connections/injections/cliente/create_cliente_inject_controll'
import { Cliente } from '@src/domain/entities/participante/cliente/entity/cliente'

export const createCliente = async (_: any, args: Cliente) => {
  const clienteSave = await createClienteInjectControll().execute(args)
  console.log(clienteSave)

  return clienteSave
}
