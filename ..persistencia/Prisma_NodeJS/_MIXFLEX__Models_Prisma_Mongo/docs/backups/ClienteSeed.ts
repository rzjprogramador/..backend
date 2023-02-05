// import { makeID } from '@src/globals/makers/maker_identificator'
// import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'


// // // METODO SEED QUE SERA CHAMADO NO SEED PRINCIPAL DO /PRISMA
// // type ClienteSeed = Cliente

// export async function ClienteSeedMaker() {
//   // .............................................
//   /* UNIDADE */
//   const clienteAdminSeed = await prisma.cliente.upsert({
//     where: { email: 'adminSedd@email.com' },
//     update: {},
//     create: {
//       nome: 'nomeADMINSedd',
//       usernome: 'usernomeADMINSedd',
//       email: 'emailADMINSedd@email.com',
//       password: 'passwordADMINSedd@email.com',
//       tipoCliente: 'cnpjADMINSedd',
//       uid: makeID(),
//     },
//   })
//   // .............................................

//   // .............................................
//   //
// }
