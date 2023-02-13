import { Entity } from '@src/domain/entities/_core/contract_entity/Entity'

type ProdutoProps = {
  nome: string
  descricao: string
  preco: number
}

export class Produto extends Entity<ProdutoProps> {
  constructor(props: ProdutoProps, id?: string) {
    super(props, id)
  }

  static create(props: ProdutoProps, id?: string) {
    const produto = new Produto(props, id)
    return produto
  }
}
