import { RulePromocaoEntregaEntity } from '@src/core/promocao_entrega/entity/promocao_entrega.entity'
import { ArgsCreatePromocaoEntrega } from '@src/core/promocao_entrega/entity/promocao_entrega.contract'

export const makeInstancePromocaoEntrega = (promocao: ArgsCreatePromocaoEntrega) => {
    return new (RulePromocaoEntregaEntity as any)(promocao)
}
