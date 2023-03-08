package main

var Use_TipoDeDado_Golang = TipoDeDado{
	Linguagem: "Golang",
	AcoesAllTipoDeDado: AcoesAllTipoDeDado_Golang,
	AllTipoDeDado: AllTipoDeDado{
		Primitivos{
			Boleano: ObjBoleanoGolang,

			Texto: ObjTextoGolang,

			CaractereUnico: ObjCaractereUnicoGolang,

			NumeroInteiro: ObjNumeroInteiroGolang,

			NumeroDecimal: ObjNumeroDecimalGolang,

		},

		Construidos{
			Erro: ObjErroGolang,
			AnyQualquerInterface: AnyQualquerTipoOuInterfaceGolang,
			Vazio_Void: Obj_Vazio_Void_Golang,
		},
		
	}, // AllTipoDeDado
}