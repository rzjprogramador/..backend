// PRISMA USO
{
  sempre_que_for_fazer_consulta_especifica: `
  entao: expresse uma condicional "where/onde" a chave do obejto seja.
  exemplo:
  await prisma.user.findUnique({ where: email })
  // espere em prisma.user uma buscaUnica { onde: email é o email passado }
  `,
}