package main

import "fmt"

func main() {
	/* *************************************************** */
	// Concatenacao_Variaveis_Em_texto
	// Sprint  Vai devolver as variaveistexto passadas em uma unica string >> exemplo: fmt.Sprint(varTexto1, vartexto2, varTexto3)
	varTexto1 := "bom dia"
	varTexto2 := "como Vai Voce"
	varTexto3:= "...Programador"
	publicar := fmt.Sprint(varTexto1, varTexto2, varTexto3)

	fmt.Println(publicar)

}