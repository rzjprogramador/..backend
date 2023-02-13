import { ArgsCreatePromocaoEntrega } from '@src/core/promocao_entrega/entity/promocao_entrega.contract'
import { createPromocaoEntregaService } from '@src/core/promocao_entrega/controller/create/service/create_promocao_entrega.service'


export const createPromocaoEntregaController = async (promocaoEntrega: ArgsCreatePromocaoEntrega) => {
    return await createPromocaoEntregaService(promocaoEntrega)
}
