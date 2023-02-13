import { PromocaoEntregaModel } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'
import { makeInstancePromocaoEntrega } from '@src/entitys/promocao_entrega/utils_entity/makers/makers_promocao_entrega_entity'


const notPromocaoEntregaSeed: PromocaoEntregaModel = {
    nomePromocao: 'sem promocao',
    regiao: 'sao paulo',
    descontoPorcentagem: 0,
    records: {
        createdAt: 'not',
        updatedAt: 'not',
        removedAt: 'not',
        statusActive: 'Ativo'
    },
    id: 'not',
    idb: 'not'
}

const entregaMesmoDiaPromocaoEntregaSeed: PromocaoEntregaModel = {
    nomePromocao: 'entrega no mesmo dia',
    regiao: 'sao paulo',
    descontoPorcentagem: 10,
    records: {
        createdAt: 'noDia',
        updatedAt: 'noDia',
        removedAt: 'not',
        statusActive: 'Ativo'
    },
    id: 'mesmo',
    idb: 'mesmo'
}

const proximoDiaUtilPromocaoEntregaSeed: PromocaoEntregaModel = {
    nomePromocao: 'proximo dia util',
    regiao: 'sao paulo',
    descontoPorcentagem: 5,
    records: {
        createdAt: 'proximo',
        updatedAt: 'proximo',
        removedAt: 'not',
        statusActive: 'Ativo'
    },
    id: 'proximo',
    idb: 'proximo'
}


// USE SEEDS
export const useSeedEntregaNotPromocao = makeInstancePromocaoEntrega(notPromocaoEntregaSeed)
export const useSeedEntregaMesmoDia = makeInstancePromocaoEntrega(entregaMesmoDiaPromocaoEntregaSeed)
export const useSeedEntregaProximoDiaUtil = makeInstancePromocaoEntrega(proximoDiaUtilPromocaoEntregaSeed)
