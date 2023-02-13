// MODELO
{
  area: 'POO',
  contexto: ``,
  contextualizando: ``,
  code: `
    `,
  explicacao: `
  `,
}


// ===============

{
  area: 'POO',
  contexto: `propriedades`,
  contextualizando: `definir propriedades da classe`,
  code: `
  props: Omit<User, 'id'>, id?: string,  
    `,
  explicacao: `receber todas props da classe User menos a "id", TODO depois vou receber o id como opcional para Entidade que ja tem, nao recriar ou pra nova criar`
}

{
  area: 'POO',
  contexto: `objeto`,
  contextualizando: `
  atribuir valores que vier das props da classe para novo Objeto`,
  code: `
  Object.assign(this, props)
    // 
    `,
  explicacao: `
  A cada propriedade vai adicionar o this, Para nao atribuir cada campo recebido ao campo da classe
  `,
}

{
  area: 'POO',
  contexto: `statico`,
  contextualizando: `metodo statico`,
  code: `
  static create({ nome, estabelecimento, email, password }: User) {
    const user = new User({ nome, email, })
    return user
  }
    `,
  explicacao: `
  O CONSTRUTOR É PRIVADO - PARA CRIAR FORA A ENTIDADE USE A CLASSE.CREATE: USE EM TEST
  `,
},

{
  area: 'POO',
  contexto: `test`,
  contextualizando: `alternativa sem sentido se nao passar`,
  code: `
  // passando a alternativa semSentido:

  new CreateClienteFisico( { create: async (data) => {}, } )

    `,
  explicacao: `
  na injecao de dependencia ao inves de passar um objeto de dependencia posso passar
  um objeto com o metodo que ele espera do contratado o arg e retornar nada um objeto vazio.
  é uma alternativa sem sentida somente só usaria apra passar rapido em tests e nao passar o repositorio externo ..mas tem uma solucao repositorio inMemory ao inves disso , mas só pra conhecer :
  `,
}