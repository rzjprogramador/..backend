import { ArgsCreatePromocaoEntrega } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'
import { createPromocaoEntregaService } from '@src/entitys/promocao_entrega/cases/create/create_promocao_entrega.service'


export const createPromocaoEntrega = async (promocao: ArgsCreatePromocaoEntrega) => {
    return await createPromocaoEntregaService(promocao)
}
