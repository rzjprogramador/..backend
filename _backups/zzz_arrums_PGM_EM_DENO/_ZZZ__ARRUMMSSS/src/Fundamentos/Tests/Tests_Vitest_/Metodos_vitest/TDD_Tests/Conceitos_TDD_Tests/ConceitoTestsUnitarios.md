# TEST UNITARIO

> conceito_implementacao_test_unitario:
  a expectativa final tem que ser igual ao que tem que vir de resposta do que receber da requisicao do utilizador

> variaveis_criar:
  requestData = <DADO PEDIDO ENVIADO PELO UTILIZADOR>
  action = <SUT FUNCIONALIDADE QUE QUEREMOS TESTAR -- PASSAMOS PRA ELA O PEDIDO DO CLIENTE>
  resultExpect = <O QUE ESPERA VIR DE RESPOSTA DA ACAO ENCIMA DO QUE O UTILIZADOR ENVIOU>

# CONCEITO MOCK
> Mock seria um modelo apra a a implementacao real de uma classe ou funcao ... uma copia a imitacao da classe real, se ainda nao há tem podemos copiar o mock feito e usar no codigo a real... que deu a ideia correta de como deve ser criada apartir do test ja esta testado que o mock deu certo.

> Devemos usar o conceito do mock para no test nao depender de uma classe real, os testes nao devem depender de classes reais externas...que nao sejam o sut a causa principal do test