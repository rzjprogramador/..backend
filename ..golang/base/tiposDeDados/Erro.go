package tiposDeDados

import (
	"errors"
	"fmt"
)

var erroDefault error
var meuErrocomValor error = errors.New("Deu um erro qualquer!")

func Erro() {
	// erro sem valor mas tipado como error retorna um nil nulo por default.
	fmt.Println(erroDefault)

	// dar valor a uma var de tipo erro com pacote nativo errors.
	fmt.Println(meuErrocomValor)

}
