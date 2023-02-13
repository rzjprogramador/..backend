import { Entity } from '@src/domain/entities/_core/contract_entity/Entity'

type FuncionarioProps = {
  nome: string
  cargo: string
}

export class Funcionario extends Entity<FuncionarioProps> {
  constructor(props: FuncionarioProps, id?: string) {
    super(props, id)
  }

  create(props: FuncionarioProps, id?: string) {
    const funcionario = new Funcionario(props, id)
    return funcionario
  }
}
