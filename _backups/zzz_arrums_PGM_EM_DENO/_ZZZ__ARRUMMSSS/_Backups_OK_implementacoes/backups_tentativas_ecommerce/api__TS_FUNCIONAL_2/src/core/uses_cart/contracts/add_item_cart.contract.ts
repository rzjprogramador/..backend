export interface ItemCartModel {
    typeEntrega: TypeEntrega
    one: string
    two: string
}

export type ArgsAddItemCart = ItemCartModel

interface TypeEntrega {
    nome: string
}