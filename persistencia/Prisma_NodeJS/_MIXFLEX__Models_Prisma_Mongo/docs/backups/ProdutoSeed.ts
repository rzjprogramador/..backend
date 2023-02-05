// import { makeID, makeCodigo } from '@src/globals/makers/maker_identificator'
// import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'


// // // METODO SEED QUE SERA CHAMADO NO SEED PRINCIPAL DO /PRISMA
// // type ClienteSeed = Cliente

// export async function ProdutoSeedMaker() {
//   // .............................................
//   /* UNIDADE */
//   const produtoAdminSeed = await prisma.produto.upsert({
//     where: { nome: 'Encomenda15' },
//     update: {},
//     create: {
//       nome: 'Encomenda15',
//       preco: 15,
//       uid: makeID(),
//       Pedido: {
//         create: {
//             codigo: makeCodigo(),
//             cliente: {
//                 connect: {
//                     email: 'emailADMINSedd@email.com',
//                 }
//             }
//         },
//     },
//       dadosEntrega: {
//           create: {
//               uid: makeID(),
//               destinatario: 'destinatarioUM',
//               remetente: 'remetenteUM',
//               enderecoEntrega: {
//                   create: {
//                       cep: '11111000',
//                       logradouro: 'Rua UM',
//                       numero: '1',
//                       complemento: 'complementoUM',
//                       uid: makeID(),
//                       cidade: {
//                           create: {
//                               nome: 'Sao Paulo',
//                               cep_inico_fim: '11111000',
//                               estado: {
//                                   create: {
//                                       nome: 'Sao Paulo',
//                                       uf: 'SP',
//                                       uid: makeID(),
//                                   }
//                               }
//                           }
//                       }
//                   }
//               }

//           }
//       }
//     },
//   })
//   // .............................................

//   // .............................................
//   //
// }
