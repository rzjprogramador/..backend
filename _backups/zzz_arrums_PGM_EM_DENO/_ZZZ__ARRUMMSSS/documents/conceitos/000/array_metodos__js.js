metodos_para_array_js = {

  metodo_procurar: {
    metodo: `find()`,
    recebe: `funcao com parametro interador `,
    processo: `com este interador assume os items e sua propriedade dentro do array e passa a cada volta fazendo o que for instruído encima do que ja temos.`,
    instrucao_ao_interador: `retornar interador.propriedade <condicao> recebido`
    retorna_resultado: `sim`,
    implementacao: `CHAMO A TABELA_BD APLICO O FIND() PARA ARRAYS JS - 
  PERCORRO PARA CADA ALVO.IDENTIFICADOR PASSADO VEJO SE É MUITO IGUAL AO IDENTIFICADOR RECEBIDO DO CLIENT VIA ARGS E CAPTURO O RESULTADO..ASSIM TEREI O IDENTIFICADOR QUE FOI RECEBIDO DO CLIENT`,
  exemplo: `
  collection_Users_HARD.find(u => u.id === id) 
  `,
  //

  metodo_reescrever: {
    metodo: `splice()`
    recebe: `(index, 1, newUser)`,
    processo: ``,

    implementacao: `
    VOU NA TABELA BD USO O SPLICE( QUE ESPERA A POSICAO CAPTURADA, A QUANTIDADE DE VALOR QUE VAI MUDAR :: 1, E ONDE ATUARÁ newEntidade)
    `,
    exemplo: `
    exemplo:
    collection_Users_HARD.splice(index, 1, newUser)
    `,
  }
//
  
    
  }


