export interface PromocaoEntregaModel {
    nomePromocao: string
    regiao: string
    descontoPorcentagem: number
}

export type ArgsCreatePromocaoEntrega = PromocaoEntregaModel

export interface ArgsPerformPromocao {
    inputRequest: number
    porcentagem: number
}
