import { ArgsCreatePromocaoEntrega } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'
import { repositoryPromocaoEntregaInUse } from '@src/entitys/promocao_entrega/_data/repositories/manager_repositories/manager_repository_in_use_promocao_entrega'
import { useMakeByEntityPromocaoEntrega } from '@src/entitys/promocao_entrega/entity/makers/makers_promocao_entrega_entity'


export const createPromocaoEntregaService = async (promocao: ArgsCreatePromocaoEntrega) => {
    const createdByEntity = await useMakeByEntityPromocaoEntrega(promocao)
    return await repositoryPromocaoEntregaInUse.inUse.create(createdByEntity)
}

