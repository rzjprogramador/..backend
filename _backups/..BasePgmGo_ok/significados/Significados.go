package significados

import "fmt"

type Significados struct {
	Palavra string
	Significado string
	Contextualizando string
}

func createSignificado (s Significados) Significados {
	return s
}

func ExecuteSignificado () {
	fmt.Println(createSignificado(estaticoRequest))
}