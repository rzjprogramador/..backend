# TDD
## VALIDAR APRAMS ENVIADOS PELO CLIENT

### 1 CASE >> CONTROLE DO CASE
> validar parametros vindos do Client
> > retornar status de erro se vier faltando algum:
> no_arquivo_test:
- action: faz o sut instanciando a classe alvo
- output: usa esta instancia chamando sua acao/metodo que ela vai ter passa o request/recebimento...isto sera uma resposta
- input: mockar o que será este recebimento

> no_arquivo_producao: responder o prometido no test
- action: cria a classe
- output: cria a acao/metodo passando o recebimento/request tipado
- input: na acao da a resposta do que recebeu de acordo com objetivo do test, como prometeu falha responda com a falha marretada de inicialmente.
