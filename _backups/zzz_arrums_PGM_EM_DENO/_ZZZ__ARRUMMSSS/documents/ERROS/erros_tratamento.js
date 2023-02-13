{
  tecnologia: 'graphql',
  contexto: 'Tratar erros',
  doc: 'https://www.apollographql.com/docs/apollo-server/data/errors/',
  configuracao: `
  na configuracao do apollo inserir o objeto formatError que espera uma funcao que recebe o erro 
  ex:  formatError:
  `,
  algoritmo_tratamento: `
  // NA FUNCAO DE TRATAMENTO : 
  na funcao que captura o erro:
  recebe o err , pergunta
  se o err.message. comeca com startsWith('Coloque a mensagem que vc encapsulou no throw new Error da funcao que vai usar o erro')
  Retorne um novo Erro do JS com a mensagem do erro
  return new Error(err.message)  
  `,

  algoritmo_funcao_de_uso: `
  NA FUNCAO QUE VAI USAR Só retorne:
  throw new Error(`MENSAGEM DE ERRO QUE COMBINE COM A DO RTATAMENTO`)
  `,
  exemplo: `
  // FUNCAO DE TRATAMENTO DE ERRO
  const notCadastro = (err: any) => {
    if(err.message.startsWith(`${MSG.NOT_CADASTRO}`)) {
      return new Error(err.message)
    }
  }

  // USO DO TRATAMENTO NA FUNCAO QUE VAI USAR
  // VERIFICAR SE EXIST
      const { email  } = args
      const exist = collection_Users_HARD.some(u => u.email === email)
      if(exist) throw new Error(`${MSG.NOT_CADASTRO} ${email}`)

  `,
}