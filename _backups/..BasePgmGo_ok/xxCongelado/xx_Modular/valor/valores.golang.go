package valor

var valor_Golang = Valor{  
	Significado: "Valor tem um tipo primitivo.",

	Conceito: "todos valores tem que ser instanciado em variavel",

	Possiveis: []string{"Singular_unidade", "Compostos_Objeto", "Funcoes_PodeRetornar_QualquerUmDeles_Singular_ouCompostos"},

	ValoresInstanciaveisPossiveis: ValorInstanciavelPossiveis{
		Singular: Use_Singular,

		CompostoObjeto: Use_CompostoObjeto,

		CompostoObjetoJson: Use_CompostoObjetoJson,

		Funcao_DevolveQualquerUm: Use_Funcao_DevolveQualquerUm,
	},
}
