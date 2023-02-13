package bbTipos

import "fmt"

type TipoDeDadosNativos struct {
	nome string
	tipoKeyword string
	declaracaoVerbosa string
	declaracaoInferidaCurta string
	declaracaoInferidaEmEscopoFuncao string
	declaracaoParaNegativo string
	classificacoesTamanhos string
	comoInterpolarEmString string
	detalhes string
	exemplo string
}

// instancias
var texto = TipoDeDadosNativos{
	nome: "texto",
	tipoKeyword: "string",
	declaracaoVerbosa: "string texto  = 'foo' ",
	declaracaoInferidaCurta: "var texto = 'foo' ",
	declaracaoInferidaEmEscopoFuncao: "texto := 'foo' ",
	declaracaoParaNegativo: "nao_possui",
	classificacoesTamanhos: "nao_informado",
	comoInterpolarEmString: "%v  | %s ",
	detalhes: "em declaracoesInferidasCurtas :: declara a variavel e ja passa o valor com o operador foquinha iota",
	exemplo: "var texto = 'foo' ",
}

var boleano = TipoDeDadosNativos{
	nome: "boleano",
	tipoKeyword: "true | false",
	declaracaoVerbosa: "bool boleano  = true ",
	declaracaoInferidaCurta: "var boleano = true ",
	declaracaoInferidaEmEscopoFuncao: "boleano := true ",
	declaracaoParaNegativo: "nao_possui",
	classificacoesTamanhos: "nao_informado",
	comoInterpolarEmString: "%v  | %b ",
	detalhes: "em declaracoesInferidasCurtas :: declara a variavel e ja passa o valor com o operador foquinha iota",
	exemplo: "bool boleano = true ",
}

var numeroInteiro = TipoDeDadosNativos{
	nome: "numeroInteiro",
	tipoKeyword: "int",
	declaracaoVerbosa: "int numeroInteiro  = 10 ",
	declaracaoInferidaCurta: "var numeroInteiro = 10 ",
	declaracaoInferidaEmEscopoFuncao: "numeroInteiro := 10 ",
	declaracaoParaNegativo: "uint uint32 uint64 // melhor usar o uint e deixar inferir.",
	classificacoesTamanhos: "int32 int64",
	comoInterpolarEmString: "%v  | %d ",
	detalhes: "em declaracoesInferidasCurtas :: declara a variavel e ja passa o valor com o operador foquinha iota",
	exemplo: "int numeroInteiro = 10 ",
}

var numeroDecimal = TipoDeDadosNativos{
	nome: "numeroDecimal",
	tipoKeyword: "float | double",
	declaracaoVerbosa: "double numeroDecimal  = 10.12 ",
	declaracaoInferidaCurta: "var numeroDecimal = 10.12 ",
	declaracaoInferidaEmEscopoFuncao: "numeroDecimal := 10.12 ",
	declaracaoParaNegativo: "nao_possui",
	classificacoesTamanhos: "float, double",
	comoInterpolarEmString: "%v  | %d.2f // obs: 2f para mostrar 2 casas decimais ",
	detalhes: "em declaracoesInferidasCurtas :: declara a variavel e ja passa o valor com o operador foquinha iota",
	exemplo: "double numeroDecimal = 10.12 ",
}

// mostrar instancias
func ExecuteTiposNativos () {
	fmt.Printf("texto :: %+v\n", texto)
	fmt.Printf("boleano :: %+v\n", boleano)
	fmt.Printf("numeroInteiro :: %+v\n", numeroInteiro)
	fmt.Printf("numeroDecimal :: %+v\n", numeroDecimal)
}