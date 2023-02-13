import { PromocaoEntregaModel } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'


export const notPromocaoEntregaSeed: PromocaoEntregaModel = {
    nomePromocao: 'sem promocao',
    regiao: 'sao paulo',
    descontoPorcentagem: 0
}

export const entregaMesmoDiaPromocaoEntregaSeed: PromocaoEntregaModel = {
    nomePromocao: 'entrega no mesmo dia',
    regiao: 'sao paulo',
    descontoPorcentagem: 10
}

export const proximoDiaUtilPromocaoEntregaSeed: PromocaoEntregaModel = {
    nomePromocao: 'proximo dia util',
    regiao: 'sao paulo',
    descontoPorcentagem: 5
}