package formato

import "fmt"

type Usuario struct {
	nome      string
	sobrenome string
	idade     uint8
	estado    bool
}

func StructModeloEstrutura() {

	// struct formaDeUso1
	usuario1 := Usuario{
		nome:      "Reinaldo",
		sobrenome: "Zacharias",
		idade:     45,
		estado:    true,
	}

	// struct formaDeUso2
	var usuario2 Usuario
	usuario2.nome = "Renata"
	usuario2.idade = 40

	fmt.Println(usuario1) // outup: {Reinaldo Zacharias 45 true}

	fmt.Println(usuario2) // output: {Renata "" 40 false}

	// acesso a props separadas das instanciasObjeto
	fmt.Println(usuario1.nome)
	fmt.Println(usuario2.nome)
}

/*
* conceito: struct é tipo uma classe com new : é um modelo em tipagem de um objeto entidade.
* aplicabilidade: seu uso resulta na criacao de objetosInstancia modelados por ele a estrutura struct.
* obs: em Go nao tem classes esta estrutura é o que mais se assemelha.

// declaracao struct : a declaracao pode ser feita fora do escopo da funcao.

	obs: senao passar todos valores da estrutura ele devolve os valores inicias default das props que estao faltando.


*/
