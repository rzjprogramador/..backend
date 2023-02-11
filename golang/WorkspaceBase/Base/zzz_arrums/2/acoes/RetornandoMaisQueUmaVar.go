package acoes

import "fmt"

func RetornandoMaisQueUmaVar() {
	fmt.Println(somaESubtracao(20, 10))
	fmt.Println(variosRetornosStrings("valor de A", "valor de B", "valor de C"))
}

func somaESubtracao(n1, n2 uint16) (soma uint16, subtracao uint16) {
	soma = n1 + n2
	subtracao = n1 - n2

	return soma, subtracao
}

func variosRetornosStrings(a, b, c string) (resultA string, resultB string, resultC string) {
	resultA = a
	resultB = b
	resultC = c

	return resultA, resultB, resultC
}

/*
Retornando mais que uma referencia de uma funcao.

entrada:
na declaracao da funcao prometemos as variaveis que a funcao vai retornar e seu tipo dentro de () parenteses.

processamento:
 dentro da funcao construimos o valor de cada variavel.

 saida:
 na clausula retorn retornamos as variaveis que prometemso na declaracao da funcao.
*/
