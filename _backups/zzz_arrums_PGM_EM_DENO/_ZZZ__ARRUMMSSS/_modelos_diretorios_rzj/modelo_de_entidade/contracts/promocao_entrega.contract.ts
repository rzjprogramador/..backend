import { RecordsDNAProduct } from '@src/app/contracts_global/register_product.contracts'
// import { ArgsPerformPercentage } from '@src/app/helpers/use_performs/perform_porcentagem'

export interface PromocaoEntregaModel {
    nomePromocao: string
    regiao: string
    descontoPorcentagem: number
    records: RecordsDNAProduct
    id: string
    idb: string
}

export type ArgsCreatePromocaoEntrega =
    Omit<PromocaoEntregaModel, 'records' | 'id' | 'idb'>



export interface ArgsPerformPromocao {
    inputRequest: number
    porcentagem: number
}
