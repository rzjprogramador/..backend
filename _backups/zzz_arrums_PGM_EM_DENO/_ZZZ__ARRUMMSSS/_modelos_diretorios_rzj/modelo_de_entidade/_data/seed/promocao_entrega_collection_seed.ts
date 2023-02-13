import { PromocaoEntregaModel } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'
import { useSeedEntregaNotPromocao, useSeedEntregaMesmoDia, useSeedEntregaProximoDiaUtil } from '@src/entitys/promocao_entrega/_data/seed/promocao_entrega_unitarys_seed'


export const collectionPromocoesEntregaSeed: PromocaoEntregaModel[] = [
    useSeedEntregaNotPromocao,
    useSeedEntregaMesmoDia,
    useSeedEntregaProximoDiaUtil
]
