package ferramentasAcoes

import "log"

func recuperaExecucao() {
	if r := recover(); r != nil {
		log.Println("Recuperando execucao")
	}
}

func hasAprovado(num1, num2 float64) bool {
	defer recuperaExecucao()

	media := (num1 + num2) / 2
	if media > 6 {
		return true
	} else if media < 6 {
		return false
	}
	panic("A MEDIA É EXATAMENTE 6")

}

func ExecutePanic() {
	log.Println(hasAprovado(6, 6))
	log.Println("Pos execucao")
}
