package perguntarOperadores

import "fmt"

func Logicos() {

	verdadeiro, falso := true, false

	fmt.Println(verdadeiro && falso) // false

	fmt.Println(verdadeiro || falso) // true

	fmt.Println(!verdadeiro)

}

// foo := "BAR"

/*
	 OPERADORES LOGICOS ( && , ||, ! ) :
	 processamento: SÃO PERGUNTAS , É VERDADEIRO (true) ? É FALSO (false)?

	 saida:
	 ASSIM QUE ENCONTRAM A PRIMEIRA OCORRENCIA DO SEU OBJETIVO JÁ RETORNAM BOLEANOS TRUE OU FALSE -- E INTERROMPEM AS VERIFICACOES

	 // operador_E : && todas tem que ser verdade pra retornar verdade , narracao: Esta "E" estas pra ser verdade.

	// operador_OU : || basta uma ser verdade pra retornar verdade, narracao: Pode ser Esta "OU" estas pra ser verdade.

	// operador_NEGACAO : ! inverte o valor bolaeano de uma referencia, se era true vira false e vice e versa ... OBS: o negacao só mostra ou inverte um valor boleano se este valor for mesmo de origem boleana ... senao for ele nao inverte para boleano.

	// fmt.Println(!!foo) // TODO: TENTANDO INVERTER PARA BOLEANO UMA REFERENCIA NAO BOLEANA EM GO

*/
