package escritas

import "fmt"

func PrintConsoleResolver() {
	booleano := true
	texto := "hello"
	numeroPositivo := 10
	numeroNegativo := -20

	fmt.Printf("a recuperacao das tags no texto será por justa posicao ::\n \n valor da var boleano é :: %v, \no texto é %v ,\n numeroPositivo é %v, \n numeroNegativo é %v \n \n", booleano, texto, numeroPositivo, numeroNegativo)
}

/*
Print no Console
  tags_nos_textos_apos_porcentagem:
	v : mostra o valor seja ele qual for erro, sucesso qualquer valor. #idealUsar , ex: %v


com_pacote_fmt:
  funcao: Printf , printa texto feedback, e permite inserir tag e recupera-la com a variavel em justa posicao para as tags

*/
