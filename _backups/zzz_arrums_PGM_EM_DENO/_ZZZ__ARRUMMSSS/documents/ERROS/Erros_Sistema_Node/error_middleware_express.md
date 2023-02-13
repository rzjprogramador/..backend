
> captura_de_erros_request:
ao lancar um new Error ou throw na implementacao, quando ela sofre uma requisicao do client
o erro é capturado na variavel de erro do middle express em MiddleErrorsExpress

- obs: como a var error que captura esta tipada com o Error do JS
  ao lancar um new Error() ela mostra os nomes de erros do js ex: ReferenceError, etc...
  ao lancar um throw ela

> view_retornos_feedback:
e retorna pro front o que tem de reotrno na funcao middle
e mostra no console a explicacao do erro na implementacao

---

# ERROS NATIVOS JS
### capturados_ao_lancar_instancia_do_erro_js : new Error('message')
## Erro_interno_servidor_status_500:
> ReferenceError :
- captura: QUEM PEGA ESTE ERRO É O JS OS CUSTOMIZADOS NAO PEGAM É MOSTRADO O NOME DO ERRO NO CONSOLE ERROR,
- origem: É UM ERRO DO DEV OU INTERNO, OU DO BANCO,
- causa: A referencia pode nao existir, nao foi declarada

---
