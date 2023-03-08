package exemplo

import "fmt"

type Car struct {
	nome      string
	numeracao uint
}

var collectionCar []Car

var e1 = Car{"Bmw", 1000}
var e2 = Car{"Corsa", 2000}
var e3 = Car{"Fusca", 3000}

func MainCar() {
	createCar(e1)
	createCar(e2)
	createCar(e3)
	fmt.Println(listCars())
}

func createCar(inputCar Car) {
	collectionCar = append(collectionCar, inputCar)
}

func listCars() []Car {
	return collectionCar
}
