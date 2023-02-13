package aaEntradas

import "fmt"

type InsercaoEntradaEscritaPergunta struct {
	nomeDaForma string
	exemplo string
}

func addInsercoes (i InsercaoEntradaEscritaPergunta) []InsercaoEntradaEscritaPergunta {
	sliceInsercoes := []InsercaoEntradaEscritaPergunta{}
	appendInsercoes := append(sliceInsercoes, i)
	return appendInsercoes
}

func getInsercoes () []InsercaoEntradaEscritaPergunta {
	slice := []InsercaoEntradaEscritaPergunta{}
	return slice
}

// Request
var insercaoDeEscritaLiteralRequest = InsercaoEntradaEscritaPergunta {
	nomeDaForma: "literal",
	exemplo: "ex Forma_LiteralMagica: var variavelNome = 'foo' ",
}

var insercaoDeEscritaDinamicaParamRequest = InsercaoEntradaEscritaPergunta {
	nomeDaForma: "Dinamica_Por_Param",
	exemplo: "ex Forma_Dinamica_Por_Param: func (p TipoDoParam) { dentro acesso os campos do param  desencadeando p. } ",
}

// Externar
func ExecuteInsercao () {
	addInsercoes(insercaoDeEscritaLiteralRequest)
	addInsercoes(insercaoDeEscritaDinamicaParamRequest)
	fmt.Println(getInsercoes())
}