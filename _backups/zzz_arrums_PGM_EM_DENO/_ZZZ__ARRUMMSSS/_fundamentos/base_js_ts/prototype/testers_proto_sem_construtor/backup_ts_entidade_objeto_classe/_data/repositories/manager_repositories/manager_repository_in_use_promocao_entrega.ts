import { PromocaoEntregaRepositoryMemory } from '@src/entitys/promocao_entrega/_data/repositories/memory/promocao_entrega.repository.memory'

export const repositoriesPromocaoEntregaAvaliable = {
    memory: new PromocaoEntregaRepositoryMemory()
}

export const repositoryPromocaoEntregaInUse = {
    inUse: repositoriesPromocaoEntregaAvaliable.memory
}
