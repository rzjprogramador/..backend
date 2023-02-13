import { ModelPromocaoEntrega, ArgsCreatePromocaoEntrega } from '@src/core/promocao_entrega/entity/promocao_entrega.contract'
import { generateID, generateIDB } from "@src/app/helpers/generators/records_generators"
import { recordsDNAProduct } from '@src/app/use_objects_global/records_dna_product'
import { aplicDiscountPriceProduct } from '@src/core/promocao_entrega/utils_entity/methods_prototype/aplic_discount_price_product'


export function RulePromocaoEntregaEntity(this: ModelPromocaoEntrega, promocaoEntrega: ArgsCreatePromocaoEntrega) {

    const { nomePromocao, regiao, descontoPorcentagem, horarioLimitePromocao } = promocaoEntrega

    this.nomePromocao = nomePromocao
    this.regiao = regiao
    this.horarioLimitePromocao = horarioLimitePromocao
    this.descontoPorcentagem = descontoPorcentagem
    this.records = recordsDNAProduct
    this.id = generateID()
    this.idb = generateIDB()

}

/*
 * METODOS PARA O PROTOTYPE DNA DOS OBJS :
*/

RulePromocaoEntregaEntity.prototype.aplicDiscountPriceProduct = aplicDiscountPriceProduct

