package main

import (
	"log"
	"fmt"
	"net/http"
)

func feedbackServer() {
	fmt.Println("SERVER_ON : NA_PORTA: 5000 :: ")
	log.Fatal(http.ListenAndServe(":5000", nil))
}

func HomeController(res http.ResponseWriter, req *http.Request) {
	res.Write([]byte("Hello Word >> HOME"))
}

func UsuariosController(res http.ResponseWriter, req *http.Request) {
	res.Write([]byte("Carregando dados do Usuario"))
}

func main() {
	http.HandleFunc("/home", HomeController)

	http.HandleFunc("/usuarios", UsuariosController)

	feedbackServer()
}
