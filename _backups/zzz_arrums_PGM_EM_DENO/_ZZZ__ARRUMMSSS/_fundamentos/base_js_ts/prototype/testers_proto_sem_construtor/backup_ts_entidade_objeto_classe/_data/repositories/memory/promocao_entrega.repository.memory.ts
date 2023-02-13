import { ArgsCreatePromocaoEntrega, PromocaoEntregaModel, ArgsPerformPromocao } from '@src/entitys/promocao_entrega/contracts/promocao_entrega.contract'
import { collectionPromocoesEntregaSeed } from '@src/entitys/promocao_entrega/_data/seed/promocao_entrega_collection_seed'


export class PromocaoEntregaRepositoryMemory {
    private readonly _items: PromocaoEntregaModel[] = collectionPromocoesEntregaSeed

    async create(modalidade: any) {
        await this._items.push(modalidade)
        return await modalidade
        // warn a tipagem deste param reflete na criacao no service
    }

    async list() {
        return await this._items
    }
}