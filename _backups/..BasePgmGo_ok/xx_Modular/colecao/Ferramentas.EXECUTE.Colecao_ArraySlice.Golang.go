package colecao

import "fmt"

func ExecuteFerramentasColecao () {
	publicar := Ferramentas_Acoes_Singular_Colecoes()
	// publicar := Ferramentas_Acoes_Compostos_Colecoes()

	fmt.Println(publicar)
}

/*
Implementacao: De Ferramentas Em Colecoes
Em_Alvos_Possiveis: "Singular com Instrucoes isoladas" , "Compostos_Em_Muitos com Instrucoes dentro de EstruturaLoop",

FormaDeAcesso: "Por Posicao do Item [posicao] literalMagica ou Dinamica_Arg_QUeQuemVaiUsarMandarViaFuncao"

*/