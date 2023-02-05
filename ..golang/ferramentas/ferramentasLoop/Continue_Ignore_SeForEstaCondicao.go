package ferramentasLoop

import "fmt"

type Textos []string

var list1 = Textos{"um", "dois", "erro1", "tres", "erro2"}

func ContinueIgnoreSeForEstaCondicao() {
	for _, item := range list1 {
		if item == "erro1" {
			continue
		}
		fmt.Println(item)
	}

}

/*
 clausula de loop "continue"
 ele pula a execucao que vc pediu na condicional se ela acontecer.

comparacao: diferente do break que quebra o loop inteiro , o continue quebra somente o que foi passado na condicao..e segue fazendo o loop.

aqui mostro o loop sem o que mandei pular no continue

 o que passei na condicao o continue vai pular... e continuar o loop

*/
