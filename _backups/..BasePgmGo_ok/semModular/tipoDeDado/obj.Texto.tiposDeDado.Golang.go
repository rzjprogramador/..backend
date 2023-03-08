package main

var ObjTextoGolang = ModelTipoDadoTexto{
	Linguagem: "Golang",
	Keyword: "string",
	Representacao_PodeInstanciar: "textos dentro de obrigatorias aspas duplas",
	Pode_Reescrever_Valor_Da_Variavel: false,
	ValorDefault_SeNadaForPassado: `string vazia sem espaco "" com aspas duplas.`,
	Exemplo: `var texto = "meu texto"`,	

	RepresentacoesTexto: RepresentacaoTexto{
		FormatacaoTemplateLiterals_PularLinhas: "usar as crazes ao invez de aspas duplas exemplo :``,  `o texto aqui nao é interpretado..pode pular linhas nao precisa escapar caracteres especiais.`",
		Interpolar_Variavel_Em_texto: `usar o pacote Sprintf("%#v", variavel)`,

		Concatenar_VariaveisString: `use o retorno de fmt.Sprint( ver1, var2) e quebre em variáveis o texto a ser interpretado`,
	},

	PularCaracteresEspeciaisEDeConflito: "Colocar barra invertida antes do caractere de conflito ex: \" pula a aspa dentro de texto com aspa ...",
}
