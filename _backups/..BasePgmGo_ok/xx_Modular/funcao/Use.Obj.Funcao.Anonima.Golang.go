package funcao

var UseObj_FuncaoAnonima_Golang = PropsFuncao{
	Nome: "Funcao Anonima Golang",
	Aplicabilidade: "dnetro de outra funcao para execuatr algo rapido sem estrutura.",
	Recomendavel: "nem sempre",
	Macete: "uma Funcao sem Nome",
	Declaracao: "func () {}",
	RetornaAlgo: "sim pode ser recuperado em variavel",
	UtilizavelEm: "utilizavel somente dentro de outra funcao.",
	ComoUsarInvocar: "apos seu bloco só inseir parenteses ex: func() {}()",
	Exemplo: `
	// exemplo funcao anonima que retornara uma string
	func exemploFuncaoAnonima() string{

		res := func () string{
			return "Sou uma Funcao anonima, para me executar coloque () depois do meu bloco !!!"
		}()
	
		return res
	
	}
	
	func PerformFuncaoAnonima() {
		fmt.Println(exemploFuncaoAnonima())
	}
	`,
}