export interface ArgsUser02 {
  primeiroNome: string
  complementoNome: string
}

class User02 {
  public readonly id?: string
  public readonly args: ArgsUser02

  constructor() { }

  async create(args: ArgsUser02) {
    Object.assign(this, args)
    return await args

    // const nome = this.args.primeiroNome
    // const complementoNome = this.args.complementoNome

    // return await {
    //   nome, complementoNome
    // }

  }

  async getNomeCompleto() {
    return await `${this.args.primeiroNome} ${this.args.complementoNome}`
  }

  // getNomeCompleto() {
  //   return `${this.args.primeiroNome} ${this.args.complementoNome}`
  // }

}

export default new User02()