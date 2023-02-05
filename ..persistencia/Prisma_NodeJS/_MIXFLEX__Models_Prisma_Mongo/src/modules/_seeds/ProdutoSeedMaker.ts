import { makeID, makeCodigo } from '@src/globals/makers/maker_identificator'
import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'


/* ...  */

export async function ProdutoSeedMaker() {
  // .............................................
  /* UNIDADE */
  const entrega_15 = await prisma.produto.upsert({
    where: { nome: 'encomenda1_15', },
    update: {},
    create: {
        nome: 'encomenda1_15',
        preco: 15,
        uid: makeID()
    }


  }) //.............................................



} //.............................................
