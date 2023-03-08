package main

var AnyQualquerTipoOuInterfaceGolang = ModelTipoDeDado{
	Linguagem: "Golang",
	Keyword: "interface{} || any",
	Representacao_PodeInstanciar: "qualquer tipo de valor é livre",
	Conceito: "é semelhante ao tipo any de outras linguagens, aceita qualquer mudanca de tipo e valor na variavel.",
	Pode_Reescrever_Valor_Da_Variavel: true,
	Uso: "apartir do go 1.18 em 2023, ja é possivel assinalar tipo any ou interface vazia interface{}",
	Aplicabilidade: "é um tipo inseguro, só use quando realmente nao sabe o que pode vir para esta variavel ex: em recebimentos especificos http.",
	ValorDefault_SeNadaForPassado: "nil // nulo - NaoTemNadaDeValor",
	Exemplo: ` var foo interface{} `,
}
