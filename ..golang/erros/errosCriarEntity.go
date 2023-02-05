package erros

import (
	"errors"
	"fmt"
	"log"
)

type Entity struct {
	nome      string
	numeracao uint
}

var e1 = Entity{"", 1000}

// var e1 = Entity{"Rei", 1000}
var e2 = Entity{"Guga", 2000}

// var e3 = Entity{"Leo", 3000}


func createEntityServ(inputEntity Entity) (Entity, error) {
	newEntity := inputEntity

	if newEntity.nome == "" {
		return Entity{}, errors.New("Ops Nao pode criar com nome vazio")
	}
	return newEntity, nil
}

func createEntityResolver(inputEntity Entity) Entity {
	created, err := createEntityServ(inputEntity)

	if err != nil {
		log.Fatal(err.Error())
	}
	return created
}

func MainErroCriarEntity() {
	// fmt.Println(createEntity(e1))
	fmt.Println(createEntityResolver(e2))
}
