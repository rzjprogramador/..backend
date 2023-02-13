

export type IUser = {
  tipoUser: TipoUser
  tipoIdenticacao: TipoIdentificador

  id: string
  idb: string
  indexRef: number
  createdAt: Date
  updated: Date
  ultimoLogin: Date
}
