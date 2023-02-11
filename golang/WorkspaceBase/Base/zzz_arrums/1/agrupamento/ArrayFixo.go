package agrupamento

import "fmt"

func ArrayFixo() {
	var arrayFixo1 [3]string
	fmt.Println(arrayFixo1)

	arrayFixo2 := [3]uint16{10, 20, 30}
	fmt.Println(arrayFixo2)

	arrayFixaRecebidos := [...]int{50, 60, 70}
	fmt.Println(arrayFixaRecebidos)

}

/*

arrayFixo === agrupamento de valores fixos decalrados ou sem limites inseridos

sintaxe:
	demilitador: ao contrario de outras linguagens o
	demilitador de valores sao chaves {} .
	delimitador de de declaracao é  [] colchetes.

declaracoes:
	declarar_sem_valores:
se declarar definir posicoes e nao passar valores vai criar array com os valores iniciais do tipo do dado.

declaracao_curta:
se declarar curto com a atribuicaoFoquinha tem que popular passar os valores

ilimitados_items_na_primeira_insercao:
recebendo itemsIlimitados com "..."  3 pontos e depois nao pode muda mais: ex:
arrayFixaRecebidos := [...]int{50, 60, 70}


*/
