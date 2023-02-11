package erros

import (
	"fmt"
	"log"
)

type EntityValida struct {
	nome      string `json: "nome", validate: "required, nome"`
	numeracao uint   `json: "numeracao", validade: "required, numeracao"`
}

var ev1 = EntityValida{"", 1000}

// var ev1 = EntityValida{"Rei", 1000}
// var ev2 = EntityValida{"Guga", 2000}
// var ev3 = EntityValida{"Leo", 3000}

func createEntityValida(inputEntityValida EntityValida) (EntityValida, error) {
	newEntityValida := inputEntityValida

	// if newEntityValida == validate.Validate(inputEntityValida) {
	// 	return EntityValida{}, errors.New("Ops Algum campo esta vazio")
	// }
	return newEntityValida, nil
}

func executeCreateEntityValida(inputEntityValida EntityValida) EntityValida {
	created, err := createEntityValida(inputEntityValida)

	if err != nil {
		log.Fatal(err.Error())
	}
	return created
}

func MainErroCriarEntityValida() {
	fmt.Println(executeCreateEntityValida(ev1))
}
