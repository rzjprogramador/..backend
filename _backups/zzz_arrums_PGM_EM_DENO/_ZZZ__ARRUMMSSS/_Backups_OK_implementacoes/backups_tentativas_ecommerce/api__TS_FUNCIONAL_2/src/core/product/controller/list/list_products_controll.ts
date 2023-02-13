import { inUseRepositoryProduct } from '@src/core/product/repositories/_manager_repositories/manager_repo_in_use_products'


export const listProducts = async () => {
    return await listProductsService()
}


const listProductsService = async () => {
    return await inUseRepositoryProduct.inUse.list()
}