import { db } from '../../../../../database/prisma'


export const removeUserRepository = async (email: string): Promise<boolean> => {
  const deletaded = await db.User.delete({
    where: { email },
  })
  return !!deletaded
}
