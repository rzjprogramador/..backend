package perguntarOperadores

import "fmt"

func Relacionais() {
	// Todos operadores retornam um boleano

	fmt.Println(1 == 1, "== totalmente igual ... 1 igual 1 ? ")
	fmt.Println(1 < 1, "< menor que ... 1 menor que 1 ? ")
	fmt.Println(1 <= 1, "<= menor igual que ... 1 menor ou igual a 1 ? ")
	fmt.Println(1 > 1, "> maior que ... 1 maior que 1 ? ")
	fmt.Println(1 >= 1, ">= maior igual que ... 1 maior ou igual a 1 ? ")
	fmt.Println(1 != 1, "!= diferente que ... 1 é diferente de 1 ? ")

}
