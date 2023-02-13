


export const findOneUserService = async (email: string) => {
    const unique = findOneUserRepository(email)
    return unique
}
