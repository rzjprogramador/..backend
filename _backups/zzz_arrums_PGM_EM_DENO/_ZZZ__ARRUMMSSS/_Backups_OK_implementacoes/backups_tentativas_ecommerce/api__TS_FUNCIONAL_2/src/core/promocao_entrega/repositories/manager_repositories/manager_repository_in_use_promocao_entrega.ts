import { PromocaoEntregaRepositoryMemory } from '@src/core/promocao_entrega/repositories/memory/promocao_entrega.repository.memory'

export const repositoriesPromocaoEntregaAvaliable = {
    memory: new PromocaoEntregaRepositoryMemory()
}

export const repositoryPromocaoEntregaInUse = {
    inUse: repositoriesPromocaoEntregaAvaliable.memory
}
