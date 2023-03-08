package main

import (
	"fmt"
)

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
		addLinguagem(Linguagem_Golang),
		addLinguagem(Linguagem_Dart),
	)
}

func main() {
	ExecuteLinguagem()
}

// OBJ LINGUAGEM GO
var Linguagem_Golang = Linguagems{
	Nome: "Golang",
	Extensao: ".go",
	PlataformasDeUso: []string{"Golang", },

	RegraDaLinguagem: RegraDaLinguagem{
		Declarar_OrigemModel_No_Uso_De_Cada_Objeto: RegraDaLinguagemModel{
			Nome: "Declarar_OrigemModel_No_Uso_De_Cada_Objeto",
			TemQueObedecer: true,
			Linguagem: "Golang",
			Conceito: "em golang no uso de Objeto a cada objeto encadeado colocar o referenciar o Model/struct que modelou este obejo encadeado ",
			Macete: "antes de cada chave referenciar o Model/struct que modelou este obejo encadeado",
			EvitarErro: "missing type in composite literalcompiler",
			traducaoDoErroEvitavel: "tipo ausente no compilador literal composto",
			Exemplo: "",
		},
		Inserir_Virgula_No_Uso_De_Cada_Objeto: RegraDaLinguagemModel{
			Nome: "Inserir_Virgula_No_Uso_De_Cada_Objeto",
			TemQueObedecer: true,
			Linguagem: "Golang",
			Conceito: "sempre no final do obj uma virgula.",
			Macete: "sempre no final do obj uma virgula.",
			EvitarErro: "missing ',' ",
			traducaoDoErroEvitavel: "faltando virgula no fim do objeto",
			Exemplo: "chave: valor, && chamadaFuncaoDentroDeObjeto(), && metodo1(), metodo2() , sempre no final do obj uma virgula.",
		},
		Colocar_Mais_Que_Um_Valor_Em_Variavel: RegraDaLinguagemModel{
			Nome: "Colocar_Mais_Que_Um_Valor_Em_Variavel",
			TemQueObedecer: false,
			Linguagem: "Golang",
			Conceito: "#AindaNaoEPossivelNaLinguagem",
			Macete: "#AindaNaoEPossivelNaLinguagem",
			EvitarErro: "#AindaNaoEPossivelNaLinguagem",
			traducaoDoErroEvitavel: "#AindaNaoEPossivelNaLinguagem",
			Exemplo: "#AindaNaoEPossivelNaLinguagem",
		},
	
		Ignorar_Parametro_Variavel: RegraDaLinguagemModel{
			Nome: "Ignorar_Parametro_Variavel",
			TemQueObedecer: true,
			Linguagem: "Golang",
			Conceito: "inserir handerline _ quando nao quer usar um parametroVariavel",
			Macete: "#AindaNaoEPossivelNaLinguagem",
			EvitarErro: "#AindaNaoEPossivelNaLinguagem",
			traducaoDoErroEvitavel: "#AindaNaoEPossivelNaLinguagem",
			Exemplo: "#AindaNaoEPossivelNaLinguagem",
		},

		Isolamento: []string{"Isolar em declaracoes use parenteses", "Isolar para ter novas funcionalidade isoladamente :: isole em blocoDeFuncao", },

	},// RegraDaLinguagem

	InstanciacaoDeVariavel: InstanciacaoDeVariavel{
		Variaveis: Declarar_Variaveis{
			Variavel_implicita_Curta: Sintaxe{
				Declaracao: Declaracao{
					Nome: "Variavel_implicita_Curta",
					SintaxeDeclaracao: "<protecao> <nome> = <valor>",
					ExemploDeclaracao: "var var1 = \"foo\"",
				},
				UsoDoDeclarado: UsoDoDeclarado{
					SintaxeUsarDeclarado: "nomeDavariavel",
					ExemploUsoDoDeclarado: "apos declarada e atribuida :: a variavel vira uma referencia/link para um valor :: entao :: posso usa-la como: [parametro_de_alguma_funcao, retorna_la, operando_para_logicas, ] ",
				},
			},
		
			Variavel_Dinamica_Curta: Sintaxe{
				Declaracao: Declaracao{
					Nome: "Variavel_Dinamica_Curta",
					SintaxeDeclaracao: "<nome> := <valor>",
					ExemploDeclaracao: "var1 := \"foo\"",
				},
				UsoDoDeclarado: UsoDoDeclarado{
					SintaxeUsarDeclarado: "nomeDavariavel",
					ExemploUsoDoDeclarado: "apos declarada e atribuida :: a variavel vira uma referencia/link para um valor :: entao :: posso usa-la como: [parametro_de_alguma_funcao, retorna_la, operando_para_logicas, ] ",
				},
			},
		
			Variavel_Explicita_Verbosa: Sintaxe{
				Declaracao: Declaracao{
					Nome: "Variavel_Explicita_Verbosa",
					SintaxeDeclaracao: "<protecao> <nome> <tipo> = <valor>",
					ExemploDeclaracao: "var var1 string = \"foo\"",
				},
				UsoDoDeclarado: UsoDoDeclarado{
					SintaxeUsarDeclarado: "nomeDavariavel",
				},
			},
		
			Variaveis_Multiplas_Por_JustaPosicao: Sintaxe{
				Declaracao: Declaracao{
					Nome: "Variaveis_Multiplas_Por_JustaPosicao",
					SintaxeDeclaracao: "<protecao> <var1, var2, var3> <tipo> = <valor1, valor2, valor3>",
					ExemploDeclaracao: "var num1, num2, num3 uint = 10, 20, 50 \n // a declaracao e preenchimento de valor sao por justa posicao conforme declarados.",
				},
				UsoDoDeclarado: UsoDoDeclarado{
					ExemploUsoDoDeclarado: "apos declarada e atribuida :: a variavel vira uma referencia/link para um valor :: entao :: posso usa-la como: [parametro_de_alguma_funcao, retorna_la, operando_para_logicas, ] ",
				},
			},
		}, // Declarar_Variaveis
	}, // PrincipaisSintaxes

}

