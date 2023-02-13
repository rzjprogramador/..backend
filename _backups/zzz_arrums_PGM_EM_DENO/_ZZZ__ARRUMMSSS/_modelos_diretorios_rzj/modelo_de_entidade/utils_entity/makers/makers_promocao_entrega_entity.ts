import { PromocaoEntregaEntity } from '@src/entitys/promocao_entrega/entity/promocao_entrega.entity'
import { ArgsCreatePromocaoEntrega } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'

export const makeInstancePromocaoEntrega = (promocao: ArgsCreatePromocaoEntrega) => {
    return new (PromocaoEntregaEntity as any)(promocao)
}
