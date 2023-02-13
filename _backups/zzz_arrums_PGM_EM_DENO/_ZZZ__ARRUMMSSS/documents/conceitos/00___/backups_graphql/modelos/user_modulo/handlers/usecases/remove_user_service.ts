

export const removeUserService = async (email: string) => {
  try {
    await removeUserRepository(email)
  } catch (error: any) {
    return error.message
  }
}

// VAI NEUTRALIZAR O ERRO- NAO VAI CRACHEAR O SERVER - MAS PRA TRATA-LO IMPLEMENTAR NO GRAPHQL
