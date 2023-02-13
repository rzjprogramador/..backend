import { ModalidadeEntregaModel } from '@src/entitys/modalidade_entrega/contracts/modalidade_entrega.contract'


class ModalidadeEntregaRepositoryMemory {
    private readonly items: ModalidadeEntregaModel[] = []

    async create(modalidade: ModalidadeEntregaModel) {
        this.items.push(modalidade)
        return modalidade
    }

    async list() {
        return await this.items
    }
}

export default new ModalidadeEntregaRepositoryMemory