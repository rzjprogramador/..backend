type CreateExemplo1InputRequest = {
  prop1: string
  prop2: string
}

export const createExemplo1 = (
  _: any,
  createExemplo1Input: CreateExemplo1InputRequest
): CreateExemplo1InputRequest => {
  const { prop1, prop2 } = createExemplo1Input
  prop1.toUpperCase()
  prop2.toUpperCase()
  const createdExemplo1 = { prop1, prop2 }
  return createdExemplo1
}
