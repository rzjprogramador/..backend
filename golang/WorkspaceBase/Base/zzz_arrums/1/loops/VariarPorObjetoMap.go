package loops

import "fmt"

func VariarPorObjetoMap() {

	usuario := map[string]string{
		"nome":      "Reinaldo",
		"sobrenome": "Zacharias",
	}

	// mostrar somente os valores
	for _, valor := range usuario {
		fmt.Println(valor)
	}

}

/*

# Loops For com Range

significado: Variar Para ...

restricoes: NAO DÁ PARA FAZER FOR COM RANGE EM STRUCTS ESTRUTURAS.

-  para ocultar a var que mostra o indice coloque um anderline no lugar.

narracao: iterar trazendo chave e valor fazendo uma variacao/range no objMap tal {		no console vejo as variaveis pedidas

	// fmt.Println(usuario)

		// iterar sobre o objMap
		for chave, valor := range usuario {
			fmt.Println(chave, valor)
		}


*/
