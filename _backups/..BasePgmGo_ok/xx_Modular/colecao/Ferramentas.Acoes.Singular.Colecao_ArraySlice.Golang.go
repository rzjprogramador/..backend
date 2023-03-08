package colecao

var Instancia_colecao_do_modelador2 = []Modelador{Instancia_obj1, Instancia_obj2, Instancia_obj2}

// Acoes_Singulares ::
// acesso_PorPosicao_ItemObjeto_De_Forma_MagicaLiteral
// var acesso_PorPosicao_ItemObjeto_De_Forma_MagicaLiteral = Instancia_colecao_do_modelador2[0]
var acesso_PorPosicao_DO_VALOR_ItemObjeto_De_Forma_MagicaLiteral = Instancia_colecao_do_modelador2[0].Campo1 
// obs: acessar por ["nomeKey em string :: nao funciona em go"]


func Ferramentas_Acoes_Singular_Colecoes () string{
	// publicar := Instancia_colecao_do_modelador2
	// publicar := acesso_PorPosicao_ItemObjeto_De_Forma_MagicaLiteral
	publicar := acesso_PorPosicao_DO_VALOR_ItemObjeto_De_Forma_MagicaLiteral

	return publicar
}