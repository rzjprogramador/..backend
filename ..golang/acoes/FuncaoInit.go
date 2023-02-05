package acoes

import "fmt"

func init() {
	varGlobal1 := "este valor é global"

	fmt.Printf("executando a funcao init no arquivo FuncaoInit.go do package acoes, compartilhando uma varGlobal1 com o valor :: %s", varGlobal1)
}

/*
funcao_init:
a funcão init() pode ter uma em cada arquivo
ela sera sempre executada antes da funcao main principal da raiz.

aplicabilidade: ela serve como uma inicializacao antes do programa começar,
iniciar alguma variavel global para todos os arquivos ,
algo compartilhado por todos.

exportacao: nao precisa exportar a funcao init() em si ..onde for usa-la ... mas para ela ser executada pelo menos seu pacote e alguma funcao deste pacote tem que estar sendo usada no main
*/
