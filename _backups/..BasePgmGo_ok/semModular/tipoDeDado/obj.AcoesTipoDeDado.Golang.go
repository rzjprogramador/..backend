package main

var AcoesAllTipoDeDado_Golang = AcoesAllTipoDeDado{
	VerificarTipo: VerificarTipo{
		Dependencia: `import "reflect"`,
		UsoDependencia: `reflect.TypeOf( <target> )`,
		Saida: `mostra o tipo do alvo`,
		Exemplo: `fmt.Println(reflect.TypeOf(texto))`,
	},
}