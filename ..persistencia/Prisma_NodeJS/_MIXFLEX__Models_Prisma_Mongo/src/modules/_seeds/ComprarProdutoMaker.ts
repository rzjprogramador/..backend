import { makeID, makeCodigo } from '@src/globals/makers/maker_identificator'
import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'


/* ...  */

export async function ComprarProdutoMaker() {
  // .............................................
  /* UNIDADE */
  const entrega_15 = await prisma.compraProduto.upsert({
    where: { codigo: '1' },
    update: {},
    create: {
        codigo: '1',
        uid: makeID(),
        Produtos: {
            connectOrCreate: {
                where: {
                    nome: 'encomenda1_15',
                },
            },
        },
        Entrega: {
            create: {
                remetente: 'remet_4',
                codigo: '4',
                cep: '111',
                complemento: '111',
                logradouro: '111',
                destinatario: 'dest_1',
                numero: '3',
                uid: makeID(),
            },
        },


    }


  }) //.............................................



} //.............................................
