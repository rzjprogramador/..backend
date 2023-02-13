
{
  tecnologia: 'graphql',
  rasteg: '#retornoNuloGraphql retorno nulo graphql',
  local_erro: `arquivo.resolvers.ts`,
  local_uso: `ponto de entrada de resolvedores Consulta e Mutacao`,
  erro: 'consulta: null',
  traducao: 'consulta retornando nulo',
  causa: 'falta do Objeto de Consulta ou Mutacao no resolvers ',
  solucao: `inserir o objeto de consulta Query: { referencias funcoes resolvedoras de consulta } e objeto mutacao Mutation: { referencias funcoes resolvedoras de mutacoes}`
},

{
  tecnologia: 'graphql',
  local_erro: ``,
  local_uso: ``,
  erro: 'but not in schema',
  traducao: 'mas não no esquema',
  causa: 'falta tipar no type defs o schema que esta querendo fazer no resolver',
  solucao: `tipar no type defs Query{} corretamente a consulta que quer resolver no resolver os dois tem que combinar.`
}

{
  tecnologia: 'graphql',
  local_erro: `arquivo.gql`,
  local_uso: ``,
  erro: 'GraphQLError: Syntax Error: Expected Name, found "(".',
  traducao: 'Erro de sintaxe',
  causa: 'uma atribuicao de funcaoMuatation ou funcaoConsulta errada com : "dois pontos antes do () esta errada a sintaxe',
  solucao: `remova "dois pontos que estiver antes dos params"`
},


  /* MODELO
  {
    tecnologia: 'graphql',
    local_erro: ``,
    local_uso: ``,
    erro: '',
    traducao: '',
    causa: '',
    solucao: ``
  },
  
  
  */