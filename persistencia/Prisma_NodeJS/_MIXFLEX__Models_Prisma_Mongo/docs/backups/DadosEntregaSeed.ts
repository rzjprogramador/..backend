// import { makeID } from '@src/globals/makers/maker_identificator'
// import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'


// // // METODO SEED QUE SERA CHAMADO NO SEED PRINCIPAL DO /PRISMA
// // type ClienteSeed = Cliente

// export async function DadosEntregaSeed() {
//   // .............................................
//   /* UNIDADE */
//   const dadosEntregaSeedDOIS = await prisma.dadosEntrega.upsert({
//     update: {},
//     create: {
//       destinatario: 'destinatario DOIS',
//       remetente: 'remetente DOIS',
//       uid: makeID(),
//       Produto: {
//         create: {
//             nome: 'Encomenda16',
//             preco: 16,
//             Pedido: {
//                 connectOrCreate: {
//                     codigo: '2',
//                 },

//             }
//         },
//       },
//       enderecoEntrega: {

//       }
//     },
//   })
//   // .............................................

//   // .............................................
//   //
// }
