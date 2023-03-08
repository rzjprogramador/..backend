package editor

var editorVIM = Editor{
	Vim: ModelVim{
		Modos_Possiveis: []string{"i-Insercao", "v-Visual", "2pontos-Comandos",},
		Mudar_Modos: MudarModos{
			Sair_De_Modo: "ESC",
			Mudar_Para_Insercao: "i", Mudar_Para_Visual: "v", Mudar_Para_Comandos: "2pontos",
		},
		Acoes: Acoes{
			Copiar_Linha_Inteira: ModelAcoesVim{
				NomeAcao: "Copiar_Linha_Inteira",
				Comando: "yy",
				NoModo: "v-visual",
				QuerDizer: "yank/puxao",
				NomeComandoParaMapear: "#TODO",
			},// ModelAcoes

			Colar_na_Linha_Abaixo: ModelAcoesVim{
				NomeAcao: "Colar_na_Linha_Abaixo",
				Comando: "p",
				NoModo: "v-visual",
				QuerDizer: "paste",
				NomeComandoParaMapear: "#TODO",
			},// ModelAcoes

			Desfazer: ModelAcoesVim{
				NomeAcao: "Desfazer",
				Comando: "u",
				NoModo: "v-visual",
				QuerDizer: "U de undo/ desfazer",
				NomeComandoParaMapear: "#TODO",
			},// ModelAcoes

			Refazer_Desfeita: ModelAcoesVim{
				NomeAcao: "Refazer_Desfeita",
				Comando: "crt-R",
				NoModo: "v-visual",
				QuerDizer: "R de Refazer",
				NomeComandoParaMapear: "#TODO",
			},// ModelAcoes

			Selecionar_TodaLinha: ModelAcoesVim{
				NomeAcao: "Selecionar_TodaLinha",
				Comando: "somente seta para baixo",
				NoModo: "v-visual",
				QuerDizer: "selecionar",
				NomeComandoParaMapear: "#TODO",
			},// ModelAcoes

		},// Acoes
	},
}

/*
Modos_Possiveis: 

Mudar_Modos: 
Sair_De_Modo: "ESC",
  Mudar_Para_Insercao: "i",
  Mudar_Para_Visual: "v",
  Mudar_Para_Comandos: ": 2 pontos e inserir o comando na barra.",

// modelo: comando: "" ,noModo: "visual", querDizer: "",nomeComandoParaMapear: "",

Copiar_Linha_Inteira: comando: "yy" ,noModo: "visual", querDizer: "yank", nomeComandoParaMapear: "",
Colar_na_Linha_Abaixo: comando: "p" ,noModo: "visual", querDizer: "paste", nomeComandoParaMapear: "",

Desfazer: comando: "u" ,noModo: "visual", querDizer: "paste", nomeComandoParaMapear: "",
Refazer_Desfeita: comando: "crt+R" ,noModo: "visual", querDizer: "",nomeComandoParaMapear: "",

Selecionar_TodaLinha: comando: "Só Seta para Baixo" ,noModo: "visual", querDizer: "",nomeComandoParaMapear: "",
*/