export interface ArgsUser01 {
  primeiroNome: string
  complementoNome: string
}

export default class User01 {
  public readonly id?: string

  constructor(private readonly args: ArgsUser01,) { }

  async getNomeCompleto() {
    return await `${this.args.primeiroNome} ${this.args.complementoNome}`
  }

}

