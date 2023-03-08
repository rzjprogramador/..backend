package tiposDeDado

import (
	"fmt"
)

type ModelTipo struct {
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

type ModelTipoTexto struct {
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

type RepresentacaoTexto struct {
	FormatacaoTemplateLiterals_PularLinhas string
	Interpolar_Variavel_Em_texto string
	Concatenar_VariaveisString string
	Caracteres_Especiais []string
}

type TipoPrimitivo struct {
	Boleano ModelTipo
	Texto ModelTipoTexto
	CaractereUnico ModelTipo
	NumeroInteiro ModelTipo
	NumeroDecimal ModelTipo
	Erro ModelTipo
	AnyQualquerInterface ModelTipo
	Vazio_Void ModelTipo
}

func addTexto(t *ModelTipoTexto) *ModelTipoTexto {
	// definindo valores fixos nos campos do tipo: // obs: valendo : fazer um tipo pro Args e outro pro Model pra nao pedir estes campos que ja sao fixos pro Utilizador.
	t.Nome = "Texto"
	t.Conceito = "espaço vazio conta como caractere, se nao o deseja faça uma validacao contra isto."
	t.RepresentacoesTexto .Caracteres_Especiais = []string{"{,", "}", "#", "$", "%", "@", "!", "&", "*", "^", "(", ")", "[", "]", "+", "×", "÷", "=", "/", "_", "€", "£", "¥", "₩", ",", ":", ";", "?", ".", }

	return t
}

func addBoleano(b *ModelTipo) *ModelTipo{
	b.Nome = "Boleano"
	return b
}

func addCaractereUnico(c *ModelTipo) *ModelTipo{
	c.Nome = "Caractere_Unico"
	return c
}

func addNumeroInteiro(n *ModelTipo) *ModelTipo{
	n.Nome = "Numero_Inteiro"
	return n
}

func addNumeroDecimal(n *ModelTipo) *ModelTipo{
	n.Nome = "Numero_Decimal"
	return n
}

func addErro(e *ModelTipo) *ModelTipo{
	e.Nome = "Erro"
	return e
}

func addAnyQualquerInterface(a *ModelTipo) *ModelTipo{
	a.Nome = "Any_Qualquer_Interface_De_Tipo"
	return a
}

func addTipoPrimitivo () TipoPrimitivo {
	boleano := addBoleano(&ObjBoleanoGolang)
	texto := addTexto(&ObjTextoGolang)
	caractereUnico := addCaractereUnico(&ObjCaractereUnicoGolang)
	numInteiro := addNumeroInteiro(&ObjNumeroInteiroGolang)
	numDecimal := addNumeroDecimal(&ObjNumeroDecimalGolang)
	erro := addErro(&ObjErroGolang)
	anyQualQuerInterface := addAnyQualquerInterface(&AnyQualquerTipoOuInterfaceGolang)

	objCreated := TipoPrimitivo{ 
		Boleano: *boleano, 
		Texto: *texto, 
		CaractereUnico: *caractereUnico,
		NumeroInteiro: *numInteiro,
		NumeroDecimal: *numDecimal,
		Erro: *erro,
		AnyQualquerInterface: *anyQualQuerInterface,
	}
	return objCreated
}

func ExecuteTipo () {
	fmt.Println(addTipoPrimitivo())
}