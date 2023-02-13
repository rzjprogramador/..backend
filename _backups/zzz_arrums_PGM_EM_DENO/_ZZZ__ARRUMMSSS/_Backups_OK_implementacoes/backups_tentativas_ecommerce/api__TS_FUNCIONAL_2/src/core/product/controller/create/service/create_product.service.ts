import { inUseRepositoryProduct } from '@src/core/product/repositories/_manager_repositories/manager_repo_in_use_products'
import { ArgsCreateProduct } from '@src/core/product/entity/product.contract'
import { makeInstanceProduct } from '@src/core/product/utils_entity/makers/make_instance_product_entity'

export const createProductService = async (product: ArgsCreateProduct) => {
    const entityInstanceModel = makeInstanceProduct(product)
    const transformModel = { ...entityInstanceModel }

    return await inUseRepositoryProduct.inUse.create(transformModel)
}



