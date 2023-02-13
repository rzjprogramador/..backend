# CASOS DE TEST

## PARAMETROS:
> RECEBIMENTO DE PARAMS
- Se falhar der status 400 com erro classe de "Falta de Param" :: new MissingParamError ('parametro')
-
> VALIDACAO DE PARAMS
- Se falhar der status 400 com erro classe de "Param Invalido" :: new InvalidParamError ('parametro')

> TRATAMENTO DE ERRO NO SERVIDOR - SE DER EXCESSAO NO METODO USADO QUE VEM DA CLASSE BAIXO NIVEL INTEGRADA
- O que pode causar este erro : [qualquer dado de tipo ou algo inesperado que venha para este metodo, causando um erro no servidor e derrubando a app] ...entao Se o metodo usado der excessao, retornar status 500 Internal Server Error com emnsagem amigavel para o Client : usar customizados :: serverError( new ServerError() )