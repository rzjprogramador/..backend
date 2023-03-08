package projeto

var projeto_golang = Projeto{
	WorkspaceAreaDeVariosProjetos: WorkspaceAreaDeVariosProjeto{
		conceito: "comunicacao de varios projetos na mesma pasta de area de trabalho",
		consequencias_automaticas: "este procedimento vai ser o inicio do workspace> // obs: vai gerar um arquivo go.work com o objeto use que vai apontar os caminhos locais que posso chamar no namespace",

		IniciarWorkspace: 
		"go work init <./pasta que deseja mapear pra ter acesso como objeto namespace ex: ./projeto1",

		adicionar_mais_pastas_ao_workspace: "go work use ./pastaProjeto2_a_ser_adicionada_ao_workspace",
	},

	GerenciadorDependencias: GerenciadorDependencia{
		IniciarGerenciador_Dependencias: 
	"go mod init <OpcionalRepositorio/NomeProjeto> // obs: dependencias sao todos os modulos importados no app...é como se fosse o npm init que cria o package json . então ele é tipo o package.json",

	Acao_Automatica:" ele fara um link para o github.com/nome que vc escolheu apra o modulo",

	Adicionar_Dependencia_Modulos_Externos: "go get <urlCaminhoDoModulo> // automaticamente ele vai adicionar no go.mod e travar no go.sum",

	Atualizar_Dependencias: "go mod tidy //traducao:: tidy == limpar... enato vai apagar as dependencias nao usadas do go.mod é bom rodar este tidy sempre depois de baixar alguam dependencia.",
	},

	ComandosProjeto: ComandosProjeto{
		Rodar_Arquivo_Projeto: "go run <arquivo.extensao>",
	},

	RegrasOrganizaoProjeto: RegrasOrganizaoProjeto{
		Pastas_Iniciais: "o mesmo nome que dér a pasta do projeto crie um repo no github. // posso imitar o github, criar as pastas :: workspaceDesejado / github.com/ userDoGithub / meuProjetoAlvo. ",

		Arquivo_Principal_Entrada: "cmd/main.go",

		Pacote_Principal_Entrada: "package main",

		Funcao_Principal_Entrada: "func main()",

		Pacotes_Permitidos_Por_Pasta: 1,

		Pacotes_Podem_Se_Repetir: false,

		Para_Pertencer_Ao_Mesmo_Pacote: "coloque na mesma pasta do pacote.",
	},

	Importacoes_Exportacoes_Externas: Importacoes_Exportacoes_Externas{
		conceito: "sera gerado assim que baixar o primeiro modulo externo...e terá os links de hash de commits feitos no github sobre a versao exata do pacote qque esta sendo emprestado.",

		Baixar_PacoteLibraryExterna: "go get <url do pacote ex: github.com/caminhos do pacote> // procure por Library/Biblioteca o comando no repo do pacote // o golang baixa os codigos para o pkg/mod/github.com/",

		Usar_PacoteExterno: "como se fosse namespace importe a url e use o ultimo objeto  desencadeando seu Metodo() importado.",

		Versionador_De_Pacotes_Externos: "go.sum // arquivo na raiz // é tipo um look do node",

		Controle_Dependencias_Externas: "entao neste go.sum caso o dono do pacote mude algo este controle de hashs de commits mantem-se alinhanhado com a versao emprestada correta por este hash de commit registrado. ",

		Projetar_Em_Modo_Estudante: `em modo estudante ao inves de criar pacotes/modulos :: cada pasta pode conter um arquivo main.go / com package main / e funcao main() / para rodar o arquivo : go run enderecoCompleto do Arquivo.extensao`,
	},

	
	
} // Projetos_Principal