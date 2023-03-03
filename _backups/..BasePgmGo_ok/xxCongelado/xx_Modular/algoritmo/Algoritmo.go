package algoritmo

import "fmt"

type Algoritmo struct{
	Algoritmo_Funcao_Converte_ObjEstrutura_Para_Json_em_Golang Algoritmo_Funcao_Converte_ObjEstrutura_Para_Json_em_Golang
	Algoritmo_Funcao_ConstroiObjeto AlgoritmoModel
	MutacaoNaMesmaVariavel string
}

type Algoritmo_Funcao_Converte_ObjEstrutura_Para_Json_em_Golang struct{
	Converter_Em_ArrayDeBytes string
	TratarErro string
	Converter_ArrayDeBytesEmJson string
	Exemplo string
}

type AlgoritmoModel struct{
	Nome string
	Passos []string
}


func addAlgoritmo(i Algoritmo) Algoritmo{
	return i
}

func ExecuteAlgoritmo() {
	fmt.Println(addAlgoritmo(Use_Objs_Algoritmo_Em_golang))
}


