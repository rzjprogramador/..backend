package main

import "fmt"

func recebeMapeado(obj map[string]int) map[string]int{
	input := obj
	return input
}

func main() {
	obj := map[string]int{"key1": 10, "key2": 20}
	fmt.Println(recebeMapeado(obj))
}

/*
Map
Declaracao: "após a clausula 'map' defina entre parensenteses o tipo da chave e fora dele o tipo do valor...e como retorno da funcao a mesma coisa."
ExemploDeclaracao: " map[string]int",
ExemploUsoPreenchimento: " map[string]int{"key1": 10, "key2": 20}",

Diferencial: "Só podem ser do tipo declarado >> [todas as chaves ] e todos os valores ",

Aplicabilidade: "quando deseja receber um objeto e impor regras dos valores dos tipos da chave e valor, obrigar que o objeto que esta chegando esteja em conformidade com o mapa.",
*/