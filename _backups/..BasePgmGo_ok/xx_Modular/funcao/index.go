package funcao

import "BasePgmGo/utils"

type FuncaoPossiveis struct {
	FuncaoAnonima PropsFuncao
}

type PropsFuncao struct {
	Nome string
	Aplicabilidade string
	Recomendavel string
	Macete string
	Declaracao string
	RetornaAlgo string
	UtilizavelEm string
	ComoUsarInvocar string
	Exemplo string
}

func newFuncao(f FuncaoPossiveis) *FuncaoPossiveis{
	return &f
}

func ExecuteFuncao() {
	utils.ShowObject(newFuncao(ObjFuncaoGolang))
}