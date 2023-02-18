package main

import (
	"fmt"
)

type Model1 struct{
	Campo1 string 
	Campo2 string
}

var instance1 = Model1{
	Campo1: "",
	Campo2: "bar",
}

func foo(m *Model1) string{
	if m.Campo1 == "" {
		m.Campo1 = "valor default padrao Campo1"
	}
	publicar := fmt.Sprintf("%#v", m)

	return publicar
}

func main() {
	fmt.Println(foo(&instance1))
}

/****************************************************
# Modelador_Campo_Valor_Fixo_Default
	conceito: "Em vez de criar uma estrutura diretamente, podemos usar um construtor para atribuir valores padrão personalizados a todos ou a alguns de seus membros."

	Implementacao: "emFuncao receber uma variavelIteradoraDeModeloStruct que seja ponteiro o Modelo, verificar se o campoAlvo neste modelo vier com valorZero nada seja passado este param.Campo tenha o valor default que desejamos....obs: podemos fazer para quantos campos quisermos...obs: no uso invocacao desta funcao ao apssar a instanciadesejada usar o & porque espera-se um ponteiro como &argumento.",

	Tutorial: "https://www.geeksforgeeks.org/how-to-assign-default-value-for-struct-field-in-golang/amp/",

	
***************************************************
*/
