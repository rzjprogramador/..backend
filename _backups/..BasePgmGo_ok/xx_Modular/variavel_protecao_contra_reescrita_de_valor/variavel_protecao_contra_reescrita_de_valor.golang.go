package variavel_protecao_contra_reescrita_de_valor

var variavel_protecao_contra_reescrita_de_valor_Dinamica_Reatribuivel_Golang = ProtecaoReescritaVariavel{
	Artefato: "variavel",
	Nome: "dinamica_Reatribuivel",
	RecursoDisponivel: true,
	TemDinamicaInferencia: true,
	PodeSerDeclaradaSemEscopo: false,
	QualSuaProtecaoContraReescrita: "sua protecao é só pode ser declarada dentro de escopo.",
	Conceito: "variável dinamica sem protecao de valor, apos a primeira atribuicao pode reatribuir seu valor.",
	Keyword: "nao tem",
	SinalDeAtribuicao: ":= // foquinha",
	Exemplo: "\n```varVareia := \"fooBar\" // obs: só pode ser declarada dentro de escopo - e apos isso pode ser reescrita```",
}

var variavel_protecao_contra_reescrita_de_valor_Dinamica_NaoReatribuivel_Golang = ProtecaoReescritaVariavel{
	Artefato: "variavel",
	Nome: "dinamica_NaoReatribuivel",
	RecursoDisponivel: true,
	TemDinamicaInferencia: true,
	QualSuaProtecaoContraReescrita: "a keyword palavra-chave ```var``` lhe da esta protecao.",
	PodeSerDeclaradaSemEscopo: true,
	Conceito: "variável dinamica, mas apos a primeira atribuicao nao pode reatribuir seu valor.",
	Keyword: "var",
	SinalDeAtribuicao: "= // igual_a",
	Exemplo: "\n```var var1 = \"fooBar\"```",
}

var variavel_protecao_contra_reescrita_de_valor_Constante_Golang = ProtecaoReescritaVariavel{
	Artefato: "variavel",
	Nome: "variavel_constante",
	RecursoDisponivel: true,
	TemDinamicaInferencia: true,
	QualSuaProtecaoContraReescrita: "a keyword palavra-chave ```const``` lhe da esta protecao.",
	PodeSerDeclaradaSemEscopo: true,
	Conceito: "depois de atribuida comvalor, não pode reatribuir outro valor.",
	Keyword: "const",
	SinalDeAtribuicao: "= // igual_a",
	Exemplo: "\n```const varConstante = \"foo\"```",
}

var variavel_protecao_contra_reescrita_de_valor_Final_Golang = ProtecaoReescritaVariavel{
	Artefato: "variavel",
	Nome: "variavel_final",
	RecursoDisponivel: false,
	TemDinamicaInferencia: true,
	QualSuaProtecaoContraReescrita: "a keyword palavra-chave ```final``` lhe da esta protecao.",
	PodeSerDeclaradaSemEscopo: true,
	Conceito: "não pode trocar o valor depois da primeira atribuição.",
	Keyword: "final",
	SinalDeAtribuicao: "= // igual_a",
	Exemplo: "\n```// exemplo: ...```",
}