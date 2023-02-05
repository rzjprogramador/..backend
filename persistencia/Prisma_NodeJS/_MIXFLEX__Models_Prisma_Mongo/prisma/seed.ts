import { prisma } from '../src/external/database/orm_prisma/_connect_db/prisma_client'
import { ClienteSeedMaker } from '../src/modules/_seeds/ClienteSeedMaker'
import { ProdutoSeedMaker } from '../src/modules/_seeds/ProdutoSeedMaker'
import { EntregaSeedMaker } from '../src/modules/_seeds/EntregaSeedMaker'
import { ComprarProdutoMaker } from '../src/modules/_seeds/ComprarProdutoMaker'

async function main() {
  // TODOS OS GERADORES DE SEED DE CADA MODULO
  await ClienteSeedMaker()
  await ProdutoSeedMaker()
  await EntregaSeedMaker()
  await ComprarProdutoMaker()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
