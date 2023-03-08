package main

import (
	main1 "github.com/rzjprogramador/PgmBase/main"
	"github.com/rzjprogramador/PgmBase/testerModularizacaoSubPastas/objeto1"
	"github.com/rzjprogramador/PgmBase/testerModularizacaoSubPastas/objeto2"
)

type ExecuteTesterObjetosModSubPastasType struct {
	objeto1.ObjType1
	objeto2.ObjType2
}


func main() {
	main1.ShowObject(ExecuteObjetosModSubPastas())
}
	
func ExecuteObjetosModSubPastas() ExecuteTesterObjetosModSubPastasType{
	return ExecuteTesterObjetosModSubPastasType{
		objeto1.Obj1,
		objeto2.Obj2,
	}
}
