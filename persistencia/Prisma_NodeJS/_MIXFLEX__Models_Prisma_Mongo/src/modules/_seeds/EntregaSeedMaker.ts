import { makeID } from '@src/globals/makers/maker_identificator'
import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'


/* ...  */

export async function EntregaSeedMaker() {
  // .............................................

  /* UNIDADE */
  const entrega_1 = await prisma.entrega.upsert({
    where: { codigo: '1' },
    update: {},
    create: {
        remetente: 'remet_1',
        codigo: '1',
        cep: '111',
        complemento: '111',
        logradouro: '111',
        destinatario: 'dest_1',
        numero: '1',
      uid: makeID(),
    },
  }) // .............................................

  /* UNIDADE */
  const entrega_2 = await prisma.entrega.upsert({
    where: { codigo: '2' },
    update: {},
    create: {
        remetente: 'remet_2',
        codigo: '2',
        cep: '111',
        complemento: '111',
        logradouro: '111',
        destinatario: 'dest_1',
        numero: '2',
      uid: makeID(),
    },
  }) // .............................................

  /* UNIDADE */
  const entrega_3 = await prisma.entrega.upsert({
    where: { codigo: '3' },
    update: {},
    create: {
        remetente: 'remet_3',
        codigo: '3',
        cep: '111',
        complemento: '111',
        logradouro: '111',
        destinatario: 'dest_1',
        numero: '3',
      uid: makeID(),
    },
  }) // .............................................


}
