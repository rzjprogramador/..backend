package editor

type Editor struct{
	Vim ModelVim
	VsCode string
}

type ModelVim struct{
	Modos_Possiveis []string
	Mudar_Modos MudarModos
	Acoes Acoes

}

type MudarModos struct{
	Sair_De_Modo string
  Mudar_Para_Insercao string
  Mudar_Para_Visual string
  Mudar_Para_Comandos string
}

type ModelAcoesVim struct{
	NomeAcao string
	Comando string
	NoModo string
	QuerDizer string
	NomeComandoParaMapear string
}

type Acoes struct{
	Copiar_Linha_Inteira ModelAcoesVim
	Colar_na_Linha_Abaixo ModelAcoesVim
	Desfazer ModelAcoesVim
	Refazer_Desfeita ModelAcoesVim
	Selecionar_TodaLinha ModelAcoesVim
}

