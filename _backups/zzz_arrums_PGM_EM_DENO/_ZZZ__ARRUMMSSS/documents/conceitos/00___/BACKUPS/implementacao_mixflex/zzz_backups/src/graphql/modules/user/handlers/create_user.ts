import { UserStatic } from '@src/core/entities/user/statics/user_enums_statics'
import { MakeStatic } from '@src/core/generics/helpers/statics_makers/make_static'
import { IUser, UserRequest } from '@src/core/entities/user/contracts/user_entity'
import { createUserControl } from '@src/core/entities/user/inject/user_injects/user_control'

type CreateUserInputResolve = { data: IUser }

const userControl = createUserControl()

export const createUser = async (_: any, args: IUser) => {
  const recebidos = args
  //   console.log(recebidos)
  const userAdapt = {
    ...recebidos,
    id: MakeStatic.makeID(),
    tipoUser: UserStatic.tipoUserMaker(),
    idb: MakeStatic.makeID(),
    createdAt: MakeStatic.makeDate(),
    updated: MakeStatic.makeDate(),
    ultimoLogin: MakeStatic.makeDate(),
  }
  const userSave = await userControl.handler(userAdapt)
  console.log(userSave)

  return userSave
}
