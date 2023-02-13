import ModalidadeEntregaRepositoryMemory from '@src/entitys/modalidade_entrega/repository/memory/modalidade_entrega.repository.memory'
import ModalidadeEntregaRepositoryInUse from '@src/entitys/modalidade_entrega/data/manager_repositories/manager_repository_modalidade_entrega_inuse'


class ListModalidadesEntregaService {
    async execute() {
        return await (await ModalidadeEntregaRepositoryInUse.inUse()).list()
    }
}

export default new ListModalidadesEntregaService