package modelador

var AcoesInstanciasModeladoresGoolang = AcoesEmInstanciasDeModeladores{
	CRUD_Add_Em_Instancias_De_Modelador_Struct_InMemoryGolang: Modeladores{
		Nome: "ImplementacaoCRUD_Modelador_Struct_AddItemseRetornarColecaoInMemoryGolang",
		ConceitoBeneficio: "Add Items Em ColecaoInmemory E Mostrar Todos Adicionados Na Colecao InMemory para TDD tests",
		Implementacao: `
		ADD 	implementacao: Nome: "Add Items Em ColecaoInmemory E Mostrar Todos Adicionados Na Colecao" ,
			Implementacao: 
			- Modelagem e Instanciamento da Colecao 
				- Adicionar_Item :: funcao add item na colecao:: Usar a mesma instancia que comecou como arrayVazio la fora, e adicionar nela o novo item recebido...com o metodo append (instanciaColecao, novoItem) ...obs: esta funcao nao precisa retornar nada nao é responsabilidade dela mostrar todos items só adicionar. 
				- Listar_Todos_Items_Da_Colecao: retorna a instancia da colecao do modelador que esta sofrendo adicoes.`,
		Tutorial: "",
	},//

	Ciclo_CRU_DC_LR_LED: Modeladores{
		Nome: `
		Ciclo_CRU_DC_LR_LED__CREATE_READ_TODOS_READ_ESPECIFICO_UPDATE_DELETE_CONGELA_IN_LIXEIRA_LIXEIRA_RESTAURA_LIXEIRA_EXCLUI_DEFINITIVAMENTE",
		Beneficio: "possiveis_CRU_DC_LR_LED: {\"CREATE\", \":READ_TODOS\", \"READ_ESPECIFICO\", "UPDATE", "DELETE_CONGELA_IN_LIXEIRA", "LIXEIRA_RESTAURA", "LIXEIRA_EXCLUI_DEFINITIVAMENTE",}",
		Implementacao: "possiveis_CRU_DC_LR_LED: {"CREATE", ":READ_TODOS", "READ_ESPECIFICO", "UPDATE", "DELETE_CONGELA_IN_LIXEIRA", "LIXEIRA_RESTAURA", "LIXEIRA_EXCLUI_DEFINITIVAMENTE",}`,

		ConceitoBeneficio: "#TODO",
		Implementacao: "#TODO",
		Tutorial: "#TODO",
	},//

	Campo_Com_Valor_Default_Fixo_Via_Modelador: Modeladores{
		Nome: "Campo_Com_Valor_Default_Fixo_Via_Modelador",
		ConceitoBeneficio: "Em vez de criar uma estrutura diretamente, podemos usar um construtor para atribuir valores padrão personalizados a todos ou a alguns de seus membros.",
		Implementacao: "emFuncao receber uma variavelIteradoraDeModeloStruct que seja ponteiro o Modelo, verificar se o campoAlvo neste modelo vier com valorZero nada seja passado este param.Campo tenha o valor default que desejamos....obs: podemos fazer para quantos campos quisermos...obs: no uso invocacao desta funcao ao apssar a instanciadesejada usar o & porque espera-se um ponteiro como &argumento.",
		Tutorial: "https://www.geeksforgeeks.org/how-to-assign-default-value-for-struct-field-in-golang/amp/",
	},//
}



