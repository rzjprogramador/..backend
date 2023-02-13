

export const createUserService = async ({
  nome,
  email,
  password,
}: UserRequest): Promise<UserRequest> => {
  const targetCreate = UserEntity({ nome, email, password })
  const User = await createUserRepo(targetCreate)
  return User
}
