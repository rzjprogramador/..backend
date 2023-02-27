// package methods
package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"os"
)

type Modelo struct {
	Campo1   string `json:"campo1"`
	Campo2   string `json:"campo2"`
}

var arquivo = "/home/rzj/..backend/golang/methods_uteis/data_json/data.golang.json"

func UseLoadJson(f string) (*bytes.Buffer){
    jsonFile, err := os.Open(f)
    if err != nil {
        fmt.Println("Ops! Nao foi encontrado o arquivo json.", err)
    } else {
			fmt.Println("Ok Arquivo Json Carregado com Sucesso!")
		}
    defer jsonFile.Close()

    jsonForSliceBytes, _ := ioutil.ReadAll(jsonFile)

		objectModel := bytes.NewBuffer(jsonForSliceBytes)
		return objectModel
}

func main() {
    fmt.Println(UseLoadJson(arquivo))
}

/*
explicando: 

Funcao_Use_Load_File_Json:
	Abrir_Ler_Fechar_Arquivo_Json: `
	// Abrir_Ler_Fechar_Arquivo_Json:

	jsonFile, err := os.Open(f)
    if err != nil {
        fmt.Println("Ops! Nao foi encontrado o arquivo json.", err)
    } else {
			fmt.Println("Ok Arquivo Json Carregado com Sucesso!")
		}
    defer jsonFile.Close()
		`,

	Converter_Json_Carregado_Para_SliceDeBytes: `
	// Converter_Json_Carregado_Para_SliceDeBytes
	jsonForSliceBytes, _ := ioutil.ReadAll(jsonFile)
	`,

	Converter_SliceDeBytes_Para_ObjetoDoModelador: `
	// Converter_SliceDeBytes_Para_ObjetoDoModelador
	objectModel := bytes.NewBuffer(jsonForSliceBytes)
	`,




    

    

		arquivoBytes := bytes.NewBuffer(byteValue)
		return arquivoBytes
*/