package main

var ObjErroGolang = ModelTipoDeDado{
	Linguagem: "Golang",
	Keyword: "error",
	Representacao_PodeInstanciar: "para criar um valor crie um ErroPersonalizado : use o objeto do go errors.New(\"mensagem\")",
	Conceito: "nao pode ser dado um valor ..somente esta variavel mesmo virar um erro personalizado.",
	Pode_Reescrever_Valor_Da_Variavel: false,
	Uso: "",
	Aplicabilidade: "",
	ValorDefault_SeNadaForPassado: "nil",
	Exemplo: ` 
	var erro error
	var errada error
	var MeuErroPersonalizado error = errors.New("Este é meu erro criado") // para criar ErroPersonalizado : use o objeto do go errors.New("mensagem do erro")
	// erradaInferida := error // nao da pra inferir
	fmt.Println(errada, MeuErroPersonalizado)`,
}
