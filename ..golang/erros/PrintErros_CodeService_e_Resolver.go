package erros

import (
	"errors"
	"log"
)

func erroService(s string) (string, error) {
	valor := s
	if valor == "foo" {
		return "", errors.New("nao pode ser foo")
	}
	return valor, nil
}

func PrintErrosResolver() string {
	result, err := erroService("foo")

	if err != nil {
		// log.Fatalf("o erro foi :: %v", err)
		log.Fatal(err.Error())
	}
	return result
}

/*
implementacao_servico_golang:
  2funcoes : [ Service1, Resolver2]r vai pro main sera usado pela comunicacao que responde o Client.
	service vai ser recuperado no resolver... e o resolver recuperado como resposta na comunicacao com o Client.

	no_Service:
	objetivo: prepara as respostas para o resolver.
		prometa que vai retornar o (valorSucesso, error)
		se receber input apresente este input
		condicione o que sera uma falha e o que responder se dér esta casoDeFalha
		retornando 2 artefatos: return <valorVazioDoSucesso>, errors.New("feedback do erro")
		casoSucesso: retorne o valorSucesso e o valorDaFalha prometidos na assinatura da funcao:
		return valorSucesso, nil que é nulo para a falha (obs: é o invertido da resposta da falha.)

	no_Resolver:
	conceito: resolve o servico ::
	prometa devolver o sucessoResolvido

	capture o resultadoSucesso, err do servico()

		resolvendoFalha:
		verifique se ouve algum erro no servico se o err for diferente de nulo é porque tem erro
		printe este erro se tiver com : log.Fatal(err.Error())

		resolvendoSucesso:
			retorne o sucesso.
*/

/*
Printar_erros:
	#preferencia::
		log.Fatal(err.Error())
		ou se preferir mais uma mensagem antes de printar o erro use:
		log.Fatalf ("o erro foi :: %v", variavelErro )
*/
