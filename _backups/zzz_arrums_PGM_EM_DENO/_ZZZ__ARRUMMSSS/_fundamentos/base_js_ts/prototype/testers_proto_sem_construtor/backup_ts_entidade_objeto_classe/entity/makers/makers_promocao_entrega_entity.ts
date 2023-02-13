import { PromocaoEntregaEntity } from '@src/entitys/promocao_entrega/entity/promocao_entrega.entity'
import { ArgsCreatePromocaoEntrega } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'

// const makeByEntityPromocaoEntrega = {
//     instanceEntity: new PromocaoEntregaEntity()
// }

export const useMakeByEntityPromocaoEntrega = (promocao: ArgsCreatePromocaoEntrega) => {
    return new PromocaoEntregaEntity(promocao)
}
