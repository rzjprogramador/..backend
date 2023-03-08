package variavel_instanciaDadoDinamico_OuLiteral

type ValorLiteralMagico_GuardeEmVariavel struct {
	Conceito string
	CriarValor
}

type CriarValor struct {
	Conceito string
	AtribuindoEmVariavel 
	ModelandoEmObjeto 
	AproveitandoRetornoDeFuncao string
}

type AtribuindoEmVariavel struct {
	DeFormaMagicaLiteral string
	DeFormaDinamicaViaParam string
}

type ModelandoEmObjeto struct {
	comModelador_Struct string
	comModelador_Class string
}

// CRUD
func newValorLiteralMagico_GuardeEmVariavel(v ValorLiteralMagico_GuardeEmVariavel) ValorLiteralMagico_GuardeEmVariavel{
	return v
}

type ExecuteVariavel struct {
	Exemplo int
	ExemploDados ResExemplo
	Valor ValorLiteralMagico_GuardeEmVariavel
}

func Execute() ExecuteVariavel{
	res := ExecuteVariavel{
		Exemplo: Ex_OperacaoSobreResultadoVindoDeOutrasFuncoes(),
		ExemploDados: Exemplo(),
		Valor: newValorLiteralMagico_GuardeEmVariavel(ValorLiteralMagico_GuardeEmVariavel_Universal),
	}
	return res
}

// OBJ
var ValorLiteralMagico_GuardeEmVariavel_Universal = ValorLiteralMagico_GuardeEmVariavel{
	Conceito: `Valores soltos nao podem ser transportados e processados, entao guarde em uma variavel para trasnportalos pelo programa.`,

	CriarValor: CriarValor{
		Conceito: `Preciso de um valor, posso criar este valor : atribuindo a uma variavel | estruturando em objeto via modelador | ou retornando de uma funcao e posso fazer operacoes sobre estes valores. exemplo : Somar duas funcoes aproveitando o seu retorno `,

		AtribuindoEmVariavel: AtribuindoEmVariavel{
			DeFormaMagicaLiteral: `Marretando o valor >> De Forma MagicaLiteral`,
			DeFormaDinamicaViaParam: `inserindo nos params da funcao a variavel que vai receber o valor`,
		},
		
		ModelandoEmObjeto: ModelandoEmObjeto{
			comModelador_Struct: `type NomeModel struct { campo tipo }`,
			comModelador_Class: `via class`,
		},

		AproveitandoRetornoDeFuncao: `aproveitar retorno de uma funcao e posso fazer operacoes sobre estes valores. exemplo : Somar duas funcoes aproveitando o seu retorno`,
	} ,
}