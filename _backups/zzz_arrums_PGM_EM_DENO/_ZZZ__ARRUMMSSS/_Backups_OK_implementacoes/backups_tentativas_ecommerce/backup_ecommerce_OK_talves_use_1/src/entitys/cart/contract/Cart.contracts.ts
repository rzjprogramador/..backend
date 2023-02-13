import { ProductModel } from "@src/entitys/product/contracts/product.contract"


export type CartItemsModel =  { items: ProductModel[]; checkout: string }

type ListItemsCartServiceProtocol = CartItemsModel[]