package main

import (
	"log"
	"net/http"
)
func minhaFuncaoController(w http.ResponseWriter, _ *http.Request) {
	w.Write([]byte("Hello Word 2"))
}

func main() {
	http.HandleFunc("/home", minhaFuncaoController)

	log.Fatal(http.ListenAndServe(":4444", nil))
}

/*
Pacote: `"net/http"`,
TipoFuncionalidade: "ApiRest",
pacoteDoTipo: "objeto",
PacoteOrigemDetentora: `time da linguagem Golang`,
Preferido: "nao",
Detalhes: `nao muito bom porque nao da log de usabilidade server no console, e nao define na funcao de servidor o metodo se é Get,Post etc...`,
PacoteDaAutoReloadAutomatico: "Nao , tem que derrubar e subir de novoo server.",
ImportarPacote: `"net/http"`,
SubirServidorHttp: ` com o pacote/modulo usar o metodo ListenAndServe(portaEmstring, preenchimentoParaErro) ex: log.Fatal(http.ListenAndServe(":4444", nil))`,

DefinirRota: `moduloemUso. metodoManipuladorDoServidor HandleFunc (RotaemString, minhaFuncaoController) Exemplo: http.HandleFunc("/home", minhaFuncaoController) `,

NaMinhaFuncaoController_DadosQueQueroReceberEResponder: 
Conceito: "Aqui receberei os dados da requisicao e vou responder",
Uso: 'recebo o modulo. metodo de Resposta, e o ponteiro do modulo. RequisicaoPedidoQuechegou se for post/pedido
,

RodarArquivoServidor: `go run arquivo.go`,
MetodosDoPacote: 
  EscritaHtml: "metodo w.Write só escreve no html da rota passada "
*/