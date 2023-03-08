package main

import "github.com/rzjprogramador/PgmBase/utils"

type EntradaDeDado struct {
	Conceito string
	Missao []string
	QuemMandaOValor_Origem string
	ConceitoOrigens
	Origens OrigensPossiveis
}

type OrigensPossiveis struct {
	ClientCode OrigemInformacao
	ClientHttp OrigemInformacao
}

type OrigemInformacao struct {
	OrigemEnviadoPor string
	DeForma string
	EntraVia string     
}

type ConceitoOrigens struct {
	Dinamica string
	Literal string
}

func main() {
	utils.ShowObject(ExecuteEntradaDeDado(EntradaDeDado_Universal))
}

func ExecuteEntradaDeDado(e EntradaDeDado) EntradaDeDado{
	return prepare(e)
}

func newEntradaDeDado(e EntradaDeDado) EntradaDeDado{
	return e
}

func prepare(e EntradaDeDado) EntradaDeDado{
	created := newEntradaDeDado(e)
	return created
}

func main() {
	utils.ShowObject(ExecuteEntradaDeDado(EntradaDeDado_Universal))
}

