export type ProductModel = ArgsCreateProduct & SystemComplementProductModel

export type ArgsCreateProduct = {
  nomeProduto: string
  precoBase: number
  acrescimo: number
  desconto: number
  ruleFieldProduct: RuleFieldProduct
}

export type SystemComplementProductModel = {
  precoUnitarioFinal: number
  quantidade: number
}


type RuleFieldProduct = {
  cepInicial: string
  cepFinal: string
  regiao: string
  cidade: string
  modalidadeEntrega: ModalidadeEntrega
}

type ArgsProductRequest = {
  cep: string
  logradouro: string
  complemento: string
  numero: string
  regiao: string
  cidade: string
  estado: string
}

export type ModalidadeEntrega = "PROXIMO DIA UTIL" | "MESMO DIA"

export type CollectionProducts = { _items: ProductModel[] }
