package tipagemGenerica

import "fmt"

type Entidade1 struct{
	campo1 string
	campo2 float64
}
type Entidade2 struct{
	campo1 bool
	campo2 bool
}
type Foo struct{
	campo1 float64
	campo2 string
	campo3 bool
}

type QuaisquerTipo interface{
	any
}
type UmDestesTipos interface{
	Entidade1 | Entidade2 | any
}

func generica_QuaisquerTipo [T QuaisquerTipo] (d T) T{
	res := d
	return res
}

func generica_UmDestesTipos [T UmDestesTipos] (d T) T{
	res := d
	return res
}

var obj1 = Entidade1{
	campo1: "texto",
	campo2: 77.77,
}
var obj2 = Entidade2{
	campo1: true,
	campo2: true,
}
var objFoo = Foo{
	campo1: 99.99,
	campo2: "texto",
	campo3: true,
}

func Execute_ExemplofuncaoGenerica () {
	// fmt.Println(generica_QuaisquerTipo(obj1))
	// fmt.Println(generica_QuaisquerTipo(obj2))
	// fmt.Println(generica_QuaisquerTipo(objFoo))

	fmt.Println(generica_UmDestesTipos(obj1))
	fmt.Println(generica_UmDestesTipos(obj2))
	fmt.Println(generica_UmDestesTipos(objFoo))

}