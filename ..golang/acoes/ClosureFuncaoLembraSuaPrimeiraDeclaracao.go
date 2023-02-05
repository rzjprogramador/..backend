package acoes

import "fmt"

func closure() func() {
	foo := "bar >> primeira valor da primeira declaracao"

	capPrimeiraDeclaracao := func() {
		fmt.Println(foo)
	}
	return capPrimeiraDeclaracao
}

func MainClosure() {
	foo := "esta é outra foo ... deste escopo -- mas ele vai lembrar da var usada onde ele foi a priemira vez declarado...nao desta emsmo tendo o mesmo nome de var"

	fmt.Println(foo) // dado este print somente pro go nao reclamar que nao esta usando.

	funcaoNova := closure()
	funcaoNova()

}

/*
resumo: funcao closure é uma funcao que lembra das varaiveis e declaracoes onde ela nasceu e foi declarada, mesmo estando em outro escopo e com variaveis de nomes iguais familiares ela executara as variaveis de onde ela nasceu... nao se deixa influenciar e ond eela nasceu a promessa de reotrno tem que ser uam funcao ex: func()

closure
a funcao ao ser executada em outro escopo vai lembrar de tudo que foi declarado la onde ela nasceu ... e mesmo ela estando em outro escopo nao vai se deixar influenciar por variaveis que tenham o memsmo nome de onde ela veio ela vai executar o que esta la onde ela nasceu ..
para a closure funcionar a sua funcao d eorigem tem que prometer que vai retornar uma funcao ex: func()  ou seja : func closure() func() :: funcao closure vai retornar uma funcao
*/
