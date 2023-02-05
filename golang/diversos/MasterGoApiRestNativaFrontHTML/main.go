package main

import (
	"html/template"
	"fmt"
	"log"
	"net/http"
)

var templates *template.Template

type Usuario struct {
	Nome string
	Email string
}

// var u = Usuario{"Reinaldo", "emailreinaldo@email.com"}

func feedbackServer() {
	fmt.Println("SERVER_ON : NA_PORTA: 5000 :: ")
	log.Fatal(http.ListenAndServe(":5000", nil))
}

func main() {
	templates = template.Must(template.ParseGlob("*.html"))

	http.HandleFunc("/home", func(res http.ResponseWriter, req *http.Request) {
		u := Usuario{"Reinaldo", "emailreinaldo@email.com"}
		templates.ExecuteTemplate(res, "home.html", u)
	})

	feedbackServer()
}
