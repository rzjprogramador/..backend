package algoritmoFuncao

// Algoritmo_FuncaoCaseServiceResultadosModel
var Obj_Algoritmo_Funcao_ExecuteMOSTRAR_ServiceModel_Golang = 
Algoritmo_Funcao_ExecuteMOSTRAR_ServiceModel{
	Conceito: "Funcao execute Mostra da forma que desejar a saida apra o utlizador os resultados(Erro_e_Acerto) da CaseService",

	Exemplo_Funcao_ExecuteMOSTRAR_Service: ` // Exemplo_Funcao_ExecuteMOSTRAR_ServiceModel
	func Execute_SomaDefensiva (x int, y int) int{
		res, err := somaCase(x, y)
		if err != nil {
			log.Fatal(err.Error())
		}
		return res
	}
	`,

	Missao: []string{"MostrarResultadosDaCaseService", },

	Passos: Args_Passos_Algoritmo_Funcao_ExecuteMOSTRAR_Service{
		Entrada_Recebe_FuncaoServicoMostrar: Args_Entrada_Recebe_FuncaoServicoMostrar{

			Consequencia_Entrada_Funcao_Servico: Args_Consequencia_Entrada_Funcao_Servico{
				Verificar_se_Tem_Erro: TratamentoErro_Mostrar{
					Mostrar_Logando_ErroNoConsole: "log.Fatal(err.Error()) // Defensiva Bloqueando Cracheamento e Estouro do Programa, Devolvendo no Console para consulta >> o Erro e qual foi o erro.",
				},
			},

			TratamentoErro: TratamentoErro_Mostrar{
				Mostrar_Logando_ErroNoConsole: "log.Fatal(err.Error())",
			},

			RetornarAcerto: "retornar o resultado preenchido de acerto que veio do CaseService.",
			},

	},
}



