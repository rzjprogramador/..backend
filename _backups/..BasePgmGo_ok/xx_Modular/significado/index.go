package significado

import "fmt"

type Significado struct {
	Palavra string
	Sinonimos []string
	Significado string
	Exemplo string
}

var collectionSignificados = []Significado{}

func addSignificado (s Significado) []Significado{
	adicionados := append(collectionSignificados, s)
	return adicionados
}

func getAllSignificado () string{
	instanceCollectionSignificados := fmt.Sprintf("%#v", collectionSignificados)
	return instanceCollectionSignificados
	// TODO NAO ESTA MOSTRANDO OS VALORES DOS STRUCTRS NO ARRAY
}

func ExecuteSignificado () {
	addSignificado(Estatico)
	addSignificado(declaracao_em_Golang)
	addSignificado(explicito)
	addSignificado(implicito)
	addSignificado(VariavelInstancia)
	addSignificado(keyword_palavra_chave_para_protecao_contra_reescrita_em_valor_de_variaveis)
	addSignificado(algoritmo)

	fmt.Println( getAllSignificado()	)
}