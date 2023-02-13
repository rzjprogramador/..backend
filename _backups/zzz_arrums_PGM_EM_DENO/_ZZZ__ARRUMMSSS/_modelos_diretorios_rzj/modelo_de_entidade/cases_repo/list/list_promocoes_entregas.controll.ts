import { repositoryPromocaoEntregaInUse } from '@src/entitys/promocao_entrega/repositories/manager_repositories/manager_repository_in_use_promocao_entrega'


export const listPromocoesEntregas = async () => {
    return await listPromocoesEntregasService()
}


const listPromocoesEntregasService = async () => {
    return await repositoryPromocaoEntregaInUse.inUse.list()
}