package descobertas

import "fmt"

var erro error
var boleano bool
var textoDefault string
var numDefault float32

type Estrutura struct{}

func ValoresZeroIniciais() {
	// descobrir valoresZero de:
	fmt.Println("erro: valor_zero :: ", erro)                                                        // de_erro: nil
	fmt.Println("boleano: valor_zero :: ", boleano)                                                  // de_bool: dfalse
	fmt.Println("texto: valor_zero :: ", textoDefault)                                               // de_string: ""
	fmt.Println("numero: valor_zero :: ", numDefault)                                                // de_numero: 0
	fmt.Println("estrutura: recupera com NomeEstruturaEChavesVazia{} , valor_zero :: ", Estrutura{}) // de_struct : {}
}
