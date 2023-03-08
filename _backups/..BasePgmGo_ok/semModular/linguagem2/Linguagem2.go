package main

import "fmt"

func main() {
	fmt.Println(LinguagemDart)
}

type Linguagem struct{
	Nome string
	TemEscopoDeEntradaESaidaPrincipal bool
	QualEscopoDeEntradaESaidaPrincipal string
	Regras
	Arquivos
	ComandosDeSaida
	Variaveis
	Descobertas
	TiposDeDados
}

type Regras struct {
	ObrigatorioPontoeVirgulaACadaSentenca bool
}
type Arquivos struct {
	RodarArquivo string
}
type ComandosDeSaida struct {
	ViaConsole string
}

type Variaveis struct {
	PropsConceitoVariavel
	DeclaracaoVariavel string
	AspasAceitasEmString string
	AspasAceitasEmCaractereUnico string
}
type Descobertas struct {
	DescobrirValorViaConsole string
}
type TiposDeDados struct {
	TipoPrimitivo
}

type TipoPrimitivo struct {
	Boleano ModelTipo
	Texto ModelTipoTexto
	CaractereUnico ModelTipo
	Numeros
	Erro ModelTipo
	AnyQualquerInterface ModelTipo
	Vazio_Void ModelTipo
	Nulo ModelTipo
	Objeto ModelTipo 
}

type Numeros struct {
	QualquerNumero ModelTipo
	NumeroInteiro ModelTipo
	NumeroDecimal ModelTipo
}

type ModelTipo struct {
	Nome string
	Keyword string
	Representacao_PodeInstanciar string
	Conceito string
	ValorDefault_SeNadaForPassado string
	Exemplo string
}
type ModelTipoTexto struct {
	Keyword string
	Representacao_PodeInstanciar string
	ValorDefault_SeNadaForPassado string
	Exemplo string
	RepresentacoesTexto RepresentacaoTexto
	
}

type ModelUniversal_ModoPersonalizadoDaLinguagem struct{
	ModoUniversal Modos
	ModoPersonalizadoDaLinguagem Modos
}

type Modos struct {
	Conceito string
	Exemplo string
}

type RepresentacaoTexto struct {
	PularLinhas ModelUniversal_ModoPersonalizadoDaLinguagem
	Interpolar_Variavel_Em_Texto ModelUniversal_ModoPersonalizadoDaLinguagem
	Interpolar_ObjetoFuncao_Em_Texto ModelUniversal_ModoPersonalizadoDaLinguagem
	Caracteres_Especiais []string
	EscaparCaracteresEspeciaisEDeConflito ModelUniversal_ModoPersonalizadoDaLinguagem
}

// Props Fixas
type PropsConceitoVariavel struct {
	Significado string
	Sinonimos []string
}

// Objs para PropsFixas Universal
var SignificadoVariavel = "Local de amazenamento de valor na memoria... representado por um nome unico. "
var SinonimosVariavel = []string{"recipiente", "local_na_memoria", "link_para_valor", "referencia"}
var PularLinhaModoUniversal = Modos{
	Conceito: `com clausula \n dentro da mesma string pula a linha.`,
	Exemplo: `String pularLinha = "linha1\nLinha2\nlinha3";`,
}
var Interpolar_Variavel_Em_Texto_Universal = Modos{
	Conceito: "insira a string dentro de aspas apos o fechamento insira o sinal d e+ e a variavelDesejada",
	Exemplo: `"O valor da variavel interpolada é >> " + varFoo;`,
}

var Interpolar_ObjetoFuncao_Em_Texto_Universal = Modos{
	Conceito: `insira a string dentro de aspas apos o fechamento insira o sinal d e+ e a variavelDesejada.campo`,
	Exemplo: `const textoComObjeto = "meu texto2" + obj.chave1;`,
}

var Caracteres_Especiais_Universal = []string{"#TODO"}

var EscaparCaracteresEspeciaisEDeConflito_Universal = Modos{
	Conceito: `insira 1 barra invertida antes do caractere especial, obs: mesmo se o caractere especial for uma barra`,
	Exemplo: `\caractereEspecial`,
}


 /* *************************************************** */
