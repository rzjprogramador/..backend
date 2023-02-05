package ferramentasNativas

import (
	"fmt"
	"strings"
)

func Textos() {
	texto1 := "um titulo"
	primeiraLetraMaiuscula := strings.Title(texto1)

	fmt.Println(primeiraLetraMaiuscula)
}
