package conversoes

import (
	"fmt"
	"strconv"
)

func StringParaNumero() {
	texto := "10"
	resultConvertido, _ := strconv.ParseUint(texto, 10, 64)
	fmt.Println(resultConvertido)
}

/*
	* CONVERSAO STRING PARA NUMERO
	tutorial: https://pkg.go.dev/strconv
*/
