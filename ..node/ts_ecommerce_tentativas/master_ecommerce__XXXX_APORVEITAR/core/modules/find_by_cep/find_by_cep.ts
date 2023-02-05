import { InputCepsType } from '@src/core/contracts.contracts'
import { listCoberturaEntrega } from '@src/core/lista_cobertura'

export type FindByCepType = (cep: InputCepsType) => Promise<boolean>

export const findByCep: FindByCepType = async (cep) => {
    const founds = listCoberturaEntrega.find((p) => {
        const ruleCep = p.cepInicial <= cep && p.cepFinal >= cep
        return ruleCep
    })
    return !!founds
}

