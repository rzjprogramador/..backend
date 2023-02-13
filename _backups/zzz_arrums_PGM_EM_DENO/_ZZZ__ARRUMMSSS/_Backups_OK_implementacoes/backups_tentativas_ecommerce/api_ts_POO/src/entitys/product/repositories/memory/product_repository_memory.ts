import { ProductModel, ArgsCreateProduct } from '@src/entitys/product/contracts/product.contract';
import { CollectionProducts } from '@src/entitys/product/contracts/product.contract'

interface ProductRepository {
    create(product: ProductModel): Promise<ProductModel>
}

class ProductRepositoryMemory implements ProductRepository {
    private readonly _items: ProductModel[] = []

    async create(product: ProductModel) {
        await this._items.push(product)
        return product
    }
}

export default new ProductRepositoryMemory