// LINGUAGEM DART
var LinguagemDart = Linguagem{
	Nome: "Dart",
	TemEscopoDeEntradaESaidaPrincipal: true,
	QualEscopoDeEntradaESaidaPrincipal: `funcao main ex: void main() {}`,
	Regras: Regras{
		ObrigatorioPontoeVirgulaACadaSentenca: true,
	},

	ComandosDeSaida: ComandosDeSaida{
		ViaConsole: `funcao print() ex: print( oQueDesejaMostrar )`,
	},
	
	Arquivos: Arquivos{
		RodarArquivo: `dart <NOME_OU_ENDERECO/ARQUIVO.EXTENSAO>`,
	},
	Variaveis: Variaveis{
		PropsConceitoVariavel: PropsConceitoVariavel{
			Significado: SignificadoVariavel,
			Sinonimos: SinonimosVariavel,
		},
		DeclaracaoVariavel: `<tipo> <nome> = <valor> ex: String nome = "Reinaldo"`,
		AspasAceitasEmString: "dupla",
		AspasAceitasEmCaractereUnico: "simples",
	},
	Descobertas: Descobertas{
		DescobrirValorViaConsole: `variavel.runtimeType`,
	},

	TiposDeDados: TiposDeDados{
		TipoPrimitivo{
			Boleano: ModelTipo{
				Keyword: "bool",
				Representacao_PodeInstanciar: "true ou false",
				Conceito: "#TODO",
				ValorDefault_SeNadaForPassado: "false",
				Exemplo: "``` bool verdadeira = true```",
			},

			Texto: ModelTipoTexto{
				Keyword: "String",
				Representacao_PodeInstanciar: "textos dentro de obrigatorias aspas duplas",
				ValorDefault_SeNadaForPassado: `nulo :: null obs: no tipo da variavel tem que inserir '?' para aceitar nada ser passado ela ser opcional.`,
				Exemplo: `String texto = "meu texto"`,	

				RepresentacoesTexto: RepresentacaoTexto{
					PularLinhas: ModelUniversal_ModoPersonalizadoDaLinguagem{
						ModoUniversal: PularLinhaModoUniversal,
						ModoPersonalizadoDaLinguagem: Modos{
							Conceito: `cada string dentro de aspas, nao precisa  de + para concatenar linhas `,
							Exemplo: `ex: String pularLinhaEmDart = "linha1 \n" "linha2 \n" "linha3 \n";`,
						},
					}, // PularLinhas

					Interpolar_Variavel_Em_Texto: ModelUniversal_ModoPersonalizadoDaLinguagem{
						ModoUniversal: Interpolar_Variavel_Em_Texto_Universal,
						ModoPersonalizadoDaLinguagem: Modos{
							Conceito: `dentro da string insere o cifrao_seguido da variavelAlvo ex: $variavel`,
							Exemplo: `String Interpolar_Variavel_Em_Texto_Dart = "O valor é $varFoo";`,
						},
					}, // Interpolar_Variavel_Em_texto

					Interpolar_ObjetoFuncao_Em_Texto: ModelUniversal_ModoPersonalizadoDaLinguagem{
						ModoUniversal: Interpolar_ObjetoFuncao_Em_Texto_Universal,
						ModoPersonalizadoDaLinguagem: Modos{
							Conceito: `dentro da string insira o cifrao seguido de chave e dentro o objeto`,
							Exemplo: `String Interpolar_ObjetoFuncao_Em_Texto_Dart = "o valor do objeto é >> ${objFoo}";`, 
						},
					}, // Interpolar_ObjetoFuncao_Em_Texto

					Caracteres_Especiais: Caracteres_Especiais_Universal,

					EscaparCaracteresEspeciaisEDeConflito: ModelUniversal_ModoPersonalizadoDaLinguagem{
						ModoUniversal: EscaparCaracteresEspeciaisEDeConflito_Universal,
						ModoPersonalizadoDaLinguagem: Modos{
							Conceito: `#TODO`,
							Exemplo: `#TODO`,
						},
					} , // EscaparCaracteresEspeciaisEDeConflito
				}, // Linguagem 
			}, // texto // // TODO >> CONTINUAR TIPOS:

		}, // Primitivo
	}, // TIPOS DE DADOS

} // INICIO - FINAL >> Linguagem


/*
ANOTACOES TODO

***************************************************
TIPO OBJETO EM DART:
CriarNOvo: 
Conceito: criar seapradamente variaveis para cada campo, tipar na variavel que vai representa-lo tipar como Object e atribuir as variaveis criadas a cada campo.
Exemplo: `
var nome = 'rei';
  var numero = 10;
  Object objFoo = {nome, numero};
	`,
***************************************************
*/