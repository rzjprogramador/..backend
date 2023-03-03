package plataforma

import "fmt"

type Plataforma struct {
	Nome string
	Tutorial string
	Fundador string
	Atualizar_Plataforma string
	Instalacao_no_linux string
	Obrigatorio_remover_instalacoes_anteriores string
	Comando_Remover_e_Instalar string
	Adicionar_binario_ao_caminho_do_sistema_do_usuario string
	Conferir_Caminho string
	Ver_todas_varsDeAmbiente_da_plataforma string
	Ver_versao_confirmando_instalacao string
	Limpar_cache_de_modulos_baixados string
	Atualizar_ferramentas_da_plataforma_no_editor_vscode string
	Release_novidades_das_atualizacoes_oficiais string
}

func addPlataforma (p Plataforma) Plataforma{
	return p
}

func ExecutePlataforma () {
	fmt.Println(addPlataforma(plataforma_Golang))
}