package projeto

import "fmt"

type Projeto struct {
	WorkspaceAreaDeVariosProjetos WorkspaceAreaDeVariosProjeto
	GerenciadorDependencias GerenciadorDependencia
	ComandosProjeto ComandosProjeto
	RegrasOrganizaoProjeto RegrasOrganizaoProjeto
	Importacoes_Exportacoes_Externas Importacoes_Exportacoes_Externas
}

type WorkspaceAreaDeVariosProjeto struct {
	conceito string
	consequencias_automaticas string
	IniciarWorkspace string
	adicionar_mais_pastas_ao_workspace string
}

type GerenciadorDependencia struct {
	IniciarGerenciador_Dependencias string
	Acao_Automatica string
	Adicionar_Dependencia_Modulos_Externos string
	Atualizar_Dependencias string
}

type ComandosProjeto struct {
	Rodar_Arquivo_Projeto string
}

type RegrasOrganizaoProjeto struct {
	Pastas_Iniciais string
	Arquivo_Principal_Entrada string
	Pacote_Principal_Entrada string
	Funcao_Principal_Entrada string
	Pacotes_Permitidos_Por_Pasta uint
	Pacotes_Podem_Se_Repetir bool
	Para_Pertencer_Ao_Mesmo_Pacote string
}

type Importacoes_Exportacoes_Externas struct {
	conceito string
	Baixar_PacoteLibraryExterna string
	Usar_PacoteExterno string
	Versionador_De_Pacotes_Externos string
	Controle_Dependencias_Externas string
	Projetar_Em_Modo_Estudante string
}

func addProjeto (p Projeto) Projeto{
	return p
}

func ExecuteProjeto () {
	fmt.Println(
		addProjeto(projeto_golang),
	)
}
