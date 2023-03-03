package colecao_implementar

var colecaoImplementarEmGolang = ColecaoImplementar{
	Conceito_Dinamica: "Tudo o que é magico primitivo marretado pode ser trocado por parametro recebido pela funcao... Deixando assim o utilizador decidir os valores , entao :: O que seria magicamenteMarretado trocar por Parametro recebido na Funcao.",

	Sintaxe_Acessos_Items: "<COLECAO>[POSICAO_ITEM] // Tendo O valor Primitivo Do Item Na Mao Decidir qual :: Oepracao fazer com ele exemplos em Operacoes_Para_Valores_Primitivos_Em_Maos",

	Operacoes_Para_Valores_Primitivos_Em_Maos: ".PONTO_ACESSAR_KEYchave || = ATRIBUIR_INSTANCIA NOVO VALOR || OPERACOES_MATEMATICAS_PARA_VALORES_NUMERICOS || ETC...",

	Acoes_Singular: Singular{
		Acoes_Singular: Acoes{
			Acessar_item_de_colecao: Magicamente_Ou_Dinamicamente {
				magicamenteMarretado: "colecao[0]",
				DinamicoSubstituindoMagicoPorParametro: "// o que era Magico trocar pelo param recebido na funcao ex: func funcao(param) { colecao[param]",
			},
			
			Acessar_Da_Chave_Do_Item_O_Seu_Valor: Magicamente_Ou_Dinamicamente {
				magicamenteMarretado: "colecao[0].KeyNome",
				DinamicoSubstituindoMagicoPorParametro: "// o que era Magico trocar pelo param recebido na funcao ex: func funcao(param) { colecao[0].param",
			},

			Mudar_Valor_ComEfeitoColatreal: Magicamente_Ou_Dinamicamente{
				magicamenteMarretado: "colecao[1] = \"novo valor\"",
				DinamicoSubstituindoMagicoPorParametro: "dentro de blocoFuncao o mesmo de magicamente só o que é magicamenteMarretado primitivo trocar por parametro da funcao",
			},
		},
	}, // Singular

	Acoes_CompostoObjeto: CompostoObjeto{
		Acoes_CompostoObjeto: Acoes{
			Acessar_item_de_colecao: Magicamente_Ou_Dinamicamente {
				magicamenteMarretado: "colecao[0]",
				DinamicoSubstituindoMagicoPorParametro: "// o que era Magico trocar pelo param recebido na funcao ex: func funcao(param) { colecao[param]",
			},
			
			Acessar_Da_Chave_Do_Item_O_Seu_Valor: Magicamente_Ou_Dinamicamente {
				magicamenteMarretado: "colecao[0].KeyNome",
				DinamicoSubstituindoMagicoPorParametro: "// o que era Magico trocar pelo param recebido na funcao ex: func funcao(param) { colecao[0].param",
			},

			Mudar_Valor_ComEfeitoColatreal: Magicamente_Ou_Dinamicamente{
				magicamenteMarretado: "func (param) { colecao[3] = param // observacao tanto a posicao do item quanto o novo valor atribuido podem serem trocados por parametros recebidos da funcao.",
				DinamicoSubstituindoMagicoPorParametro: "dentro de blocoFuncao o mesmo de magicamente só o que é magicamenteMarretado primitivo trocar por parametro da funcao",
			},

		},
	}, // CompostoObjeto

}