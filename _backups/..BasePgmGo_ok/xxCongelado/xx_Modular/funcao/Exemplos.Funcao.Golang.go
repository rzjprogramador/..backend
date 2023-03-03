package funcao

import "fmt"

func exemploFuncaoAnonima() string{

	res := func () string{
		return "Sou uma Funcao anonima, para me executar coloque () depois do meu bloco !!!"
	}()

	return res

}

func PerformFuncaoAnonima() {
	fmt.Println(exemploFuncaoAnonima())
}