import ModalidadeEntregaRepositoryMemory from '@src/entitys/modalidade_entrega/repository/memory/modalidade_entrega.repository.memory'

class ModalidadeEntregaRepositoryInUse {
    private readonly memory = ModalidadeEntregaRepositoryMemory

    async inUse() {
        return await this.memory
    }
}

export default new ModalidadeEntregaRepositoryInUse