// {
//   tecnologia: `node & prisma`,

//   conceito: ``,
  
//   aviso_importante: '',

//   efeitos: ``,

//   script: ``,
// }

//

// ==================

{
  tecnologia: `node & prisma`,
  
  conceito: `script para resetar banco em producao e rodar migrate e seed do prisma`,
  
  aviso_importante: 'NAO RODE ESTE SCRIPT COM PROJETO JA NO AR EM PRODUCAO',

  efeitos: `vai resetar banco em producao e rodar migrate e seed do prisma`,

  script: `"nao:reset:prod": "npx dotenv-cli -e .env -- npx prisma migrate reset --force --skip-generate --preview-feature",`,
},

//

{
  tecnologia: `node & prisma`,
  
  conceito: `pretest : script criar um banco de test populado com dados seed`,
  
  aviso_importante: 'PODE RODAR ESTE SCRIPT QUE NAO VAI INTERFERIR NO BANCO PRINCIPAL EM PRODUCAO',

  efeitos: `Vai criar um banco de test com os dados do arquivo .env.test e vai popular com o seed que definimos em seed.ts`,

  script: `
  "pretest": "npx dotenv-cli -e .env.test -- npx prisma migrate reset --force --skip-generate --preview-feature"
  `,
}