package descobertas

import (
	"fmt"
	"reflect"
)

func DescobrirTipos() {
	texto := "foo"
	numero := 10
	grupoString := []string{"foo", "bar"}

	// Descobertas: descobrir tipos com a libNativa reflect usando dela o metodo TypeOf()

	fmt.Println(reflect.TypeOf(texto))
	fmt.Println(reflect.TypeOf(numero))
	fmt.Println(reflect.TypeOf(grupoString))
}
