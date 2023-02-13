import { ModelProduct } from '@src/core/product/entity/product.contract'
import { seedProductCollection } from '@src/core/product/_data/seeds/seeds_products_collection'


export class ProductRepositoryMemory {
    private readonly _items: ModelProduct[] = seedProductCollection

    async create(product: ModelProduct) {
        await this._items.push(product)
        return await product
    }

    async list() {
        return await this._items
    }
}


