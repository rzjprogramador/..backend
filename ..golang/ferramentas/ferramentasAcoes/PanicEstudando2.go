package ferramentasAcoes

import "log"

func recuperaExecucao2() {
	if r := recover(); r != nil {
		log.Printf("Recuperando execucao ..o que nao podia receber era :: %s", r)
	}
}

func panicEstudando2(texto string) bool {
	defer recuperaExecucao2()
	avaliar := texto
	if avaliar != "fail" {
		return false
	}
	panic("RECEBI < fail > E ERA O QUE NAO PODIA")
	// panic() é o throw com new Error(mensagem) abordator do GO
}

func ExecutePanicEstudando2() {
	log.Println(panicEstudando2("fail"))
	log.Println("Continuando execucao - linha abaixo")
}
