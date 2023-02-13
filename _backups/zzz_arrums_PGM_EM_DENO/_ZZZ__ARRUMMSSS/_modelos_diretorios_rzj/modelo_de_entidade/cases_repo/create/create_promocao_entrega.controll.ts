import { ArgsCreatePromocaoEntrega } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'
import { createPromocaoEntregaService } from '@src/entitys/promocao_entrega/cases_repo/create/service/create_promocao_entrega.service'


export const createPromocaoEntregaControll = async (promocaoEntrega: ArgsCreatePromocaoEntrega) => {
    return await createPromocaoEntregaService(promocaoEntrega)
}
