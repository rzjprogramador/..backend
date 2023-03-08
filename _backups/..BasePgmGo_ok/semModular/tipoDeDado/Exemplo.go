package main

import main1 "github.com/rzjprogramador/PgmBase/main"

// EXEMPLO

type ExemploVerificarTipoDeDadoType struct {
	Texto string
	NumeroDecimal float64
	Logico bool
}

func main() {
	main1.ShowObject(Exemplo_VerificarTipoDeDado())
}

func Exemplo_VerificarTipoDeDado() ExemploVerificarTipoDeDadoType{
	var texto = "Hello Word"
	var numeroDecimal = 10.11
	var logico = true

	res := ExemploVerificarTipoDeDadoType{
		Texto: texto,
		NumeroDecimal: numeroDecimal,
		Logico: logico,
	}
	return res
}