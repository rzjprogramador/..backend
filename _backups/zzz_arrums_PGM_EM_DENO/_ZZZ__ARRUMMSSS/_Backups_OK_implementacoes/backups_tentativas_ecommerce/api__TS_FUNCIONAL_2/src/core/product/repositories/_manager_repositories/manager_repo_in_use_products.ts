import { ProductRepositoryMemory } from '@src/core/product/repositories/memory/product_repository_memory'

export const avaliablesRepositoryProduct = {
    memory: new ProductRepositoryMemory()
}

export const inUseRepositoryProduct = {
    inUse: avaliablesRepositoryProduct.memory
}
