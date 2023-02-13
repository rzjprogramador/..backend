import { ArgsAddItemCart } from '@src/usecases/cart/contracts/add_item_cart.contract'
import AddItemCartService from '@src/usecases/cart/cases/add_items/controllers/service/add_items_cart.service'


class AddItemCartController {
    async execute(item: ArgsAddItemCart) {
        return await AddItemCartService.handle(item)
    }
}

export default new AddItemCartController