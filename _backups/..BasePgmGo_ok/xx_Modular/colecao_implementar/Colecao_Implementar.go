package colecao_implementar

import "fmt"

type ColecaoImplementar struct{
	Conceito_Dinamica string
	Sintaxe_Acessos_Items string
	Operacoes_Para_Valores_Primitivos_Em_Maos string
	Acoes_Singular Singular
	Acoes_CompostoObjeto 	CompostoObjeto 
}

type Acoes struct{
	Acessar_item_de_colecao Magicamente_Ou_Dinamicamente
	Acessar_Da_Chave_Do_Item_O_Seu_Valor Magicamente_Ou_Dinamicamente
	Mudar_Valor_ComEfeitoColatreal Magicamente_Ou_Dinamicamente
}

type Magicamente_Ou_Dinamicamente struct{
	magicamenteMarretado string
	DinamicoSubstituindoMagicoPorParametro string
} 

type Singular struct{
	Acoes_Singular Acoes
}

type CompostoObjeto struct{
	Acoes_CompostoObjeto Acoes
}

var instColecaoImplementar = []ColecaoImplementar{}

func addColecaoImplementar (c ColecaoImplementar) {
	instColecaoImplementar = append(instColecaoImplementar, c)
}

func allColecaoImplementar () []ColecaoImplementar{
	return instColecaoImplementar
}

func ExecuteColecaoImplementar () {
	addColecaoImplementar(colecaoImplementarEmGolang)

	fmt.Println(allColecaoImplementar())
}