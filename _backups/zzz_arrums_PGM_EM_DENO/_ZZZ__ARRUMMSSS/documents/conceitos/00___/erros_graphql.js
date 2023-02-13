
// LER ERRO GRAPHQL NO CONSOLE
{
  apontando_o_erro: `apos a classe:: GraphQLError: ela vai apontar a classe de Erro`,
  possiveis_classes_de_erros: {
    Syntax_Error: `se for Syntax Error o erro esta na tipagem no typeDefs dentro de Query ou Mutation na tipagem.`,
  },
  enconrtar_erro_na_mensagem_de_erro: {
    o_que_esperava: `vem depois do "Expected"`,
    o_que_encontrou: `vem depois do found`,
    solucao: `arrumar ou remover o que esta depois do found dentro de aspas "no caso do exemplo eram parenteses que nao deviam estar la."`
  },

  exemplos: {
    exemplo_completo_erro_no_console: `[ERROR] 16:31:08 GraphQLError: Syntax Error: Expected Name, found ")".`,
  },

  erros_possiveis: {
    sintaxe:{
      tipagem_consulta_query: `uma consulta ja é uma funcao nao precisa dos () parenteses só referenciar a funcao igual feito no objeto Query: {},`,
    },
    solucao: `retirar os parenteses para referencias de metodo na tipagem de consulta Query nao precisa dos () as funcoes são só referencias ..obs: só coloca parenteses se a funcao pedir parametros.`,
  }

  ler_erros_no_uso_playground: {

    exemplo_de_erro: `"message": "Variable \"$comTipoUser\" of type \"Boolean\" used in position expecting type \"Boolean!\".",`,

    explicando_erro: `dentro da variavel "message"`\"variavel com problema \ tipo do problema exemplo : type \ onde esta o problema na consulta do play ex: \"Boolean"\"o que ele esperava : usado no tipo de espera de posição"\ "A CORRECAO NA ULTIMA PARTE - ESPERAVA: \Boolean! >> COM OBRIGATORIDADE NO FINAL",
  }

}