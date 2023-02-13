import { makeID, makeDate } from '@src/globals/makers/maker_identificator'

export const id = () => makeID()

// export const indexRef = (obj: any) => {
//   return (obj.indexRef = MakeStatic.makeIncrementNumber())
// }

export const createdAt = (obj: any) => {
  return (obj.createdAt = makeDate())
}

// export const tipoUser = (obj: any) => {
//   return (obj.tipoUser = 'CC__PJ')
// }

// ok
