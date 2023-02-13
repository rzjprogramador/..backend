import { ArgsCreatePromocaoEntrega, ArgsPerformPromocao } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'
import { performPercentage } from '@src/app/helpers/use_performs/perform_porcentagem'


export class PromocaoEntregaEntity {
    constructor(private readonly promocao: ArgsCreatePromocaoEntrega) { }

    async usePerformPromocaoEntrega(argPromocao: ArgsPerformPromocao) {
        return await performPercentage(argPromocao)
    }

}

