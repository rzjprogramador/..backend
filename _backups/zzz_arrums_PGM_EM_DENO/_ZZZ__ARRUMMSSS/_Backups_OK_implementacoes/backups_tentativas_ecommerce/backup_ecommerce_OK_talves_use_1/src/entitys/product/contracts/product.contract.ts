import { RegisterFieldsProductType } from "@src/helpers/makes/make_register_fields_product"

export type ProductModel = {
  produtoNome: string
  precoBase: number
  quant: number
  productControl: ProductControl
  precoView?: PrecoView
  enderecoEntrega: EnderecoEntrega
  registros: RegisterFieldsProductType
}

type ProductControl = {
  cepInicial: string
  cepFinal: string
  regiao: string
  cidade: string
}

export type EnderecoEntrega = {
  cep: string
  logradouro: string
  complemento: string
  numero: string
  regiao: string
  cidade: string
  estado: string
  dataEntrega: DataEntrega
}

export type DataEntrega = "PROXIMO DIA UTIL" | "MESMO_DIA"

export type PrecoView = {
  prop1: number
  prop2: number
}

/*
 * FONTE UNICA : USES EXPORT RESPONSE
 */

// CREATE
// export type CreateProductRequestAdm = RequestCreateProductAdmBase

// // REQUEST
// export type RequestAddItemRepo = CreateProductRequestAdm & RegisterFieldsProductType
// // export type RequestAddItemHttp = RequestAddItemHttpBase

// // DTO
// export type DTOAddCartItemRepo = ResponseAddCartItem | ProductModel | any

// // RESPONSES
// export type ResponseAddCartItem = ProductModel
// export type ResponseFindProduct = ProductModel

// RESPONSE FINAL
// export type ProductModel = CreateProductRequestAdm & RegisterFieldsProductType
