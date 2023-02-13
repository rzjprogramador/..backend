import { Entity } from '@src/domain/entities/_core/contract_entity/Entity'

export type CidadeProps = {
  nome: string
}
export class Cidade extends Entity<CidadeProps> {
  constructor(props: CidadeProps, id?: string) {
    super(props, id)
  }

  static create(props: CidadeProps, id?: string) {
    const cidade = new Cidade(props, id)
    return cidade
  }
}
