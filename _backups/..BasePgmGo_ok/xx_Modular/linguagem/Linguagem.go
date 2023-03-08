package linguagem

import "fmt"

type Linguagems struct {
	Nome string
	Extensao string
	PlataformasDeUso []string
	RegraDaLinguagem RegraDaLinguagem
	InstanciacaoDeVariavel InstanciacaoDeVariavel
}

type InstanciacaoDeVariavel struct {
	Variaveis Declarar_Variaveis
}

type Sintaxe struct{
	Declaracao Declaracao
	UsoDoDeclarado UsoDoDeclarado
}

type Declaracao struct{
	Nome string
	SintaxeDeclaracao string
	ExemploDeclaracao string
}

type UsoDoDeclarado struct{
	SintaxeUsarDeclarado string
	ExemploUsoDoDeclarado string
}

type Declarar_Variaveis struct {
	Variavel_implicita_Curta Sintaxe
	Variavel_Dinamica_Curta Sintaxe
	Variavel_Explicita_Verbosa Sintaxe
	Variaveis_Multiplas_Por_JustaPosicao Sintaxe
	UsoDoDeclarado UsoDoDeclarado
}

type RegraDaLinguagemModel struct {
	Nome string
	TemQueObedecer bool
	Linguagem string
	Conceito string
	Macete string
	EvitarErro string
	traducaoDoErroEvitavel string
	Exemplo string
}

type RegraDaLinguagem struct {
	Declarar_OrigemModel_No_Uso_De_Cada_Objeto RegraDaLinguagemModel
	Inserir_Virgula_No_Uso_De_Cada_Objeto RegraDaLinguagemModel
	Colocar_Mais_Que_Um_Valor_Em_Variavel RegraDaLinguagemModel
	Ignorar_Parametro_Variavel RegraDaLinguagemModel
	Isolamento []string
}

func addLinguagem (l Linguagems) Linguagems {
	return l
}

func ExecuteLinguagem () {
	fmt.Println(
		addLinguagem(linguagem_Golang),
	)
}