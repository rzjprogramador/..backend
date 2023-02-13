import ProductRepositoryInUse from '@src/entitys/product/data/manager_repositories/manager_repository_product'
import { ArgsCreateProduct } from '@src/entitys/product/contracts/product.contract'
import handlePreco from '@src/entitys/product/modules/handle_preco/handlePreco'

class CreateProductService {
    async execute(product: ArgsCreateProduct) {
        const handlePrecoUnitarioFinal = await handlePreco(
            product.ruleFieldProduct.modalidadeEntrega,
            product.acrescimo, product.desconto,
            product.precoBase
        )

        const fieldsSystem = {
            quantidade: 1,
            precoUnitarioFinal: handlePrecoUnitarioFinal
        }
        const responseModel = { ...product, ...fieldsSystem }

        return await (await ProductRepositoryInUse.inUse()).create(responseModel)
    }
}

export default new CreateProductService


