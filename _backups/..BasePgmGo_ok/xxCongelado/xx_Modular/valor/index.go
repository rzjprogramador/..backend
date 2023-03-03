package valor

import "fmt"

type Valor struct {
	Significado string
	Conceito string
	Possiveis []string
	ValoresInstanciaveisPossiveis ValorInstanciavelPossiveis
}

type ValorInstanciavelPossiveis struct {
	Singular ModelValor
	CompostoObjeto ModelValor
	CompostoObjetoJson ModelValor
	Funcao_DevolveQualquerUm ModelValor
}

type ModelValor struct {
	Nome string
	Significado string
	Precisa_Para_Ser_Instanciavel string
	Quem_Pode_Modelar []string
	Implementando_Para_Instanciar []string
}

func addValor(v Valor) Valor{
	return v
}

func ExecuteValor () {
	showValorGolang := fmt.Sprintf("%#v", addValor(valor_Golang))
	fmt.Println(showValorGolang)
}