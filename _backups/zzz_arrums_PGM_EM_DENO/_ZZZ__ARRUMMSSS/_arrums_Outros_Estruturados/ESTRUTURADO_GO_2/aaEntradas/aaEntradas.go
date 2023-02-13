package aaEntradas

import "fmt"

var nomesDasPossiveisFormasDeEntradasDeDados = []string{
	insercaoDeEscritaLiteralRequest.nomeDaForma, 
	insercaoDeEscritaDinamicaParamRequest.nomeDaForma,
}

var exemplosEntradasDeDados = []string{
	insercaoDeEscritaLiteralRequest.exemplo, 
	insercaoDeEscritaDinamicaParamRequest.exemplo,
}

// funcoes
func implementacaoProgramacao () {
	fmt.Println("PERGUNTA_ENTRADA_DE_DADOS ")
	
	fmt.Printf("Possiveis_Formas_De_Entradas_de_Dados_Pergunta %v", nomesDasPossiveisFormasDeEntradasDeDados)

	fmt.Printf("\n\n EXEMPLOS: %v \n\n", exemplosEntradasDeDados)

}

func ExecuteEntradas () {
	implementacaoProgramacao()
}

/*
func perguntaResposta () PerguntaResposta {
	entradaSaidaDados := PerguntaResposta{
		pergunta: "de formaLiteral marretamos o dado, de forma dinamica perguntamos ao utilizador.",
		resposta: "processamos a implementacao da resposta, operando a pergunta com a resposta",
		saida: "retornamos o resultado com algum comando de saida.",
	}
	return entradaSaidaDados
}
*/
