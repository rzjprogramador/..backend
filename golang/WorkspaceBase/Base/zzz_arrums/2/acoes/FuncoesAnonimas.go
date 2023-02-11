package acoes

import (
	"fmt"
	"log"
)

func init() {
	fmt.Println("executando func init do arquivo : acoesAnonimas")
}

func AcoesAnonimas() {

	func(texto string) {
		log.Println(texto)
	}("valor param texto")

	varCapturaRetorno := func(texto string) string {
		return fmt.Sprintf("Parte 1 valor vindo dentro da funcao >> %s", texto)
	}("esta é a parte 2 do valor :: vindo do parametro")
	fmt.Println(varCapturaRetorno)

}

/*
acoes_anonimas:
declara a funcao sem nome, e logo apos executa com os () parenteses.
se tiver parametros posso declara-los normal dentro dos parenteses depois da clausula func
a resposta dos param os args recupero nos () de execucao apos o bloco da funcao.

aplicabilidade: posso ter mais que um retorno se concatenar o que tem dentro da funcao com o recebido nos params.

retorno :
posso capturar esta funcao em uma var e o que retorna depois da clausula return concatenar com o que veio do param.
obs: se vai ter retorno tenho que especificar tambem na assinatura da funcao o seu tipo de retorno.
*/
