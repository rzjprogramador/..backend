import { db } from '../../../../../database/prisma'
import { User } from '../../../../abstracts/cliente/exemplos/entidades_exemplo/Cliente_pj_exemplo_que_funcionou'

export const findOneUserRepository = async (email: string): Promise<User> => {
  const uniqueUser = await db.User.findUnique({
    where: { email },
  })
  return uniqueUser!
}
