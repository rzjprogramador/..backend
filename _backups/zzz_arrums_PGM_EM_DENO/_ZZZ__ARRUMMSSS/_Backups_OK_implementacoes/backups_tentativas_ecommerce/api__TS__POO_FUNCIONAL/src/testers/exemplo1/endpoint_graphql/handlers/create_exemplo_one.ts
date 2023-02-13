type CreateExemploOneInput = {
  propOne: string
  propTwo: string
}

const visitor = { propOne: 'res 1', propTwo: 'res 2' }

export const createExemploOne = async (_: any, createExemploOneInput: CreateExemploOneInput) => {
  console.log(createExemploOneInput)
  // const { propOne, propTwo } = createExemploOneInput
  // const res = {
  //   propOne,
  //   propTwo
  // }
  return await { createExemploOneInput }
}
