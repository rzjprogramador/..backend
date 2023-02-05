package loops

import "fmt"

func PrintarItems() {
	items := []string{"Reinaldo", "Renata", "Guga"}

	usePrintarItems(items)

}

func usePrintarItems(array []string) {
	for _, valor := range array {
		fmt.Println(valor)
	}
}
