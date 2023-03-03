package modelador

import "fmt"

type AcoesEmInstanciasDeModeladores struct{
	CRUD_Add_Em_Instancias_De_Modelador_Struct_InMemoryGolang Modeladores
	Ciclo_CRU_DC_LR_LED Modeladores
	Campo_Com_Valor_Default_Fixo_Via_Modelador Modeladores
}

type Modeladores struct{
	Nome string
	ConceitoBeneficio string
	Implementacao string
	Tutorial string
}

var collectionModeladores = []AcoesEmInstanciasDeModeladores{}

// CRUD
func addModeladores (i AcoesEmInstanciasDeModeladores) {
	collectionModeladores = append(collectionModeladores, i)
}

func allModeladores () []AcoesEmInstanciasDeModeladores{
	return collectionModeladores
}

// Publicar
func ExecuteModelador () {
	addModeladores(AcoesInstanciasModeladoresGoolang)
	
	fmt.Println(allModeladores())
}