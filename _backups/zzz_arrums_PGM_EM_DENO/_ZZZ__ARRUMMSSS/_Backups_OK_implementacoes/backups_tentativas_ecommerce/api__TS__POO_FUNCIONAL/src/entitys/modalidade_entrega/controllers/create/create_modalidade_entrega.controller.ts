import { ArgsModalidadeEntrega } from '@src/entitys/modalidade_entrega/contracts/modalidade_entrega.contract'
import CreateModalidadeEntregaService from '@src/entitys/modalidade_entrega/controllers/create/service/create_modalidade_entrega.service'


class CreateModalidadeEntregaController {
    async execute(modalidade: ArgsModalidadeEntrega) {
        return await CreateModalidadeEntregaService.handle(modalidade)
    }
}

export default new CreateModalidadeEntregaController