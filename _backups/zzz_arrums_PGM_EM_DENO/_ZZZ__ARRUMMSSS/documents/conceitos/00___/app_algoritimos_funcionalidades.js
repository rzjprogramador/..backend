{
  metodo_verificar_se_ja_existe_no_banco_via_prisma_a_entidade: `
  export async function existsUser(email: any): Promise<boolean> {
    //   const { email } = unique
      const exists = await db.user.findUnique({
        where: { email },
      })
      return !!exists
    }
    
    `,
    conceito: `
    - recebe um email
    - vai no banco. na tabela. da um findIndex onde o email é muito igual ao email recebido
    - retorna um boleano se encontrou ou nao
    `,
}