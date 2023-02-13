import { ArgsCreateProduct } from '@src/core/product/entity/product.contract'
import { ProductEntity } from '@src/core/product/entity/product.entity'

export const makeInstanceProduct = (product: ArgsCreateProduct) => {
    return new (ProductEntity as any)(product)
}
