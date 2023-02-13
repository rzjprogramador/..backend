import ProductRepositoryMemory from '@src/entitys/product/repositories/memory/product_repository_memory'


class ProductRepositoryInUse {
    private readonly memory = ProductRepositoryMemory

    async inUse() {
        return await this.memory
    }
}

export default new ProductRepositoryInUse