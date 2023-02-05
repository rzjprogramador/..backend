import { makeID } from '@src/globals/makers/maker_identificator'
import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'


/* ...  */

export async function ClienteSeedMaker() {
  // .............................................
  /* UNIDADE */
  const nome_1 = await prisma.cliente.upsert({
    where: { email: 'nome_1' },
    update: {},
    create: {
      nome: 'nome_1',
      usernome: 'usernomeADMINSedd',
      email: 'nome_1',
      password: 'passwordADMINSedd@email.com',
      tipoCliente: 'cnpjADMINSedd',
      uid: makeID(),
    },
  }) // .............................................

  /* UNIDADE */
  const nome_2 = await prisma.cliente.upsert({
    where: { email: 'nome_2' },
    update: {},
    create: {
      nome: 'nome_2',
      usernome: 'ComprandoDOIS',
      email: 'nome_2',
      password: '123',
      tipoCliente: 'cnpjADMINSedd',
      uid: makeID(),
    }
  }) // .............................................

   /* UNIDADE */
   const nome_3 = await prisma.cliente.upsert({
    where: { email: 'nome_3' },
    update: {},
    create: {
      nome: 'nome_3',
      usernome: 'ComprandoDOIS',
      email: 'nome_3',
      password: '123',
      tipoCliente: 'cnpjADMINSedd',
      uid: makeID(),
    }
  }) // .............................................

}
