package entradaDeDado

var Use_EntradaDeDiversosDados_ViaParam_Golang = EntradaDeDado{
	Nome: "EntradaDeDado_Diversos_ViaParam_Golang",
	EntradaVia: "Parametros",
	QuantidadeQuePodeEntrar: "Ilimitadas",
	Sintaxe: "(variavel ...tipo)",
	Narracao: "o parametro variavel recebera inumeros valores do tipo passado apos os 3 pontos",
	Exemplo: `
	// exemplo assinatura 
	(numeros ...int)

	// Exemplo funcao usando diversas entradas // funcao reduce numeros
	func entradaViaparamDeDiversosNumeros(n ...int) int{
		valor := 0
		for _, num := range n {
			valor += num
		}
		return valor
	}

	// uso
	fmt.Println(entradaViaparamDeDiversosNumeros(10,10, 10))
	`,
}