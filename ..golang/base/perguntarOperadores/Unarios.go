package perguntarOperadores

import "fmt"

func Unarios() {
	aumentar := 10
	aumentar++
	aumentar++
	aumentar += 55

	diminuir := 20
	diminuir--
	diminuir--
	diminuir -= 10

	restoDivisao := 10
	restoDivisao %= 3

	fmt.Println(aumentar)
	// comecou com 10, aumentou 2 vezes de 1 deu 12, aumentou 55, total: 67

	fmt.Println(diminuir)
	// comecou com 20, diminuiu 2 vezes de 1 deu 18, diminuiu -10 total: 8

	fmt.Println(restoDivisao)
	// comecou com 10 , fez o resto da divisao por 3 , entao 10 divido por 3 da 3 e resta 1, o resultado de saida é sempre o que resta da divisao passada.
}

/*
OPERADORES UNARIOS
entrada:
	descricao: operadores curtos que agem em uma referencia por vez.
	aplicabilidade: Aumentar, Diminuir, Resto da Divisao em referencias numericas (numeros).

processamento:
 acao: os encurtadores unarios aumentam ou diminuem :

 narracao: "numero é igual o que ela ja tem + mais 1 ..ou -1 se for dinuir"

 ++ aumenta de 1 em 1 unidade. // SERIA O MESMO DE numero = numero + 1 ,
 -- diminui de 1 em 1 unidade // SERIA O MESMO DE numero = numero -1,

 += 15  :: vai aumentar o que ja tem para mais 15

 -= 33  :: vai diminuir o que tem por 33

 %= 3 :: vai dar o resto da divisao por 3, o resultado é sempre o resto do que voce pediu para dividir ...ex: vc pediu pra dividir 10 por 3 vai dar 3 e vai restar 1 este que vai restar é o resultado...o resto da divisao.

restricoes: em GO nao da pra inserir os operadores unarios antes da referencia exemplo --numero ou ++numero .

saida:
++ para aumentar , -- para diminuir

*/
