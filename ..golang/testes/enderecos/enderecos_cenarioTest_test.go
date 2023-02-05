package enderecos_test

import (
	"testing"

	"github.com/MasterGolang/testes/enderecos"
)

type CenarioTestTipoEndereco struct {
	input    string
	expected string
}

func TestCenarioTipoEnderecos(t *testing.T) {

	// cenarios é um array de objetos com "inputs" & "afirmacaoRetornoCertoDaFuncaoSut"

	scenarios := []CenarioTestTipoEndereco{

		{"rua qualquer", "Rua"},
		{"avenida qualquer", "Avenida"},
		{"logradouro qualquer", "Logradouro"},
		{"foo foo", "tipo invalido"},
	}

	for _, scenario := range scenarios {
		sut := enderecos.TipoEnderecos(scenario.input)
		if sut != scenario.expected {
			t.Errorf("QUEBROU  :: A AfirmacaoExpected %v ... é diferente do ResultadoCorreto: %v", scenario.expected, sut)
		}
		/* se quiser pode mostrar no console algum feedback do sucesso do test ..por enquanto nao necessario.
		else {
			t.Log("testado com sucesso !")
		}
		*/
	}

}

/*
nome: CenarioEmTestes
conceito: cenarios é um array de objetos com "inputs" & "afirmacaoRetornoCertoDaFuncaoSut"
-  chamar funcao a ser testada e avaliar seu retorno
o que defini no struct :: 1º o input , 2º o esperado a asserção/afirmacao/ expected o que deve retornar da funcao.

fazer um loop na estrutura do cenario indo em cada input e afirmacaoEsperada
digo que meu sut a ser testado é a funcao Principal recebendo o meu cenario.input
avalio: se o meu sut é diferente do que espero se sim :
faço print com t.Errorf mostrando em justa posicao a  minha AfirmacaoExperada sendo diferente do resultado que veio da execucao do meu sut da funcaoPrincipal a ser testada.
*/
