import ListModalidadesEntregaService from '@src/entitys/modalidade_entrega/controllers/list/service/list_modalidades_entrega.service'

class ListModalidadesEntregaController {
    async execute() {
        return await ListModalidadesEntregaService.execute()
    }
}

export default new ListModalidadesEntregaController