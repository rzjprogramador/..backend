package main

import "fmt"

type Pessoa struct {
	Nome string
	Idade uint
}

func main() {
	// Print seja qual for é só para console , Sprint seja qual for retorna a string formatada da pra usar no return o seu retorno.
	
	// vc tem que expressar com %<tag> a forma que quer formatar
	// foo := "valorFoo"
	// fmt.Printf("%vs", foo)
	/* *************************************************** */

	// Sprintln - formata a saida da variavel do tipo que ela é apra string, È tipo o ToString
	// var numero1, numero2 , numero3 = 100, 200, 300
	// concatenada := fmt.Sprintln(numero1, numero2, numero3) 
	// fmt.Println(concatenada)
	/* *************************************************** */

	// var n1, n2 , n3 = 100, 200, 300
	// concatenada := fmt.Sprintf("o valor da 1 é %d - da 2 é %d - da 3 é %d > fim", n1, n2 , n3) 
	// fmt.Println(concatenada)
	/* *************************************************** */
	
	pessoa1 := Pessoa{
		Nome: "Reinaldo",
		Idade: 45,
	}

	result := fmt.Sprintf("Dados >> %#v", pessoa1)
	fmt.Printf(result)
	
	
	


}