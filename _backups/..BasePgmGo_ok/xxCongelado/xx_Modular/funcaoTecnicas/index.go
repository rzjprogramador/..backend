package funcaoTecnicas

import (
	"errors"
	"fmt"
	"log"
)

func somaCase(x int, y int) (int, error){
	res := x + y
	if res > 12 {
		return 0, errors.New("mensagem Erro:: Ops è maior que 10 nao pode")
	}
	return res, nil
}

func Execute_SomaDefensiva (x int, y int) int{
	res, err := somaCase(x, y)
	if err != nil {
		log.Fatal(err.Error())
	}
	return res
}

func ExecuteSoma() {
	fmt.Println(Execute_SomaDefensiva(10, 1))
}
