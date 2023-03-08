package tiposDeDado

import "fmt"

func ExecuteTipoTexto() string{
	varTexto1 := "bom dia"
	varTexto2 := "como Vai Voce"
	varTexto3:= "...Programador"
	publicar := fmt.Sprint(varTexto1, varTexto2, varTexto3)
	return publicar
}

/****************************************************
# Concatenacao_Variaveis_Em_texto
	Sprint  Vai devolver as variaveistexto passadas em uma unica string >> exemplo: fmt.Sprint(varTexto1, vartexto2, varTexto3)

	---

	# pacote saida de dados: fmt
	objeto  fmt métodos significados: S significa para String, Print pra mostrar/printar.
	
	***************************************************
*/