// OBJ LINGUAGEM DART
var Linguagem_Dart = Linguagems{
	Nome: "Dart",
	Extensao: ".dart",
	PlataformasDeUso: []string{"Dart", },

	RegraDaLinguagem: RegraDaLinguagem{
		Declarar_OrigemModel_No_Uso_De_Cada_Objeto: RegraDaLinguagemModel{
			Nome: "Declarar_OrigemModel_No_Uso_De_Cada_Objeto",
			TemQueObedecer: true,
			Linguagem: "Dart",
			Conceito: "",
			Macete: "",
			EvitarErro: "",
			traducaoDoErroEvitavel: "",
			Exemplo: "",
		},
		Inserir_Virgula_No_Uso_De_Cada_Objeto: RegraDaLinguagemModel{
			Nome: "Inserir_Virgula_No_Uso_De_Cada_Objeto",
			TemQueObedecer: true,
			Linguagem: "Golang",
			Conceito: "sempre no final do obj uma virgula.",
			Macete: "sempre no final do obj uma virgula.",
			EvitarErro: "missing ',' ",
			traducaoDoErroEvitavel: "faltando virgula no fim do objeto",
			Exemplo: "chave: valor, && chamadaFuncaoDentroDeObjeto(), && metodo1(), metodo2() , sempre no final do obj uma virgula.",
		},
		Colocar_Mais_Que_Um_Valor_Em_Variavel: RegraDaLinguagemModel{
			Nome: "Colocar_Mais_Que_Um_Valor_Em_Variavel",
			TemQueObedecer: false,
			Linguagem: "Golang",
			Conceito: "#AindaNaoEPossivelNaLinguagem",
			Macete: "#AindaNaoEPossivelNaLinguagem",
			EvitarErro: "#AindaNaoEPossivelNaLinguagem",
			traducaoDoErroEvitavel: "#AindaNaoEPossivelNaLinguagem",
			Exemplo: "#AindaNaoEPossivelNaLinguagem",
		},
	
		Ignorar_Parametro_Variavel: RegraDaLinguagemModel{
			Nome: "Ignorar_Parametro_Variavel",
			TemQueObedecer: true,
			Linguagem: "Golang",
			Conceito: "inserir handerline _ quando nao quer usar um parametroVariavel",
			Macete: "#AindaNaoEPossivelNaLinguagem",
			EvitarErro: "#AindaNaoEPossivelNaLinguagem",
			traducaoDoErroEvitavel: "#AindaNaoEPossivelNaLinguagem",
			Exemplo: "#AindaNaoEPossivelNaLinguagem",
		},

		Isolamento: []string{"Isolar em declaracoes use parenteses", "Isolar para ter novas funcionalidade isoladamente :: isole em blocoDeFuncao", },

	},// RegraDaLinguagem

	InstanciacaoDeVariavel: InstanciacaoDeVariavel{
		Variaveis: Declarar_Variaveis{
			Variavel_implicita_Curta: Sintaxe{
				Declaracao: Declaracao{
					Nome: "Variavel_implicita_Curta",
					SintaxeDeclaracao: "<protecao> <nome> = <valor>",
					ExemploDeclaracao: "var var1 = \"foo\"",
				},
				UsoDoDeclarado: UsoDoDeclarado{
					SintaxeUsarDeclarado: "nomeDavariavel",
					ExemploUsoDoDeclarado: "apos declarada e atribuida :: a variavel vira uma referencia/link para um valor :: entao :: posso usa-la como: [parametro_de_alguma_funcao, retorna_la, operando_para_logicas, ] ",
				},
			},
		
			Variavel_Dinamica_Curta: Sintaxe{
				Declaracao: Declaracao{
					Nome: "Variavel_Dinamica_Curta",
					SintaxeDeclaracao: "<nome> := <valor>",
					ExemploDeclaracao: "var1 := \"foo\"",
				},
				UsoDoDeclarado: UsoDoDeclarado{
					SintaxeUsarDeclarado: "nomeDavariavel",
					ExemploUsoDoDeclarado: "apos declarada e atribuida :: a variavel vira uma referencia/link para um valor :: entao :: posso usa-la como: [parametro_de_alguma_funcao, retorna_la, operando_para_logicas, ] ",
				},
			},
		
			Variavel_Explicita_Verbosa: Sintaxe{
				Declaracao: Declaracao{
					Nome: "Variavel_Explicita_Verbosa",
					SintaxeDeclaracao: "<protecao> <nome> <tipo> = <valor>",
					ExemploDeclaracao: "var var1 string = \"foo\"",
				},
				UsoDoDeclarado: UsoDoDeclarado{
					SintaxeUsarDeclarado: "nomeDavariavel",
				},
			},
		
			Variaveis_Multiplas_Por_JustaPosicao: Sintaxe{
				Declaracao: Declaracao{
					Nome: "Variaveis_Multiplas_Por_JustaPosicao",
					SintaxeDeclaracao: "<protecao> <var1, var2, var3> <tipo> = <valor1, valor2, valor3>",
					ExemploDeclaracao: "var num1, num2, num3 uint = 10, 20, 50 \n // a declaracao e preenchimento de valor sao por justa posicao conforme declarados.",
				},
				UsoDoDeclarado: UsoDoDeclarado{
					ExemploUsoDoDeclarado: "apos declarada e atribuida :: a variavel vira uma referencia/link para um valor :: entao :: posso usa-la como: [parametro_de_alguma_funcao, retorna_la, operando_para_logicas, ] ",
				},
			},
		}, // Declarar_Variaveis
	}, // PrincipaisSintaxes

}