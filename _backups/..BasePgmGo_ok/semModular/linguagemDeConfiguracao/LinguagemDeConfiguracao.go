package main

import "fmt"

type LinguagemDeConfiguracao struct {
	Nome string
	PropagarArquivo string
}

var linguagemLUA = LinguagemDeConfiguracao{
	Nome: "Lua",
	PropagarArquivo: `luafile %`,
}

func main(
	fmt.Println(linguagemLUA)
)