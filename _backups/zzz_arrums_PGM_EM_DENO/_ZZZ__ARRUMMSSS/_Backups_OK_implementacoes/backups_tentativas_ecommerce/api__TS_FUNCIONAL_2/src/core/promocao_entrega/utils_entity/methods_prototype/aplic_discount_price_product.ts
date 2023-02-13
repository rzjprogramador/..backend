import { performDiscountPercentage } from '@src/app/helpers/use_performs/perform_porcentagem'
import { inputAplicDiscountPriceProductTypeFn, AplicDiscountPriceProductTypeFn } from '@src/core/promocao_entrega/entity/promocao_entrega.contract'
import { ModelPromocaoEntrega } from '@src/core/promocao_entrega/entity/promocao_entrega.contract'


export async function aplicDiscountPriceProduct(this: ModelPromocaoEntrega,
    input: inputAplicDiscountPriceProductTypeFn
) {
    const horarioLimite = this.horarioLimitePromocao
    const percentage = this.descontoPorcentagem

    if (input.horaPedido <= horarioLimite) {
        return await performDiscountPercentage(input.inputRequest, percentage)
    }
    return await `Ops Ultrapassou o horario limite da promoção..o preco sera normal`
}


/*
    TODO: USAR AINDA NO PRODUTO >>
    -- O CAMPO horaPedido : VAI VIR DO PRODUTO OU CART ITEM --
    -- E O CAMPO inputRequest : VAI VIR DO PRECO BASE DO PRODUTO ... QUE VAI SOFRER ALTERACAO QUANDO O PRODUTO USA-LO VAI VIR DO PRODUTO ENTAO

    TODO: O CORRETO É TENTAR APLICAR NA FUNCAO PROTO A TIPAGEM : AplicDiscountPriceProductTypeFn

    */

// DOC: OS CAMPOS [ horarioLimite, descontoPorcentagem] >> VAI VIR DE QUANDO DO ADMIN CRIAR A PROMOCAO_ENTREGA
