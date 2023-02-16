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
Nome: "interface qulquerTipo",

Keyword: "interface{}",

Deixa_Variavel_Receber: "Qualquer tipo de dado."

Pode_Reescrever_Valor_Da_Variavel: true,

Uso: "interface{} // na declaracao"

Conceito: interface{} é semelhante ao tipo any de outras linguagens, aceita qualquer mudanca de tipo e valor na variavel.

Aplicabilidade: é um tipo inseguro, só use quando realmente nao sabe o que pode vir para esta variavel ex: em recebimentos especificos http.

*/