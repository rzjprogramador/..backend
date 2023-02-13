import { Entity } from '@src/domain/entities/_core/contract_entity/Entity'


type PedidoProps = {
    clienteId: string
    produtoId: string
}

export class Pedido extends Entity<PedidoProps> {
    constructor(props: PedidoProps, id?: string) {
        super(props, id)
    }

    static create(props: PedidoProps, id?: string) {
        const pedido = new Pedido(props, id)
        return pedido
    }
}