import { Entity } from '@src/domain/entities/_core/contract_entity/Entity'
import { EnderecoProps } from '@src/domain/entities/localidades/endereco/entity/endereco'

type EntregaProps = {
  endereco: EnderecoProps
}

export class Entrega extends Entity<EntregaProps> {
  constructor(props: EntregaProps, id?: string) {
    super(props, id)
  }

  static create(props: EntregaProps, id?: string) {
    const entrega = new Entrega(props, id)
    return entrega
  }
}
