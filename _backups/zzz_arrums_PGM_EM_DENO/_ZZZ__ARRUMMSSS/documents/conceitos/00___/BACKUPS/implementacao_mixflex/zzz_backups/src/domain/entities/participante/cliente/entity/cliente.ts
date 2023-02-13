export class Cliente {
  id?: string
  nome: string
  email: string
  identificador: string

  private constructor({ nome, email, identificador }: Cliente) {
    return Object.assign(this, { nome, email, identificador })
  }

  static create({ nome, email, identificador }: Cliente) {
    const cliente = new Cliente({ nome, email, identificador })
    return cliente
  }
}
