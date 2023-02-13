import { ModelPromocaoEntrega } from '@src/core/promocao_entrega/entity/promocao_entrega.contract'
import { makeInstancePromocaoEntrega } from '@src/core/promocao_entrega/utils_entity/makers/makers_promocao_entrega_entity'


export const notPromocaoEntregaSeed: ModelPromocaoEntrega = {
    nomePromocao: 'sem promocao',
    regiao: 'sao paulo',
    horarioLimitePromocao: 0,
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

export const entregaMesmoDiaPromocaoEntregaSeed: ModelPromocaoEntrega = {
    nomePromocao: 'entrega no mesmo dia',
    regiao: 'sao paulo',
    horarioLimitePromocao: 12,
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

export const proximoDiaUtilPromocaoEntregaSeed: ModelPromocaoEntrega = {
    nomePromocao: 'proximo dia util',
    regiao: 'sao paulo',
    horarioLimitePromocao: 12,
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


// TESTER
// async function mostraTesterMesmoDia() {
//     const testerMesmoDia = await useSeedEntregaMesmoDia.usePerformPromocaoEntrega({ horaPedido: 11, horarioLimite: 12, inputRequest: 100, percentage: 10 })
//     console.log(testerMesmoDia)
// }
// mostraTesterMesmoDia()
//
