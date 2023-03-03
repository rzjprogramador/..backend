package algoritmoFuncao

var Obj_Algoritmo_FuncaoCaseService_Golang = Algoritmo_FuncaoCaseServiceResultadosModel{
	Exemplo_FuncaoCaseServiceResultados: `// Exemplo_FuncaoCaseServiceResultados
	func somaCase(x int, y int) (int, error){
		res := x + y
		if res > 12 {
			return 0, errors.New("mensagem Erro:: Ops è maior que 10 nao pode")
		}
		return res, nil
	}
	`,

	Passos: Args_Passos_Algoritmo_FuncaoCaseService{
		OQuePrecisaPraTerResultadoDoObjetivo: "Operacao entre dados de entrada >> pra ter o resultado do objetivo que é o nomeDaFuncao.",

		RegraQueValidaEsteObjetivo: "operacaoLogica sobre o resultado da operacaoObjetivo.",

		Consequencias: ConsequenciasPossiveisFuncaoCaseService{
			ConsequenciaPreencherResultadoMaterializado: Resultados{
				Erro: "se der errado >> agradeço dando mensagem de erro...e qual foi o erro",
				Acerto: "devolvo materializado o resultado que deu certo",
			},
		},
	},

}



