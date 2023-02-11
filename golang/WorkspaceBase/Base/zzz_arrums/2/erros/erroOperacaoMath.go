package erros

import (
	"errors"
	"fmt"
	"log"
)

func somaServ(a, b uint) (uint, error) {
	res := a + b
	if res > 10 {
		return 0, errors.New("Ops... resultado nao pode ser mais que 10")
	}
	return res, nil
}

func resolverSoma(a, b uint) uint {
	res, err := somaServ(a, b)

	if err != nil {
		log.Fatal(err.Error())
	}
	return res
}

func MainErroOperacaoMath() {
	fmt.Println(resolverSoma(9, 1))
}
