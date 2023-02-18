package main

import "fmt"

func main() {
	primeira := "primeiro texto"
	pulaLinhas := `Linha1
	Linha2
	Linha3`

	publicar := fmt.Sprintf("%#v", primeira, pulaLinhas, )
	fmt.Println(publicar)

}