package ferramentasNativas

import "fmt"

func MakeDadoNaMemoria() {
	criarSliceDeNumerosNaMemoria := make([]uint32, 5, 9)

	fmt.Println(len(criarSliceDeNumerosNaMemoria)) 
	
	fmt.Println(cap(criarSliceDeNumerosNaMemoria)) 
}

/*
// funcao len(alvo) :: funcao len() mostra o tamanho do alvo passado

// funcao cap(alvo) :: funcao cap mostra a capacidade o alvo passado 

funcao make(tipo, tamanho, capacidade)
funcao make() cria qualquer dado na memoria.package ferramentasNativas

ela recebe o tipo do dado que vai ser criado, o tamanho inicial deste dado, e a capacidade limite que podera ter
*/
