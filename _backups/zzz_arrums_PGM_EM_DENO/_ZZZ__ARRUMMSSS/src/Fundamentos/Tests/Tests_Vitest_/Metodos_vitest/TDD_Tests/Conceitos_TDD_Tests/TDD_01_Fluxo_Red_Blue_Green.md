# TDD FLUXO :
- tutorial: RogerMello https://youtu.be/e5wX3rs-P1s

comeco:
 modo_red: comecar sempre pelo arquivo de test , e depois fazer sumir o red com modo blue.

modo_blue:
  implementar no arquivo producao o que prometeu obter e usar no test...com o minimo de codigo possivel literal , marretado pra passar logo ... depois vai refatorando pra dinamico

modo_green:
  implementando o red sumira do test e tudo passara ficara verde o feedback no console test.

assercao:
  cada "tipo" de  variavel  uma de cada lado há passada ao  expect e do outro lado sao comparadas com o metodo ou logica que esta no meio ou final.


testUnitario:
  testando_funcao:
  o que vai tertar ..tem que garantir que é de origem prototipal que promete ser ...pra saber se é asserte qual é sua instancia...verificando o contrutor do prototipo...

### PENSE EM TESTS

- em test de mensagens que tem que fazer match em mais de um lugar ex: Error, Customns, Feedback, no Test para match ... guarde em uma var e use no test e no codigo esta var..pra ter um polo unico.
-
- evitar mockar, usar no test variaveis, objetos, funcoes  que implementaram...porque  se houver motivos pra mudar nao mudar no test.

feedback: para o Client quando é um badRequest ou similares erros dele, temos que mandar mensagem onde ele errou e como pods consertar...se nao for campos sensiveis com dados sigilosos.