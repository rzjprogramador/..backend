import CartRepositoryMemory from '@src/core/uses_cart/repositories/memory/cart_repository.memory'

class CartRepositoryInUse {
    private readonly inMemory = CartRepositoryMemory

    inUse() {
        return this.inMemory
    }
}

export default new CartRepositoryInUse