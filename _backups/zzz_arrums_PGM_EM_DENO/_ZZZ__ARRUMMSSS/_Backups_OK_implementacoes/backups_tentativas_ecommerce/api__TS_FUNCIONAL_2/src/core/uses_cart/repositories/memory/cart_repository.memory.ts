import { ItemCartModel, ArgsAddItemCart } from '@src/core/uses_cart/contracts/add_item_cart.contract'

class CartRepositoryMemory {
    private readonly _items: ItemCartModel[] = []

    async add(item: ItemCartModel) {
        await this._items.push(item)
        return item
    }

    async list() {
        return await this._items
    }
}

export default new CartRepositoryMemory