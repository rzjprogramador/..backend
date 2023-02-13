import { db } from '../../../../../database/prisma'

export const findAllUserRepository = async () => await db.User.findMany({})
