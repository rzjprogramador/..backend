import CartRepositoryInUse from '@src/core/uses_cart/data/repositories_in_use/cart_repositories_in_use'

class ListItemsCartService {
    async handle() {
        // DEIXAR PARA O LIST MOSTRAR OS ITEMS E OPCOES DE CHECKOUT
        return {
            items: await CartRepositoryInUse.inUse().list(),
            checkout: 'fazer checkout () '
        }
    }
}

export default new ListItemsCartService