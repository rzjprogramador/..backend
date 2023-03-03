// package testes

// import (
// 	"BasePgmGo/utils"
// 	"fmt"
// )

// type Testes struct{
// 	Args ArgsTestes
// 	Props PropsTestes	
// }

// type ArgsTestes struct{
// 	NomeDoArquivo string
// 	Assinatura_DaFuncaoDeTestDa_NativaDaLinguagem string
// 	ObrigatoriedadeNoNomeDaFuncao string
// }
// type PropsTestes struct{
// 	TiposDeTestes PropsTiposDeTestes
// }

// type PropsTiposDeTestes struct{
// 	TestUnitario string
// 	TestDeIntegracao string
// }

// var fileTesteGolangJson = "/home/rzj/..BasePgmGo/testes/data/testes_golang.json"

// func addTestes () Testes{
// 	argsJson := utils.UseLoadJsonV2(fileTesteGolangJson)

// 	newObj := Testes{
// 		Args: argsJson, //#TODO
// 		Props: PropsTestes{
// 			PropsTiposDeTestes{
// 				TestUnitario: "TestUnitario foo",
// 				TestDeIntegracao: "TestDeIntegracao foo",
// 			},
// 		},
// 	}
// 	return newObj
// }

// func ExecuteTestes() {
// 	fmt.Println(addTestes())
// }