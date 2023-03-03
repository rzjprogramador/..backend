package entradaDeDado

import "fmt"

func ExecuteExemplosEntradaViaparamDeDiversos() {
	fmt.Println(entradaViaparamDeDiversosNumeros(10,10, 10))
}

func entradaViaparamDeDiversosNumeros(n ...int) int{
	valor := 0

	for _, num := range n {
		valor += num
	}
	return valor
}