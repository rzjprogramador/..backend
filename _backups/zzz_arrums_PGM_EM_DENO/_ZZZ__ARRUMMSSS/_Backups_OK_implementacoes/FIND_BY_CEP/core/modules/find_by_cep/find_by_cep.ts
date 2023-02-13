import { InputCepsType } from '@src/core/contracts.contracts'
import { collectionCobertura } from '@src/core/_collections'

export type FindByCepType = (cep: InputCepsType) => Promise<boolean>

export const findByCep: FindByCepType = async (cep) => {
    const founds = collectionCobertura.find((p) => {
        const ruleCep = p.cepInicial <= cep && p.cepFinal >= cep
        return ruleCep
    })
    return !!founds
}

