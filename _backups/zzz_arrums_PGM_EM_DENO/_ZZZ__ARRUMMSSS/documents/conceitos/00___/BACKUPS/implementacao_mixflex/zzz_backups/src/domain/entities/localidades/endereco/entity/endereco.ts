import { Entity } from '@src/domain/entities/_core/contract_entity/Entity'
import { CidadeProps } from '@src/domain/entities/localidades/cidade/entity/cidade'

export type EnderecoProps = {
  logradouro: string
  numero: string
  cep: string
  cidade: CidadeProps
}

export class Endereco extends Entity<EnderecoProps> {
  constructor(props: EnderecoProps, id?: string) {
    super(props, id)
  }

  static create(props: EnderecoProps, id?: string) {
    const endereco = new Endereco(props, id)
    return endereco
  }
}
