import ListItemsCartService from '@src/usecases/cart/cases/list_items/controller/service/list_items.service'

class ListItemsCartController {
    async execute() {
        return await ListItemsCartService.handle()
    }
}

export default new ListItemsCartController