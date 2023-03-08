package colecao

import "fmt"

func ExecuteColecaoInMemory () {
	AddObjetoInColecao(Instancia_obj1)
	AddObjetoInColecao(Instancia_obj2)
	AddObjetoInColecao(Instancia_obj3)
	fmt.Println(ListarColecaoDeModelador())
}

/* CRUD L*/
/* 
	Ciclo_CRU_DC_LR_LED : \n
	  possiveis_CRU_DC_LR_LED: {"CREATE", ":READ_TODOS", "READ_ESPECIFICO", "UPDATE", "DELETE_CONGELA_IN_LIXEIRA", "LIXEIRA_RESTAURA", "LIXEIRA_EXCLUI_DEFINITIVAMENTE",} \n
	** \n

*/
