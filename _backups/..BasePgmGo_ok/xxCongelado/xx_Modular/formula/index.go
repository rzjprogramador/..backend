package formula

import (
	"BasePgmGo/utils"
)

type Formula struct {
	Nome string
	Beneficio string
	Formula string
	OperadoresUtilizados string
	Sintaxe string
}

func newFormula(f Formula) *Formula{
	created := f
	return &created
}

func ExecuteFormula() {
	utils.ShowObject(newFormula(Soma))
}

