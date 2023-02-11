package tiposDeDados

import "fmt"

func NumFloat() {
	// num float : Só existe 32 e 64 e ambos aceitam negativo e positivo
	var numFloat32 float32 = 100.77
	var numFloat64 float64 = 100.99
	var numNegativoFloat32 float32 = -100.77
	var numNegativoFloat64 float64 = -100.99

	fmt.Println("numFloat32 >> ", numFloat32)
	fmt.Println("numFloat64 >> ", numFloat64)
	fmt.Println("numNegativoFloat32 >> ", numNegativoFloat32)
	fmt.Println("numNegativoFloat64 >> ", numNegativoFloat64)

}

/*

 */
