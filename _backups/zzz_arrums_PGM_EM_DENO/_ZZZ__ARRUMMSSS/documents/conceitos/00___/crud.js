// MODELO
{
  classificacao: 'crud',
  nome: '',
  objetivo: '',
  acao_em_forma_de: `comando || retorno do alvo incorporado`,
  para_objetivo_preciso: ``
  analogia: ``,
  exemplo: ``,
  tutorial: ``,
}
// ==========================

// ==========================
{
  classificacao: 'crud',
  nome: 'criar',
  objetivo: 'criar',
  acao_em_forma_de: `comando`,
  para_objetivo_preciso: 'inserir recebido na base de dados do alvo',
  analogia: ``,
  exemplo: `
  function createPedido(data: any) {
    bdLojaVendas.pedidos.push({ codigo: data.codigo, info: data.info })
  }
  
  
  createPedido({ codigo: '2', info: 'info pedido dois' }) // USO_CLIENTE
  
  console.log(bdLojaVendas) // VER USO - INSERCAO
  `,
  tutorial: ``,
}

{
  classificacao: 'crud',
  nome: 'pegar todos da tabela do dado',
  objetivo: 'mostrar todos',
  acao_em_forma_de: `retorno do alvo incorporado`,
  para_objetivo_preciso: 'ir ate onde esta o alvo do objetivo e retorna-lo',
  analogia: ``,
  exemplo: `
  function getAllPedidos() {
    return bdLojaVendas
  }
  `,
  tutorial: ``,
}

//

  {
    classificacao: 'crud',
    nome: 'atualizar',
    objetivo: 'atualizar',
    acao_em_forma_de: `retorno do alvo modificado`,
    para_objetivo_preciso: `
      1 - RECEBER O IDENTIFICADOR UNICO, E O DADO/OBJETO A SER MODIFICADO

      2 - EXTRAIR AS INFORMACOES DO DADO RECEBIDO - PARA AGIR EM CADA PROPRIEDADE

      3 - ENCONTRAR NA TABELA COM METODO DE ARRAY FIND() O OBJETO INTEIRO ONDE O OBJ.ID É MUITO IGUAL AO ID RECEBIDO

      4 - COM O OBJ ENCONTRADO >> CHAMO AS PROPS A SER MUDADA E ATRIBUO AS PROPS RECEBIDAS QUE SOLICITARAM MUDANCAS

      5-  DEVOLVER O DADO MODIFICADO

      6- DISPONIBILIZAR_USO_CLIENTE PARA ENVIAR O QUE ESPERO RECEBER 
      ( IDENTIFICADOR, { dado: 'MODIFICACAO', dado2: 'MODIFICACAO' } )  
      >>> PARA FUNCIONALIDADE DAR A RESPOSTA
    `
    analogia: ``,
    exemplo: `
    function updateConteudoDoPedido(id: any, data: any) {
      const { info, info2 } = data
    
      const newDataUp = bdLojaVendas.pedidos.find((i) => i.id === id)!
    
      newDataUp.info = info
      newDataUp.info2 = info2
    
      // console.log(newDataUp)
    
      return newDataUp
      
    }
    
    //
    updateConteudoDoPedido(2, { info: 'NEW INFO', info2: 'NEW INFO2' })
    `,
    tutorial: ``,
  }

  //

  {
    classificacao: 'crud',
    nome: 'deletar',
    objetivo: 'deletar',
    acao_em_forma_de: `comando || retorno do alvo incorporado`,
    para_objetivo_preciso: ``
    analogia: ``,
    exemplo: ``,
    tutorial: `https://www.youtube.com/watch?v=WA4deYsThQ0`,
  }
  // ==========================
  