
import { RecordsDNAProduct } from '@src/app/contracts_global/records_dna_product.contracts'

export interface ModelProduct {
  nomeProduto: string
  precoBase: number
  proRulePriceProduct: ProRulePriceProduct
  id: string
  idb: string
  records: RecordsDNAProduct
}

export type ArgsCreateProduct =
  Pick<ModelProduct, 'nomeProduto' | 'precoBase' | 'proRulePriceProduct'>

interface ProRulePriceProduct {
  cepInicial: string
  cepFinal: string
  regiao: string
  cidade: string
  typeEntrega: TypeEntrega
}

export type TypeEntrega = "PROXIMO_DIA_UTIL" | "MESMO_DIA"

// interface ArgsProductRequest {
//   cep: string
//   logradouro: string
//   complemento: string
//   numero: string
//   regiao: string
//   cidade: string
//   estado: string
// }


