package main

import "fmt"

var foo interface{}

func main() {
	foo = 10
	foo = true
	foo = "bar"
	fmt.Println(foo)
}

/*
QualquerInterface: ModelTipos{
		Linguagem: "Golang",
		Nome: "QualquerInterface",
		Keyword: "interface{}",
		Representacao_PodeInstanciar: "qualquer tipo de valor é livre",
		Conceito: "é semelhante ao tipo any de outras linguagens, aceita qualquer mudanca de tipo e valor na variavel.",
		Pode_Reescrever_Valor_Da_Variavel: true,
		Uso: "",
		Aplicabilidade: "é um tipo inseguro, só use quando realmente nao sabe o que pode vir para esta variavel ex: em recebimentos especificos http.",
		ValorDefault_SeNadaForPassado: "nil // nulo - NaoTemNadaDeValor",
		Exemplo: "``` var foo interface{} ```",
	},

*/