package formato

type FormatoModelo1 struct {
	nome string
	idade uint
	casado bool
}

func FormatoModeloObjeto () FormatoModelo1 {
	objeto1 := FormatoModelo1 {
		nome: "Rei",
		idade: 45,
		casado: true,
	}
	return objeto1
}