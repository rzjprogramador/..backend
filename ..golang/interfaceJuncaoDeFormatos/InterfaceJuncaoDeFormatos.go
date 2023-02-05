package interfaceJuncaoDeFormatos

import (
	"fmt"
	"math"
)

type IForma interface {
	area() float64
}

func escreverArea(f IForma) {
	fmt.Printf("A area da forma é %0.2f \n", f.area())
}

type Retangulo struct {
	altura float64
	largura float64
} 

func (r Retangulo) area() float64 {
	return r.altura * r.altura
}

type Circulo struct {
	raio float64
}

func (c Circulo) area() float64 {
	return math.Pi * (c.raio * c.raio)
}

func Execute() {
	r := Retangulo{10, 15}
	escreverArea(r)

	c := Circulo{10}
	escreverArea(c)
}