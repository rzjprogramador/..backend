import { IClienteRepository } from '@src/domain/entities/participante/cliente/contracts/cliente_repository'
import { EntregaRepository } from '@src/domain/entities/evento/entrega/contracts/EntregaRepository'
import { Pedido } from '@src/domain/entities/evento_submissao/entity/pedido'
import { MSG_EXCEPTION } from '@src/globals/message/messages'

type CreateEntregaRequest = {
  // EVENTO: O QUE PRECISO PARA CRIAR ESTE OBJETIVO:
  clienteId: string
  produtoId: string
}

export class CreateEntrega {
  constructor(
    private readonly clientesRepository: IClienteRepository,
    private readonly entregasRepository: EntregaRepository,
  ) {}

  async execute({ clienteId, produtoId }: CreateEntregaRequest) {
    const clienteExist = await this.clientesRepository.exists(clienteId)
    if (!clienteExist) throw new Error(MSG_EXCEPTION.INCORRECT)

    const entregaExist = await this.entregasRepository.findById(produtoId)
    if (!entregaExist) throw new Error(MSG_EXCEPTION.INCORRECT)

    const pedido = await Pedido.create({
      // SUBMISSAO É O EVENTO PEDIDO :: QUE UNE CLIENTE E ENTREGA
      clienteId,
      produtoId,
    })
    return pedido
  }
}
