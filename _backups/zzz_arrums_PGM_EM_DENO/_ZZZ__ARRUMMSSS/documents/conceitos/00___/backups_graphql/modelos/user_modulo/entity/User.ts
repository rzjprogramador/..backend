
import { makeID, makeIncrementNumber, makeDate } from '../../../generics/helpers/makers/makeIdentificators'

export const UserEntity = (user: UserRequest): UserUnionRequestEntity => {
  const { nome, email, password } = user

  const adaptUser = {
    ...user,
    id: makeID(),
    tipoUser: TipoUser,
    tipoIdenticacao: TipoIdentificador,
    idb: makeID(),
    indexRef: makeIncrementNumber(),
    createdAt: makeDate(),
    updated: makeDate(),
    ultimoLogin: makeDate(),
  }

  return adaptUser
}
