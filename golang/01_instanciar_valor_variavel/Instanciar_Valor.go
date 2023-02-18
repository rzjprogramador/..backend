package main

import "fmt"

type MaisQueUmValorCompostoEstruturadoPorModelador struct {
	Campo1 string
	Campo2 uint
	Campo3 bool
}

type CompostoObjeto struct {
	CampoA string
	CampoB string
}

func funcaoRetornaUmTexto() string {
	return "Oi..Estou retornando uma string"
}

func funcaoQueRetornaUmCompostoObjeto(o CompostoObjeto) CompostoObjeto{
	compostoObjetoPreenchido := CompostoObjeto{
		CampoA: o.CampoA,
		CampoB: o.CampoB,
	}
	return compostoObjetoPreenchido
}

func main() {
	instanciarValorSingular := "Texto_Singular_Unidade"

	// implementacao: composto
	instanciar_MaisQueUmValorCompostoEstruturadoPorModelador := MaisQueUmValorCompostoEstruturadoPorModelador{
		Campo1: "texto_em_Estrutura",
		Campo2: 10,
		Campo3: true,
	}

	mostrarMeuObjeto := fmt.Sprintf("Meu objeto estruturado por modelador >> %#v", instanciar_MaisQueUmValorCompostoEstruturadoPorModelador)

	// uso: funcao
	instanciarFuncaoQueRetornaAlgo := funcaoRetornaUmTexto()

	// uso: funcao retorna composto modelador
	requestCompostoObjetoPreenchido := CompostoObjeto{
		CampoA: "valor A",
		CampoB: "valor B",
	}
	instanciaFuncaoQueretornaUmcompostoObjeto := funcaoQueRetornaUmCompostoObjeto(requestCompostoObjetoPreenchido)
	showInstanciaFuncaoQueretornaUmcompostoObjeto := fmt.Sprintf("%#v", instanciaFuncaoQueretornaUmcompostoObjeto)

	fmt.Println(instanciarValorSingular, mostrarMeuObjeto, instanciarFuncaoQueRetornaAlgo, showInstanciaFuncaoQueretornaUmcompostoObjeto)
}

/*
---
	Valores_Instanciaveis_Em_Variaveis: 
	possiveis: ["Singular(unidade)", "Compostos(Objeto)", "Funcoes(PodeRetornar_Singular_ouCompostos)"]
----

Nome: "Singular",
Significado: "um unico valor unitario de um tipo primitivo",
Precisa_Para_Ser_Instanciavel: "basta ser declarado",
Quem_Pode_Modelar: "basta ser declarado",
Implementando_Para_Instanciar: string{"declarar variavel",}",
---
Nome: "Objeto",
Significado: "Conjunto de Singulares, ou seja mais que um valor singular vira um componente objeto",
Precisa_Para_Ser_Instanciavel: "tem que ser Modelado",
Quem_Pode_Modelar: string{"classe", "struct"},
Implementando_Para_Instanciar: string{"Modelar_Struct", "Instanciar_StructModelado",},

Nome: "Objeto_Json",
Significado: "Conjunto de Singulares, ou seja mais que um valor singular vira um componente objeto",
Precisa_Para_Ser_Instanciavel: "tem que ser Modelado",
Quem_Pode_Modelar: string{"map",},
Implementando_Para_Instanciar: string{"Modelar_Map", "Instanciar_MapModelado",}},

Nome: "Funcao",
Significado: "Pode retornar para ser instanciado/guardado :: Singular e Compostos",
Precisa_Para_Ser_Instanciavel: "ser declarada, chamada e executada()",
Quem_Pode_Modelar: string{"keyword func",},
Implementando_Para_Instanciar: string{"Modelar_Funcao", "Instanciar_FuncaoModelada", "Instanciar_formato_QueVaiMostrar_O_Resultado_Da_Instanciada"},

---

// Para_esteModelo:
Nome: "",
Significado: "",
Precisa_Para_Ser_Instanciavel: "",
Quem_Pode_Modelar: "",
Implementando_Para_Instanciar: "",
---

*/