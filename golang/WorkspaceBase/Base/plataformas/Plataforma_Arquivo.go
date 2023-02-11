// package pac_plataformas
package main

import "fmt"

type Plataforma struct {
	nome string
	administradora string
	idiomaLinguagem string
	siteOficial string
	instalacao string
}

func addPlataforma(p Plataforma) Plataforma {
	plataformaGolang := p
	return plataformaGolang
}

var requestPlataformaGolang = Plataforma{
	nome: "Golang",
		administradora: "Google",
		idiomaLinguagem: "Golang",
		siteOficial: "https://go.dev/",
		instalacao: "#todo",
}

func main() {	
	fmt.Println(addPlataforma(requestPlataformaGolang))
}

// func ExecutePlataforma() {	
// 	fmt.Println(plataforma(requestPlataformaGolang))
// }