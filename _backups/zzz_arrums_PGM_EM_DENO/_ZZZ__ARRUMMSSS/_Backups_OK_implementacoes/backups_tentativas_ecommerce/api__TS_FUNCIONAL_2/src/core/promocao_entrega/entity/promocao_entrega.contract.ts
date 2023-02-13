import { RecordsDNAProduct } from '@src/app/contracts_global/records_dna_product.contracts'


export interface ModelPromocaoEntrega {
    nomePromocao: string
    regiao: string
    horarioLimitePromocao: number
    descontoPorcentagem: number
    records: RecordsDNAProduct
    id: string
    idb: string
    aplicDiscountPriceProduct?: AplicDiscountPriceProductTypeFn
}

export type inputAplicDiscountPriceProductTypeFn = { horaPedido: number, inputRequest: number }
export type AplicDiscountPriceProductTypeFn = (input: inputAplicDiscountPriceProductTypeFn) => Promise<number | string>



export type ArgsCreatePromocaoEntrega =
    Pick<ModelPromocaoEntrega, 'nomePromocao' | 'regiao' | 'horarioLimitePromocao' | 'descontoPorcentagem'>

