package main

import (
	"fmt"
)

/*
# TipagensDinamicasGenericas
Declaracao: antes depois do nome entre colchetes define a variavelParametro que sera T e o tipo que ela representará ex: [ T tipoDeT ] aqui vc pode definir que o T param pode ser varios tipos ex: [T string | bool | float64 | uint64]
usoNaFuncao: onde precisar desta variavelParametro usar o T

Fases:
	fase1 : "Definindo TipagemGenerica 2 statica [ T seraEsteTipo1 | seraEsteTipo2 ] ,"

	fase2: "Dizemos que a tipagemEstatica agora dara lugar para um type de interface e nele como campos defino e assim controlamos no type qual será os novos tipos que a variavelParam T representará ..",

*/ 

type TipoGenericoNumber interface{
	float64 | uint64
}

func somarCamposNumericosDeObjStringComNumeros [T TipoGenericoNumber] (objMap map[string]T) T {
	var soma T
	for _, v := range objMap {
		soma += v
	}
	return soma
}

func main() {
	// fmt.Println("Alo generics")
	res := somarCamposNumericosDeObjStringComNumeros(map[string]float64{"campo1": 10, "campo2": 20.4, "campo3": 30.5})
	fmt.Println(res)
}