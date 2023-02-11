package ferramentasAcoes

import (
	"fmt"
	"log"
)

// --- exemplo 2 Defer Adiando

func avaliacaoAluno(n1, n2 int) bool {

	defer log.Println("Media calculada o resultado sera calculado ..esta msg é pra apos o retorno sendo true ou false")

	fmt.Println("Entrando na avaliacao do aluno.")

	mediaAceita := int(6)
	media := (n1 + n2) / 2

	if media >= mediaAceita {
		return true
	}
	return false

}

// sera executado no main

func ExecuteAvaliacaoAlunoAdiando() {
	fmt.Println(avaliacaoAluno(10, 10))
}
