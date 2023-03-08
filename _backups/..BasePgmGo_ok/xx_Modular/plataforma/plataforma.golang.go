package plataforma

var plataforma_Golang = Plataforma{
	Nome: "Golang",
	
	Tutorial: "https://youtube.com/watch?v=_SmXEb7ZWHw&si=EnSIkaIECMiOmarE",

	Fundador: "Google",

	Atualizar_Plataforma: `
	Desinstalar versao anterior: sudo rm -rf /usr/local/go 
	// em https://go.dev/dl/ ::baixar a versao mais recente para linux 64bits
	`,

	Instalacao_no_linux: "baixe o pacote aqui https://go.dev/doc/install",

	Obrigatorio_remover_instalacoes_anteriores: "apos baixar o pacote de o comando onde vc baixar o zipado :: obs: mudar a url onde esta usr colocar o home, e onde esta usr colocar o usuario do sistema ::",

	Comando_Remover_e_Instalar: `
	NA PASTA DOWNLOADS ONDE BAIXOU O EXECUTAVEL :: REMOVER O ANTIGO E DESCOMPACTAR E INSTALAR O NOVO :: 
	sudo rm -rf /home/rzj/go && tar -C /home/rzj -xzf go1.20.1.linux-amd64.tar.gz
	// obs: neste comando ja troquei usr por home/rzj
	`,

	Adicionar_binario_ao_caminho_do_sistema_do_usuario: `
	NO .bash_aliases ## ADICIONAR O BINARIO DO GO A VARIAVEL PATH/CAMINHOS DO LINUX
	export PATH="$HOME/go/bin:$PATH" # GOLANG 
	source .bash_aliases
	`,

	Conferir_Caminho: `Certifique-se de que seu PATH contenha/usr/local/go/bin
  echo $PATH | grep "/home/rzj/go/bin"
	
	`,

	Ver_todas_varsDeAmbiente_da_plataforma: "```go env```" ,

	Ver_versao_confirmando_instalacao: "```go version```",

	Limpar_cache_de_modulos_baixados: "go clean -modcache // vai limpar o cache dos modulso baixados em go/pkg/ a pasta cache de todos modulos externos baixados. pra recuperar algum importante... lá no projeto de um go mod tidy",

	Atualizar_ferramentas_da_plataforma_no_editor_vscode: "F1 >>> escolha .GoInstall/Update tools  // marque as opcoes geralmente todas que quer atualizar e aperte em ok vai atualizar o tools do go >>> reinicie o editor",

	Release_novidades_das_atualizacoes_oficiais: "https://go.dev/doc/devel/release",
}