import { MakeStatic } from '@src/core/generics/helpers/statics_makers/make_static'

export const id = () => MakeStatic.makeID()

// export const indexRef = (obj: any) => {
//   return (obj.indexRef = MakeStatic.makeIncrementNumber())
// }

export const createdAt = (obj: any) => {
  return (obj.createdAt = MakeStatic.makeDate())
}

export const tipoUser = (obj: any) => {
  return (obj.tipoUser = 'CC__PJ')
}

// ok
