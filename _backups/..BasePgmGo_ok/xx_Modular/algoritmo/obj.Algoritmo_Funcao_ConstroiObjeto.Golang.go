package algoritmo

var Algoritmo_Funcao_ConstroiObjeto_Golang = AlgoritmoModel{
	Nome: "Algoritmo_Funcao_ConstroiObjeto",
		Passos: []string{
			"criar modelador :: struct do objeto",
			"criar funcao recebe e devolve *PonteiroDoModelador",
			"se for adicionar campo com valor fixo :: param.Campo = \"valor\"",
			"se quiser retornar o objetoCompleto só com os dados fixos adicionadosMagicamente só retornar o parametro",
			"use este algoritmo só se for preencher valroes com outros objetos, porque se for preencher Magicamente nao precisa criar um novo objeto.",
			"se for retornar outroObjeto com cada campo com o resultado de outra Funcionalidade() - instanciar cada funcionalidade - e agrupar estas instancias em objeto,obs: no valor a ser adicionadoinserir & por ser o valor para um ponteiro... exemplo: boleano := addBoleano(&ObjBoleanoGolang)",
			"agruparInstanciasemObjeto:: instancia o Modelador { e dentro dele as chaves com o *ponteiroDasIinstancias que serao seu valor}, sintaxe: objCreated := Modelador{ Chave: *instanciaValor, } e retorna este objCriado",
		},
	}