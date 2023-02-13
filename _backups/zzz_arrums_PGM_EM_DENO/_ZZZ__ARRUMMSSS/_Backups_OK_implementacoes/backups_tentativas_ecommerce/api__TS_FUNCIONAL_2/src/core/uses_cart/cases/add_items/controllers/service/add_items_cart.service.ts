import { ArgsAddItemCart } from '@src/core/uses_cart/contracts/add_item_cart.contract'
import CartRepositoryInUse from '@src/core/uses_cart/data/repositories_in_use/cart_repositories_in_use'
import ListItemsCartController from '@src/core/uses_cart/cases/list_items/controller/list_items.controller'

class AddItemCartService {
    async handle(item: ArgsAddItemCart) {
        await CartRepositoryInUse.inUse().add(item)
        return await ListItemsCartController.execute()
    }
}

export default new AddItemCartService
