package variavel_instanciaDadoDinamico_OuLiteral

type ResExemplo struct {
	Texto string
	Numero float64
	Logico bool
}

func Exemplo() ResExemplo{
	var texto = "Hello Word"
	var numero = 10.11
	var logico = true

	res := ResExemplo{
		Texto: texto,
		Numero: numero,
		Logico: logico,
	}
	return res
}

func RetornaNumero10() int{
	return 10
}
func RetornaNumero20() int{
	return 20
}
func Ex_OperacaoSobreResultadoVindoDeOutrasFuncoes() int{
	return RetornaNumero10()+RetornaNumero20()  
	// output: 30 // somou o retorno de 2 funcoes.
}
