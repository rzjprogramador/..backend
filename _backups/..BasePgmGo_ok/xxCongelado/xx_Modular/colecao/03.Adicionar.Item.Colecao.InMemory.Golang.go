package colecao

func AddObjetoInColecao (o Modelador) {
	Instancia_colecao_do_modelador = append(Instancia_colecao_do_modelador, o)
	// Usar a mesma instancia que comecou como arrayVazio la fora, e adicionar nela o novo item 
}

/*
** ADD 
implementacao: Nome: "Add Items Em ColecaoInmemory E Mostrar Todos Adicionados Na Colecao" ,

Implementacao: 
	- Modelagem e Instanciamento da Colecao 
	
	- Adicionar_Item :: funcao add item na colecao:: Usar a mesma instancia que comecou como arrayVazio la fora, e adicionar nela o novo item recebido...com o metodo append (instanciaColecao, novoItem) ...obs: esta funcao nao precisa retornar nada nao é responsabilidade dela mostrar todos items só adicionar. 

	- Listar_Todos_Items_Da_Colecao: retorna a instancia da colecao do modelador que esta sofrendo adicoes 

*/
