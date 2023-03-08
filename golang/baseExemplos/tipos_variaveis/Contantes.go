package main

import "fmt"

// declarar variavel sem iniciar valor
var valorDeFora string

func createNewConstantText() string{
	const newConstant = "o valor tem que ser inserido dentro da funcao"
	return newConstant

}

func UpdateConstantText(c , newValue string) string{
	c = createNewConstantText()
	c = newValue
	return c
}

func main() {
	constantEmuso := createNewConstantText()
	newConstant := UpdateConstantText(constantEmuso, "novo valor")
	
	// fmt.Println(createNewConstantText())
	// fmt.Println(UpdateConstantText("UPDATE :: este é novo valor para a constant text"))
	fmt.Println(newConstant)
}

// Detalhe: o valor tem que ser inserido dentro da funcao, nao aceita variaveis que ja tenham um tipo definido...mas podemos prometer no reotrno da fucnao o tipo que vai devolver a constante.
