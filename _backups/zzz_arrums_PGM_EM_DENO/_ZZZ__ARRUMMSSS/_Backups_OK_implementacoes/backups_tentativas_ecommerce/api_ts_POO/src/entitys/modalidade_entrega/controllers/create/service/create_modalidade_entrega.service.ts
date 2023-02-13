import { ArgsModalidadeEntrega } from '@src/entitys/modalidade_entrega/contracts/modalidade_entrega.contract'
import ModalidadeEntregaRepositoryInUse from '@src/entitys/modalidade_entrega/data/manager_repositories/manager_repository_modalidade_entrega_inuse'

class CreateModalidadeEntregaService {
    async handle(modalidade: ArgsModalidadeEntrega) {
        return await (await ModalidadeEntregaRepositoryInUse.inUse()).create(modalidade)
    }
}

export default new CreateModalidadeEntregaService