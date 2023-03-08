package entradaDeDado

import (
	"BasePgmGo/utils"
)

type EntradaDeDadoModel struct {
	EntradaDeDado_Diversos_ViaParam EntradaDeDado
}

type EntradaDeDado struct {
	Nome string
	EntradaVia string
	QuantidadeQuePodeEntrar string
	Sintaxe string
	Narracao string
	Exemplo string
}


func newEntradaDeDado(e EntradaDeDadoModel) EntradaDeDadoModel{
	return e
}

func ExecuteEntradaDeDado() {
	utils.ShowObject(newEntradaDeDado(EntradaDeDado_Diversos_ViaParam_Golang))
}

