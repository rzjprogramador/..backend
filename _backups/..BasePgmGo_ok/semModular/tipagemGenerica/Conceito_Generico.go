package main

import (
	"fmt"
)

type TipoGenericoNumber interface{
	float64 | uint64
}

func main() {
	Execute_Conceito_Generico()
}


func somarCamposNumericosDeObjStringComNumeros [T TipoGenericoNumber] (objMap map[string]T) T {
	var soma T
	for _, v := range objMap {
		soma += v
	}
	return soma
}


func Execute_Conceito_Generico () {
	res := somarCamposNumericosDeObjStringComNumeros(map[string]float64{"campo1": 10, "campo2": 20.4, "campo3": 30.5})
	fmt.Println(res)
}