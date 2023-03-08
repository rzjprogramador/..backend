package main

import main1 "github.com/rzjprogramador/PgmBase/main"

type ExecuteTipoDeDadoType struct {
	TipoDeDado
	ExemploVerificarTipoDeDadoType
}


func main() {
	main1.ShowObject(ExecuteTipoDeDado())
}
	

func ExecuteTipoDeDado() ExecuteTipoDeDadoType{
	tipoDeDado := createTipoDeDado()	
	exemploVerificarTipoDeDado := Exemplo_VerificarTipoDeDado()

	return ExecuteTipoDeDadoType{
		tipoDeDado,
		exemploVerificarTipoDeDado,
	}
}

 /* *************************************************** */

type TipoDeDado struct {
	Linguagem string 
	AcoesAllTipoDeDado
	AllTipoDeDado
}

type AcoesAllTipoDeDado struct {
	VerificarTipo
}

type ModelTipoDeDado struct {
	Linguagem string
	Nome string
	Keyword string
	
	Representacao_PodeInstanciar string
	Conceito string
	Pode_Reescrever_Valor_Da_Variavel bool
	Uso string
	Aplicabilidade string
	ValorDefault_SeNadaForPassado string
	Exemplo string
}

type VerificarTipo struct {
	Dependencia string
	UsoDependencia string
	Saida string
	Exemplo string
}

type RepresentacaoTexto struct {
	FormatacaoTemplateLiterals_PularLinhas string
	Interpolar_Variavel_Em_texto string
	Concatenar_VariaveisString string
	Caracteres_Especiais []string
}


type ModelTipoDadoTexto struct {
	Linguagem string
	Nome string
	Keyword string
	Representacao_PodeInstanciar string
	Conceito string
	Pode_Reescrever_Valor_Da_Variavel bool
	ValorDefault_SeNadaForPassado string
	Exemplo string
	RepresentacoesTexto RepresentacaoTexto
	PularCaracteresEspeciaisEDeConflito string
}

type AllTipoDeDado struct {
	Primitivos
	Construidos
}
type Primitivos struct {
	Boleano ModelTipoDeDado
	Texto ModelTipoDadoTexto
	CaractereUnico ModelTipoDeDado
	NumeroInteiro ModelTipoDeDado
	NumeroDecimal ModelTipoDeDado
}

type Construidos struct {
	Erro ModelTipoDeDado
	AnyQualquerInterface ModelTipoDeDado
	Vazio_Void ModelTipoDeDado
}


 /* *************************************************** */

// ORIGEM
func newTipoDeDado(t TipoDeDado) TipoDeDado{
	return t
}

// CRUD

func createTipoDeDado() TipoDeDado{
	return newTipoDeDado(Use_TipoDeDado_Golang)
}



