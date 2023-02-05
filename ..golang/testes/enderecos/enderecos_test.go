package enderecos_test

import (
	"testing"

	"github.com/MasterGolang/testes/enderecos"
)

func TestTipoEnderecos(t *testing.T) {
	// chamar funcao a ser testada e avaliar seu retorno
	input := "rua Paulista"
	sutRecebido := enderecos.TipoEnderecos(input)
	expected := "Rua"

	if sutRecebido != expected {
		t.Error("QUEBROU  :: O Recebido é diferente do esperado")
	}
}

func TestQualquer(t *testing.T) {
	n1 := 1
	n2 := 2
	if n1 < n2 {
		t.Logf("ok  .. >> %v nao é maior que a %v", n1, n2)
	}
	// else {
	// 	t.Errorf("Quebrou .. >> %v nao é maior que a %v", n1, n2)
	// }
}
