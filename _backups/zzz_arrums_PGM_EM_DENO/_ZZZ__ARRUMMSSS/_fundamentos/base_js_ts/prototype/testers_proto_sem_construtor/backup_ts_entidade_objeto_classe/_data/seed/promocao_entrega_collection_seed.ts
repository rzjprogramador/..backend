import { PromocaoEntregaModel } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'
import { notPromocaoEntregaSeed, entregaMesmoDiaPromocaoEntregaSeed, proximoDiaUtilPromocaoEntregaSeed } from '@src/entitys/promocao_entrega/_data/seed/promocao_entrega_unitarys_seed'


export const collectionPromocoesEntregaSeed: PromocaoEntregaModel[] = [
    notPromocaoEntregaSeed,
    entregaMesmoDiaPromocaoEntregaSeed,
    proximoDiaUtilPromocaoEntregaSeed
]
