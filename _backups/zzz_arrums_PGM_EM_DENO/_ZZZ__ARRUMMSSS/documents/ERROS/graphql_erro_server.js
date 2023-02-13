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

{
  tecnologia: 'graphql',
  local_erro: `server/index`,
  local_uso: `playground / clientHttp`,
  erro: 'Send a POST request to query this endpoint',
  traducao: 'Envie uma solicitação POST para consultar este endpoint',
  causa: 'algo errado na porta url passada ao server apollo',
  solucao: `adicionar a porta manualmente com numero`
}

{
  tecnologia: 'graphql',
  local_erro: ``,
  local_uso: ``,
  erro: 'but not in schema',
  traducao: 'mas não no esquema',
  causa: 'falta tipar no type defs o schema que esta querendo fazer no resolver',
  solucao: `tipar no type defs Query{} corretamente a consulta que quer resolver no resolver os dois tem que combinar.`
}
