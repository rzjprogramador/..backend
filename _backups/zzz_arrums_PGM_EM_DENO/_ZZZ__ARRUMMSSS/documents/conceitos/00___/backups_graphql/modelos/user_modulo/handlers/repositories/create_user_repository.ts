
import { db } from '../../../../../database/prisma'

export const createUserRepo = async ({ nome, email, password }: UserRequest) => {
  const User = await db.User.create({
    data: { nome, email, password },
  })
  return User
}

export const findAllUserRepository = async () => {
  return await db.User.findMany({})
}

export const findOneUserRepository = async (email: string) => {
  const uniqueUser = await db.User.findUnique({
    where: { email },
  })
  return uniqueUser!
}

export const removeUserRepository = async (email: string): Promise<boolean> => {
  const deletaded = await db.User.delete({
    where: { email },
  })
  return !!deletaded
}
