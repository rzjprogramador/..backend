package exemplo

import (
	"errors"
	"fmt"
	"log"
)

func exemploSomaCase(x int, y int) (int, error){
	res := x + y
	if res > 12 {
		return 0, errors.New("mensagem Erro:: Ops è maior que 10 nao pode")
	}
	return res, nil
}

func execute_exemplo_Soma (x int, y int) int{
	res, err := exemploSomaCase(x, y)
	if err != nil {
		log.Fatal(err.Error())
	}
	return res
}

func ExecuteExemploSomaDefensiva() {
	fmt.Println(execute_exemplo_Soma(10, 1))
}
