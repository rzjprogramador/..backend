


export const findAllClientePjService = async () => {
  try {
    return findAllClientePjRepository()
  } catch (error: any) {
    return error.User
  }
}
