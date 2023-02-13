import { ArgsCreatePromocaoEntrega } from '@src/core/promocao_entrega/entity/promocao_entrega.contract'
import { repositoryPromocaoEntregaInUse } from '@src/core/promocao_entrega/repositories/manager_repositories/manager_repository_in_use_promocao_entrega'
import { makeInstancePromocaoEntrega } from '@src/core/promocao_entrega/utils_entity/makers/makers_promocao_entrega_entity'


export const createPromocaoEntregaService = async (promocaoEntrega: ArgsCreatePromocaoEntrega) => {
    const createdInstanceEntity = await makeInstancePromocaoEntrega(promocaoEntrega)
    const createdCompleted = { ...createdInstanceEntity }
    return await repositoryPromocaoEntregaInUse.inUse.create(createdCompleted)
}

