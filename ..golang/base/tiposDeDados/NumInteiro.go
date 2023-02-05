package tiposDeDados

import "fmt"

func NumInteiro() {
	
	// uint : Aceita Negativos
	var numeroInt int = 100
	var numero8 int8 = -100
	var numero16 int16 = 100_00
	var numero32 int32 = -100_000
	var numero64 int64 = 100_0000_000

	//uint : Nao aceita Numeros Negativos 
	// uint ou intValorQueSuporta em Bytes e x: uint8
	var numero_uint uint = 100
	var numero_uint8 uint8 = 100
	var numero_uint16 uint16 = 100_00
	var numero_uint32 uint32 = 100_000
	var numero_uint64 uint64 = 100_0000_000

	fmt.Println("numeroInt >> ", numeroInt)
	fmt.Println("numero8 >> ", numero8)
	fmt.Println("numero16 >> ", numero16)
	fmt.Println("numero32 >> ", numero32)
	fmt.Println("numero64 >> ", numero64)

	fmt.Println("numero_uint >> ", numero_uint)
	fmt.Println("numero_uint8 >> ", numero_uint8)
	fmt.Println("numero_uint16 >> ", numero_uint16)
	fmt.Println("numero_uint32 >> ", numero_uint32)
	fmt.Println("numero_uint64 >> ", numero_uint64)

}

/*

	* Obs: Pra definir o tamanho em bytes tem que ser explicita a declaracao, se inferir com := ele vai pelo sistema operacional a definicao dos bytes.

	* alias: apelidos para int8 é "byte" // alias apra int32 é "rune" 

	* so_num_positivos: uint : O uint Nao aceita Numeros Negativos 

	* numeros_positivos_e_negativos: int :: o int Aceita Numeros Positivos e Negativos = int ou intValorQueSuporta em Bytes ex: int8

	inferencias: 
	- valor_default:
 se declarar e nao passar valor .. o GO infere o valor default para numeros como 0 zero.
 
 - quando fazemos inferencia :=  ou colocamos apenas int ele infere para a quantidade d ebytes que tem seu sistema operacional no caso se seu sistema tem 64 bytes ele assume 64 bytes.

	*/


