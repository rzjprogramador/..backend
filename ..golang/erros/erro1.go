package erros

import (
	"fmt"
	"log"
	"net/http"
)

func MainErro1() {
	res, err := http.Get("http://google.com.br")

	if err != nil {
		log.Fatal(err.Error())
	}
	fmt.Println(res)
}
