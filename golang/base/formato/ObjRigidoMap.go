package formato

import "fmt"

func ObjRigidoMap() {
	usuarioMap := map[string]string{
		"nome":      "Reinaldo",
		"sobrenome": "Zacharias",
		"foo":       "bar",
	}

	fmt.Println(usuarioMap)

	fmt.Println(usuarioMap["nome"])

	delete(usuarioMap, "foo")
	fmt.Println(usuarioMap)
}

/*
CONCEITOS:
map é um objeto tipo json só que rigido.
declaracao: nomedoMap := map[tipoKey]tipoValue { props}
obs: todas as propriedades tem que ter virgula no final ... inclusive a ultima.

 - as chaves tem que ser todas do mesmo tipo declarado.
 - e os valores tem que ser todos do mesmo tipo declarado.
 exemplo se passou que as chaves serao string todas as chaves terao que ser strings
  se passou que os valores serao inteiro todas os valores terao que ser inteiros

	acessos:
	acessar_valor_de_chave : somente passando a chave como string
	fmt.Println(usuarioMap["nome"])

	deletar_prop_do_map:
	deletar uma prop do map com a funcao delete() 1º param o mapAlvo, 2º em string a chave/prop

	// acessar valor de chave : obs: somente passando a chave como string

	// deletar uma prop do map com a funcao delete() 1º param o mapAlvo, 2º em string a chave/prop

*/
