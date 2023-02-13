import { ArgsPerformPromocao } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'
import { repositoryPromocaoEntregaInUse } from '@src/entitys/promocao_entrega/_data/repositories/manager_repositories/manager_repository_in_use_promocao_entrega'


export const performPromocaoEntrega = async (promocao: ArgsPerformPromocao) => {
    return await performPromocaoEntregaService(promocao)
}


export const performPromocaoEntregaService = async (promocao: ArgsPerformPromocao) => {
    return await repositoryPromocaoEntregaInUse.inUse.usePerformPromocaoEntrega(promocao)
}