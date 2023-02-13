# IMPLEMENTACAO TESTS

> objetivo:
  - ter o objeto da classe principal pra testar o que fará a classe principal
  - ter o objeto da classe baixo nivel pra testar os comportamentos da baixo nivel

> classe_baixo_nivel_fazer_mock
baixo nivel que vou testar sua funcionalidade que ira servir - essa sim faço uma versao mockStub pra testar sua integracao e o que seu metodo vai fazer.

obs: Ao fazer esta versao da classe encapsulo ela em uma funcaoFabrica para poder depois da classe feita retornar uma nova instancia dela ..assim onde preciso usar um objeto instancia da classe é só guardar em uma var esta funcao fabrica sem precisar instancia com new.

> classe_alto_novel:
nao preciso fazer a versao mockStub da classe Principal - apenas chamo a de producao e quardo numa var sut que vou usar na funcao fabrica makeSut ()

> contrato_injecao_de_dependencias:
criar um contrato SutTypes com o contrato que retornara a fabrica de injecao de dependencias com seus objetos variaves disponiveis para as suites de tests

> implementacao_fabrica_injecao_de_dependencias:
encapsular em uma funcao fabrica makeSut () >> ONDE NELA FAÇO O QUE FARIA NA INJECAO DE DEPENDENCIAS
 - tenho que ter a "varCaptura" da principal dou pra ela uma new instancia da Principal em producao
 - tenho que ter a "varCaptura" da integrada/composta dou pra ela esta mockadaStub
e "retorno" um objeto com estas variaveis pra usar separadas nos tests

---
