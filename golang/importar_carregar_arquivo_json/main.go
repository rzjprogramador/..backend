package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"strconv"
)

/*  Estrutura ***************************************************  */
// Users struct which contains
// an array of users
type Users struct {
	Users []User `json:"users"`
}

// User struct which contains a name
// a type and a list of social links
type User struct {
	Name   string `json:"name"`
	Type   string `json:"type"`
	Age    int    `json:"Age"`
	Social Social `json:"social"`
}

// Social struct which contains a
// list of links
type Social struct {
	Facebook string `json:"facebook"`
	Twitter  string `json:"twitter"`
}

/*  ***************************************************  */


var caminhoRelativoArquivo = "importar_carregar_arquivo_json/data_json/users.json"

func Load_LerArquivoJson(f string) {
    // Open our jsonFile
    jsonFile, err := os.Open(f)
    // if we os.Open returns an error then handle it
    if err != nil {
        fmt.Println(err)
    }

    fmt.Println("Sucesso em Ler users.json")
    // defer the closing of our jsonFile so that we can parse it later on
    defer jsonFile.Close()

    // read our opened xmlFile as a byte array.
    byteValue, _ := ioutil.ReadAll(jsonFile)

    // we initialize our Users array
    var users Users

    // we unmarshal our byteArray which contains our
    // jsonFile's content into 'users' which we defined above
    json.Unmarshal(byteValue, &users)

    // we iterate through every user within our users array and
    // print out the user Type, their name, and their facebook url
    // as just an example
    // var arrayDeUsers []Users // array de users para tenatr preencher a cada loop
    for i := 0; i < len(users.Users); i++ {
        fmt.Println("User Type: " + users.Users[i].Type)
        fmt.Println("User Age: " + strconv.Itoa(users.Users[i].Age))
        fmt.Println("User Name: " + users.Users[i].Name)
        fmt.Println("Facebook Url: " + users.Users[i].Social.Facebook)
        
        // tentando montar um objeto para retorno::
        // arrayDeUsers = User{
        //     Name: "User Name: " + users.Users[i].Name,
        //     Type: "User Type: " + users.Users[i].Type,
        //     Age: "User Age: " + strconv.Itoa(users.Users[i].Age),
        //     Social: Social{
        //         Facebook: "Facebook Url: " + users.Users[i].Social.Facebook,
        //         Twitter:"Twitter Url: " + users.Users[i].Social.Twitter,
        //     },

        // } // fim :  // tentando montar um objeto para retorno::
    }
    // return  arrayDeUsers // tentado retornar algo do for

}
func main() {
    // fmt.Println(Load_LerArquivoJson(caminhoRelativoArquivo)) // com retorno
    Load_LerArquivoJson(caminhoRelativoArquivo) // usando os printsConsole retornados

}