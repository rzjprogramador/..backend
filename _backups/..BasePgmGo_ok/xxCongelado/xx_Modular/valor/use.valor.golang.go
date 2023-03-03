package valor

var Use_Singular = ModelValor{
	Nome: "Singular",
	Significado: "um unico valor unitario de um tipo primitivo",
	Precisa_Para_Ser_Instanciavel: "basta ser declarado",
	Quem_Pode_Modelar: []string{"basta ser declarado",},
	Implementando_Para_Instanciar: []string{"declarar variavel",},
}

var Use_CompostoObjeto = ModelValor{
	Nome: "Objeto",
	Significado: "Conjunto de Singulares, ou seja mais que um valor singular vira um componente objeto",
	Precisa_Para_Ser_Instanciavel: "tem que ser Modelado",
	Quem_Pode_Modelar: []string{"classe", "struct"},
	Implementando_Para_Instanciar: []string{"Modelar_Struct", "Instanciar_StructModelado", },
}

var Use_CompostoObjetoJson = ModelValor{
	Nome: "Objeto_Json",
	Significado: "Conjunto de Singulares, ou seja mais que um valor singular vira um componente objeto",
	Precisa_Para_Ser_Instanciavel: "tem que ser Modelado",
	Quem_Pode_Modelar: []string{"map",},
	Implementando_Para_Instanciar: []string{"Modelar_Map", "Instanciar_MapModelado",},
}

var Use_Funcao_DevolveQualquerUm = ModelValor{
	Nome: "Funcao",
	Significado: "Pode retornar o que quiser para ser instanciado/guardado :: Singular e Compostos",
	Precisa_Para_Ser_Instanciavel: "ser declarada, chamada e executada()",
	Quem_Pode_Modelar: []string{"keyword func",},
	Implementando_Para_Instanciar: []string{"Modelar_Funcao", "Instanciar_FuncaoModelada", "Instanciar_formato_QueVaiMostrar_O_Resultado_Da_Instanciada"},
}
