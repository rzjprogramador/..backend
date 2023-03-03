package colecao_implementar

import "fmt"

type ModeloFoo struct{
	Campo1 uint
	Campo2 uint
}

var obj1 = ModeloFoo{ Campo1: 11, Campo2: 1111}
var obj2 = ModeloFoo{ Campo1: 22, Campo2: 2222}

var listColecaoNumerosSingular = []string{"um", "dois", "tres"} 
// var listColecaoFooComposto = []ModeloFoo{obj1, obj2} 

func ExecuteTreinoColecaoImplementar() {
	// acess_primeiro_item_colecao_singular := listColecaoNumerosSingular[0]
	// acess_segundo_item_colecao_singular := listColecaoNumerosSingular[1]
	listColecaoNumerosSingular[2] = "mudei para foo" 

	// mudar daqui pra baixo só a instancia do publicar pra fins educativos:
	// publicar := acess_primeiro_item_colecao_singular
	// publicar := acess_segundo_item_colecao_singular

	// fmt.Println(publicar)
	fmt.Println(listColecaoNumerosSingular)
}
