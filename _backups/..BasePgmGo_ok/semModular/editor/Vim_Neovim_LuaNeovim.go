package main

import (
	"github.com/rzjprogramador/PgmBase/utils"
)

type EditorNeovim struct {
	SiteOficial string
	Desinstalacao string
	Instalacao string
	ComandosNativosApiVim
	ComandosSistema
	ArquivosConfiguracao
	ApiVimDefinicoesEmLinguagens ApiVim
}

type ComandosNativosApiVim struct {
	NovaTabDeArquivo string
}
type ComandosSistema struct {
	InspecionarInstalacoes string
}

type ArquivosConfiguracao struct {
	Conceito string
	Lua ConfiguracoesEditor
	VimScript ConfiguracoesEditor
}

type ConfiguracoesEditor struct {
	LocalDeConfiguracao string
	ArquivoInicialRoteadorRoot string
	ArquivosASeremChamadosNoRoteador string
}

type ApiVim struct {
	Nome string
	UsoObjetoApiVim string
	Definicoes_G 
	Definicoes_Options
	Definicoes_Cmd_Terminal
}

type ConfigEmDiferentesLinguagens struct {
	NoVimScript string
	NoLua string
}

type Definicoes_G struct {
	ObjDisponivelInstanciarEUsar ConfigEmDiferentesLinguagens
	ComoSetar ConfigEmDiferentesLinguagens

}

type Definicoes_Options struct {
	ObjDisponivelInstanciarEUsar ConfigEmDiferentesLinguagens
	ComoSetar ConfigEmDiferentesLinguagens
	NumerarLinha ConfigEmDiferentesLinguagens

}

type Definicoes_Cmd_Terminal struct {
	ObjDisponivelInstanciarEUsar ConfigEmDiferentesLinguagens
	ComoSetar ConfigEmDiferentesLinguagens
	NumerarLinha ConfigEmDiferentesLinguagens

}


var editorNeovimLua = EditorNeovim{
	SiteOficial: "https://neovim.io",

	Desinstalacao: `sudo apt remove --purge neovim`,

	Instalacao: `
	Conferir versao mais recente:
	Neovim no Debian : sudo apt-get install neovim

	Ou baixando appImage:
	curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
	chmod u+x nvim.appimage // dar permissao de execusao
	./nvim.appimage // abrir executar programa
`,

	ComandosNativosApiVim: ComandosNativosApiVim{
		NovaTabDeArquivo: `:tabnew <~/.LOCAL_ARQUIVO>`,
	},

	ComandosSistema: ComandosSistema{
		InspecionarInstalacoes: `:checkhealth  // O que nao tiver com OK esta faltando.`,
	},

	ArquivosConfiguracao: ArquivosConfiguracao{
		Conceito: ``,
		Lua: ConfiguracoesEditor{
			LocalDeConfiguracao: `HOME/.config/nvim/   //obs: se nao existir esta pasta criar`,
			ArquivoInicialRoteadorRoot: `init.lua`,
			ArquivosASeremChamadosNoRoteador: `mapping.lua, settings.lua, `,
		},
		VimScript: ConfiguracoesEditor{
			LocalDeConfiguracao: ``,
			ArquivoInicialRoteadorRoot: `init.vim`,
			ArquivosASeremChamadosNoRoteador: `mapping.vim, settings.vim, `,
		},
	
	},

	ApiVimDefinicoesEmLinguagens: ApiVim{
		Nome: "",
		UsoObjetoApiVim: "vim.<funcaodisponivelApi>",

		Definicoes_G: Definicoes_G{
			ObjDisponivelInstanciarEUsar: ConfigEmDiferentesLinguagens{
				NoVimScript: "",
				NoLua: "vim.g  instanciar para g .. e usar o g para setar os comandos",
			},
		},

		Definicoes_Options: Definicoes_Options{
			ObjDisponivelInstanciarEUsar: ConfigEmDiferentesLinguagens{
				NoVimScript: "",
				NoLua: "vim.opt  instanciar para opt e usar o opt para setar os comandos",
			},
		},

		Definicoes_Cmd_Terminal: Definicoes_Cmd_Terminal{
			ObjDisponivelInstanciarEUsar: ConfigEmDiferentesLinguagens{
				NoVimScript: "",
				NoLua: "vim.cmd // instanciar para cmd e usar o cmd para setar os comandos",
			},
		},
	},


}

func main() {
	utils.ShowObject(editorNeovimLua)
}