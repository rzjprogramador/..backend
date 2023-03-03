package algoritmoFuncao

import "fmt"

// ******** AlgoritmoFuncao ***************
type AlgoritmoFuncao struct{
	Conceito_Funcao string
	TiposDeFuncoes TiposDeFuncoesModel
	ConvencaoNomefuncao string
	FuncoesPossiveis FuncoesPossiveis
}
type TiposDeFuncoesModel struct{
	LerDados LerDadosModel
	MostrarDados string
}
type LerDadosModel struct{
	Conceito_Ler_Dados string
	DadoDeEntrada DadoDeEntradaModel
}
type DadoDeEntradaModel struct{
	Entrada_Magica string
	Entrada_Dinamica string
}
// ******** ***************
type FuncoesPossiveis struct {
	Algoritmo_FuncaoCaseServiceResultados Algoritmo_FuncaoCaseServiceResultadosModel
	Algoritmo_FuncaoExecuteService Algoritmo_Funcao_ExecuteMOSTRAR_ServiceModel
}

// ******** Algoritmo_FuncaoCaseServiceResultados ***************
type Algoritmo_FuncaoCaseServiceResultadosModel struct{
	Conceito string
	Exemplo_FuncaoCaseServiceResultados string
	Missao []string
	Passos Args_Passos_Algoritmo_FuncaoCaseService
}
type Args_Passos_Algoritmo_FuncaoCaseService struct{
	OQuePrecisaPraTerResultadoDoObjetivo string
	RegraQueValidaEsteObjetivo string
	Consequencias ConsequenciasPossiveisFuncaoCaseService
}
type ConsequenciasPossiveisFuncaoCaseService struct{
	ConsequenciaPreencherResultadoMaterializado Resultados
}
type Resultados struct{
	Erro string
	Acerto string
}

// ******** Algoritmo_Funcao_ExecuteMOSTRAR_Service ***************
type Algoritmo_Funcao_ExecuteMOSTRAR_ServiceModel struct{
	Conceito string
	Exemplo_Funcao_ExecuteMOSTRAR_Service string
	Missao []string
	Passos Args_Passos_Algoritmo_Funcao_ExecuteMOSTRAR_Service
}
type Args_Passos_Algoritmo_Funcao_ExecuteMOSTRAR_Service struct{
	Entrada_Recebe_FuncaoServicoMostrar Args_Entrada_Recebe_FuncaoServicoMostrar
}
type Args_Entrada_Recebe_FuncaoServicoMostrar struct{
	Consequencia_Entrada_Funcao_Servico Args_Consequencia_Entrada_Funcao_Servico
	TratamentoErro TratamentoErro_Mostrar
	RetornarAcerto string
}
type Args_Consequencia_Entrada_Funcao_Servico struct{
	Verificar_se_Tem_Erro TratamentoErro_Mostrar
}
type TratamentoErro_Mostrar struct{
	Mostrar_Logando_ErroNoConsole string
}

// ******** Implementacoes ***************

func addAlgoritmoFuncao(a AlgoritmoFuncao) AlgoritmoFuncao {
	// CamposFixos_Universal_Para_Funcoes
	a.Conceito_Funcao = "temos 2 tipos de funcoes: 1 - lerDados, 2 - MostrarDados "
	// LerDados
	a.TiposDeFuncoes.LerDados.Conceito_Ler_Dados = "Obrigatoriamente Precisamos de dado de entrada para gerar algum resultado...eles Podem Entrar :: [ Magicamente_Marretado, ou Dinamicamente_ViaParam ]"

	a.TiposDeFuncoes.LerDados.DadoDeEntrada.Entrada_Magica = "MarretamosMagicamente o dado no blocoDaFuncao."

	a.TiposDeFuncoes.LerDados.DadoDeEntrada.Entrada_Dinamica = "O Dado entrará via Parametro e sera usado na funcao"

	// MostrarDados
	a.TiposDeFuncoes.MostrarDados = "usa instrucoes de saida de dados para mostrar o resultados [erro e acerto] na funcao"

	a.ConvencaoNomefuncao =  "em camelCase se privada, o nome é o objetivo da funcionalidade."

	a.FuncoesPossiveis.Algoritmo_FuncaoCaseServiceResultados.Conceito = "Funcao CaseService é o Serviço onde gera os resultados da regraDeNegocio_Objetivo "

	a.FuncoesPossiveis.Algoritmo_FuncaoCaseServiceResultados.Missao = []string{"LogicaObjetivo", "VálidarObjetivo", "Consequências com feedback", }
	
	return a
}

func ExecuteAlgoritmoFuncao() {
	fmt.Println(addAlgoritmoFuncao(Use_AlgoritmoFuncaoGolang))
	// fmt.Println(addAlgoritmoFuncao(Use_AlgoritmoFuncaoGolang))
}

/*
 Obs: na funcao addAlgoritmoFuncao() #ANALISAR :: nao precisei criar um novo obj apenas preenchi pra deixar fixo o valor dos campos os objetos via param ...Talves porque nao preenchi com objetos e sim com valoresMagicos.
 */