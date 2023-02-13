import { ModelPromocaoEntrega } from '@src/core/promocao_entrega/entity/promocao_entrega.contract'
import { useSeedEntregaNotPromocao, useSeedEntregaMesmoDia, useSeedEntregaProximoDiaUtil } from '@src/core/promocao_entrega/_data/seed/promocao_entrega_unitarys_seed'


export const collectionPromocoesEntregaSeed: ModelPromocaoEntrega[] = [
    useSeedEntregaNotPromocao,
    useSeedEntregaMesmoDia,
    useSeedEntregaProximoDiaUtil
]
