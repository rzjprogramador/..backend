import { proSeedCoberturaEntrega } from '@src/core/vars_pro_seed_cobertura'
import { CoberturaEntrega } from '@src/core/contracts.contracts'


export const seedCoberturaOne: CoberturaEntrega = {
    cepInicial: proSeedCoberturaEntrega.one.cepInicialOne,
    cepFinal: proSeedCoberturaEntrega.one.cepFinalOne
}

export const seedCoberturaTwo: CoberturaEntrega = {
    cepInicial: proSeedCoberturaEntrega.two.cepInicialTwo,
    cepFinal: proSeedCoberturaEntrega.two.cepFinalTwo
}

export const seedCoberturaTree: CoberturaEntrega = {
    cepInicial: proSeedCoberturaEntrega.tree.cepInicialTree,
    cepFinal: proSeedCoberturaEntrega.tree.cepFinalTree
}