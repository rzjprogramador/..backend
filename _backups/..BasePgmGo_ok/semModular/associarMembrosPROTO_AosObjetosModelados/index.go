package main

import (
	"fmt"

	"github.com/rzjprogramador/PgmBase/utils"
)

type Entidade struct {
	Nome string
	Idade int
}

// metodo associado ao protoDoModelador :; vai ser disponivel desencadeavelmente em todos objetos por ele criado

func (e *Entidade) fazerAniversario() string{	
	e.Idade++
	feedbackString := fmt.Sprintf("%v >> fezAniver >> ", e)
	return feedbackString
}

var reinaldo = Entidade{
	Nome: "reinaldo",
	Idade: 100,
}

 /* *************************************************** */

 func main() {
	utils.ShowObject(Execute())
}

func prepare(obj *Entidade) string{
	return obj.fazerAniversario()
}

func Execute() Entidade{
	prepare(&reinaldo)
	return reinaldo
}
/*
SequenciaLogica:
1 - atrelar variavelParametro ao Ponteiro do Modelador, no GO : isoladamente antes do nome da funcao ex: (e *Entidade)
2 - agora atrealdo - posso pegar o campo deste modelador e fazer alguam operacao
3 - numa funcao de usoPrepare recebo um obj do mesmo Ponteiro do Modelador e executo o membrometodo que criei pois ja esta disponivel no protoDesencadeavel deste obj.
4 - executar este usoPrepare em alguma outra funcao para dar retorno a quem vai mostrar.

*/