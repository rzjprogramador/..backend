package agrupamento

import (
	"fmt"
	"reflect"
)

func SliceArrayLivre() {
	var slice1 []string

	sliceString := []string{"um", "dois", "tres"}

	sliceNumeros := []int32{2, 3, 4}

	sliceString = append(sliceString, "quatro")

	fatiasDoSliceString := sliceString[0:3]

	// recuperarUltimoItemSliceString := sliceString[-1] TODO

	fmt.Println(reflect.TypeOf(sliceString))
	fmt.Println("sliceNumeros >> ", sliceNumeros)
	fmt.Println("slice declarado sem valores ficaram as iniciais >> ", slice1)
	fmt.Println("View sliceString >>", sliceString)
	fmt.Println("pegando 3 fatias do sliceString e colocando no novo fatiasDoSliceString que ficou assim >> ", fatiasDoSliceString)
	fmt.Println("pegar o indice 1 ao 3 do sliceString>> ", sliceString[1:3])
	// fmt.Println("pegar ultimo indice do sliceString>> ", recuperarUltimoItemSliceString)
}

/*
slice é um array que se recicla a cada quantia de posicoes... ou seja ocupou estas quantiasIniciais de posicoes ele libera mais posicoes...ele nao tem limite de posicoes definidas.
obs: seus dados poderam ser de um só tipo isto o itemTodo, agora dentro do dado  pode ter qualquer dado se for um agrupador de variaveis.

recuperar_pedacos:
posso pegar intervalos de items de um slice e recuperar/guardar em outra referencia com [posicaoInicial : posicaoFinal] ex: sliceAlvo[0:8]

operacoes_de_slice:
...
	insercao:
		inserir novo item no slice:
		usar funcao append(sliceDestino, item) :: a funcao de slice append recebe o sliceDestino que é pra ser modificado e o item que vai entrar neste slice

		imutabilidade:
		a funcao append se guardada em uma nova variavel vai criar um slice novo com o item novo inserido.

		com_efeito_colateral:
		para modificar o mesmo slice reatribua a funcao append para o mesmo slice passando ele como destino
		...

*/
