package ferramentasTecnicas

import "log"

func PoloUnicoPonteiro() {
	var variavelPonteiro *string
	useVarPonteiro := &variavelPonteiro
	log.Println(*useVarPonteiro)

	varPonteiro2 := 10
	useVarPonteiro2 := &varPonteiro2
	log.Println(*useVarPonteiro2)

	varPonteiro2 = 100
	log.Println(*useVarPonteiro2)
}

/*
resumo: o ponteiro nao guarda valor ele guarda um endereco de memoria com o valor pra vc acessar o valor guardado nele vc tem que usar o "*" asteristico. e quem quiser ter este valorVerdade tem que ter sido antes atribuido com "&" .

conceito: a var ponteiro aponta um endereco na memoria um poloUnicoDaVerdade que ao ser compartilhado atribuido com "&" leva sempre o valor atual do estado da variavelPonteiro que é o poloUnicoDaVerdade desta variavel.
quem tiver usando este valor com & sempre estara tendo o valor atual do poloUnicoPonteiro

declaracao_ponteiro: em verbosa colocar "*" no tipo na decalracao curta nao precisa.
uso:
quem for usar o valor deste poloUnicoPonteiro ao possui-lo colocar antes "&" na atribuicao

uso_explicado:
na_declaracao_verbosa: da var ponteiro/poloUnico use "*" no tipo
para usa-la como valor use o "&" exemplo: &nomeDaVarPonteiro
se ler esta varPonteiro vai ver que ela retorna um endereco na memoria ex: 0xc0000a0018
se precisar ler o valor que esta lá neste endereço use novamente o "*" para desrefrenciar o valor.

na_declaracao_curta: nao precisa colocar o "*" para apontar que é um ponteiro
basta apenas no uso da var em outro lugar adicioanr antes o "&" que
e sempre que for usar a var que recebeu como valor atribuido o ponteiro vai ter que usar "*" anets do seu nome para acessar o valor que vem do poloUnicoPonteiro
*/
