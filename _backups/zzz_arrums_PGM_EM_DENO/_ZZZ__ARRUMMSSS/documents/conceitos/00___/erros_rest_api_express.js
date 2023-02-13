{
  erro_envio_http: `
  Quando ao tentar postar via http e retornar um html com :
  <pre>Cannot POST /create-pedido</pre>
  traducao: Não é possível POST /<NOME DA ROTA>

  causa: FALTA A VARIAVEL DA ROTA CHEGAR NO ROTEADOR PRINCIPAL

  solucao: INCLUA A VARIAVEL QUE CHAMA A ROTA NA COLECAO DE ROTAS QUE VAI PARA A ROTA PRINCIPAL 

  `
}