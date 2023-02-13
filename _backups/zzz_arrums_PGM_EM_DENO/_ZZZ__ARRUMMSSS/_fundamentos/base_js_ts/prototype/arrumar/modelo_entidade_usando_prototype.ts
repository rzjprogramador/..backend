import { PromocaoEntregaModel, ArgsCreatePromocaoEntrega, ArgsPerformPromocao } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'
import { performPercentage, ArgsPerformPercentage } from '@src/app/helpers/use_performs/perform_porcentagem'
import { generateID, generateIDB } from "@src/app/helpers/generators/records_generators"
import { recordsDNAProduct } from '@src/app/use_objects_global/records_dna_product'


export function PromocaoEntregaEntity(this: PromocaoEntregaModel, promocaoEntrega: ArgsCreatePromocaoEntrega) {

    const { nomePromocao, regiao, descontoPorcentagem } = promocaoEntrega

    this.nomePromocao = nomePromocao
    this.regiao = regiao
    this.descontoPorcentagem = descontoPorcentagem
    this.records = recordsDNAProduct
    this.id = generateID()
    this.idb = generateIDB()

}

/*
 * METODOS PARA O PROTOTYPE DNA DOS OBJS :
*/

PromocaoEntregaEntity.prototype.usePerformPromocaoEntrega =
    async function ({ inputRequest, percentage }: ArgsPerformPercentage) {
        return await performPercentage({ inputRequest, percentage })
    }

