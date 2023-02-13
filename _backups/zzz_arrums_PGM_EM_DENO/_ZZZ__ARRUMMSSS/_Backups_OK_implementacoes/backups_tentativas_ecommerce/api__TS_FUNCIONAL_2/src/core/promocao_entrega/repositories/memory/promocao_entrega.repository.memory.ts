import { ArgsCreatePromocaoEntrega, ModelPromocaoEntrega } from '@src/core/promocao_entrega/entity/promocao_entrega.contract'
import { collectionPromocoesEntregaSeed } from '@src/core/promocao_entrega/_data/seed/promocao_entrega_collection_seed'


export class PromocaoEntregaRepositoryMemory {
    private readonly _items: ModelPromocaoEntrega[] = collectionPromocoesEntregaSeed

    async create(promocaoEntrega: any) {
        await this._items.push(promocaoEntrega)
        return await promocaoEntrega
        // warn a tipagem deste param reflete na criacao no service
    }

    async list() {
        return await this._items
    }
}