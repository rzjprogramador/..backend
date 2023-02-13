import { ModalidadeEntrega } from '@src/entitys/product/contracts/product.contract'

const handlePreco = async (dataEntrega: ModalidadeEntrega, acrescimo: number, desconto: number, precoBase: number): Promise<number> => {
    let descontoByDataEntrega = 0
    if (dataEntrega === 'MESMO DIA') {
        descontoByDataEntrega = 5
    }
    if (dataEntrega === 'PROXIMO DIA UTIL') {
        descontoByDataEntrega = 2
    }
    const acrescimoHandle = await acrescimo * 100
    const descontoHandle = await descontoByDataEntrega || desconto
    return await precoBase + (acrescimoHandle - descontoHandle)

    // TODO: REGRA PORCENTAGEM
}

export default handlePreco 