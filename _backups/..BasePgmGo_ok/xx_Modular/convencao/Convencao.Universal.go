package convencao

import "fmt"

type ConvencaoNome struct {
	Conceito string
	Nome_Do_Modulo_Principal_Gerenciador string
	Nome_Projeto string
	Nome_Pacote string
	Nome_Pastas string
	KeyMapeameada_Json string
	Instancia_de_Json string
	NomeArquivo NomeArquivo
	NomeFuncao NomeFuncao
	NomesPropriedadesModelador NomesPropriedadesModelador
}

type ConvencaoArtefatoModel struct{
	EstiloNome string
	EstensaoNome string
	Sintaxe string
	Exemplo string
}

type NomeArquivo struct{
	Nome_Arquivo_Model ConvencaoArtefatoModel
	Nome_Arquivo_Objeto ConvencaoArtefatoModel
}
type NomeFuncao struct{
	Nome_Funcao_Publica ConvencaoArtefatoModel
	Nome_Funcao_Privada ConvencaoArtefatoModel
	Nome_Funcao_Servical_Manipuladora_BaixoNivel ConvencaoArtefatoModel
	Nome_Funcao_Executadora_De_CasosDeServico ConvencaoArtefatoModel
}
type NomesPropriedadesModelador struct{
	ComValores_GeradosPeloSistema ConvencaoArtefatoModel
	ComValores_VindosDeParametrosUtilizador ConvencaoArtefatoModel
}

func addconvencao(c ConvencaoNome) ConvencaoNome{
	return c
}

func ExecuteConvencao() {
	fmt.Println(addconvencao(ConvencaoNomeUniversal))
}