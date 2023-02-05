package loops

import "fmt"

func VariarEmString() {
	texto := "TEXTO"
	for posicao, letra := range texto {
		fmt.Println(posicao, string(letra))
	}
}

/*

# Loops For com Range

significado: Variar Para ...

sitaxe: for param1Posicao?, paramConteudoDoItem? := igual numeradoRange? numerarQuem coloca aqui a fonteAlvoDaNumeracao { faz isto
	# usa os params recebidos que vao ficar passando em loop a cada iteracao
  tenho na maoa posicao e o conteudoDoItem a cada iteracao aqui dentro
	-> se der um print  nestes params vou ve-los no console
	-> posso fazer o que quiser com eles.
}

consideracoes: o for é como uma funcao nomedoLoop paramPosicao1, paramConteudo2 := range alvoNumeracao { usa os params em loopACadaIteracao }

restricoes: NAO DÁ PARA FAZER FOR COM RANGE EM STRUCTS ESTRUTURAS.

-  para ocultar a var que mostra o indice coloque um anderline no lugar.

// VAI PRINTAR EM TABELA ASC
		// fmt.Println(posicao, letra)

		// VAI PRINTAR EM STRING

*/
