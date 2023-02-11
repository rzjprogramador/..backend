package main

import (
	"fmt"

	"github.com/rzjprogramador/CalculandoGo/math"
)

func main() {
	resultSoma := math.Soma(1000, 10)
	resultSub := math.Sub(100, 10)

	fmt.Println(resultSoma)
	fmt.Println(resultSub)
}
