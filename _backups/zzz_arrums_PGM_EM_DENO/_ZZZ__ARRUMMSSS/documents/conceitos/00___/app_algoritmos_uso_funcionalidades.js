

{
  verificar_se_existe: {
    no_objetivo_verificar_se_ja_existe_no_banco_a_entidade: `
  const exists = await existsUser(email)
  if (exists) {
    throw new Error(`${MSG_ERROR_DEFAULT} ${EXIST.MESSAGE}`)
  }
  `,
  conceito: `se ja existir na base de dados retorna daqui..com uma mensagem de excessao`,
  uso: `Nao usar quando o breakpoint é graphql porque nao vai chegar aqui no servico se der excessao vamos trata-lo e bloquea-lo no graphql... e se passar do graphql vai processar desnecessariamente esta verificacao porque se passar do graphql vai vir aqui no servico querendo só salvar...e nao verificar de novo no banco...NAO USE COM GRAPHQL`
  },

  tentar: {
    bloco_try_catch: {
      uso: `Nao usar no servico por enquanto com graphql sendo o breakpoint - nao ha a necessidade sem o try catch nao esta cracheando e derrubando o servidor só esta voltando nulo os campos apos a excessao, tambem nao esta salvando no banco excessao...isto sem verificacoes no graphql ainda.`
    }
  }
}