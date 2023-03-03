package variavel_protecao_contra_reescrita_de_valor

import "fmt"

type ProtecaoReescritaVariavel struct {
	Artefato string
	Nome string
	RecursoDisponivel bool
	TemDinamicaInferencia bool
	PodeSerDeclaradaSemEscopo bool
	QualSuaProtecaoContraReescrita string
	Conceito string
	Keyword string
	SinalDeAtribuicao string
	Exemplo string
}

func createProtecao (p ProtecaoReescritaVariavel) ProtecaoReescritaVariavel {
	return p
}

func ExecuteProtecao() {

	fmt.Println(
		createProtecao(variavel_protecao_contra_reescrita_de_valor_Dinamica_Reatribuivel_Golang),
		createProtecao(variavel_protecao_contra_reescrita_de_valor_Dinamica_NaoReatribuivel_Golang),
		createProtecao(variavel_protecao_contra_reescrita_de_valor_Constante_Golang),
		createProtecao(variavel_protecao_contra_reescrita_de_valor_Final_Golang),
	)

}

/*
exemplos variavel_protecao_contra_reescrita_de_valor .Golang:

	var var1 = "fooBar"
// var1 = "outro valor" // nao pode ser reescrita
//********************

	const varConstante = "foo"
	varConstante = "outroValor" // ops nao pode ser reescrita por ter sido declarada como constante

	// ****************


*/