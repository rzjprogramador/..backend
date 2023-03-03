package convencao

var ConvencaoNomeUniversal =  ConvencaoNome{
	Conceito: "nomes usar no singular ... deixar plural somente quando se referir a colecoes/Arrays",

	Nome_Do_Modulo_Principal_Gerenciador: "o nome do modulo pode ser em PascalCase somente o nome que desejar nao precisa colocar github.com",

	Nome_Projeto: "SnakeCase // no modulo: coloque um endereco onde quer que possam baixar seu modulo como uma lib ::ex: github.com/userGit/NomeProjetoLib ",

	Nome_Pacote: "camelCase",

	Nome_Pastas: "camelCase // o mesmo usado em pacotes/package",
	
	KeyMapeameada_Json: "camelCase dentro de aspas duplas se for uma string",

	Instancia_de_Json: "exemplo: instanciaJSON com a palavra JSON tudo maiuscula.",

	NomeArquivo: NomeArquivo{
		Nome_Arquivo_Model: ConvencaoArtefatoModel{
			EstiloNome: "SnakeCase",
			EstensaoNome: "#TODO",
			Sintaxe: "#TODO",
			Exemplo: "#TODO",
		},
		
		Nome_Arquivo_Objeto: ConvencaoArtefatoModel{
			EstiloNome: "camelCase",
			EstensaoNome: "camelCase.NomeDoSeuModelDeOrigem",
			Sintaxe: "entidade",
			Exemplo: "user",
		},
	},

	NomeFuncao: NomeFuncao{
		Nome_Funcao_Publica: ConvencaoArtefatoModel{
			EstiloNome: "SnakeCase",
			EstensaoNome: "#TODO",
			Sintaxe: "#TODO",
			Exemplo: "#TODO",
		},
		Nome_Funcao_Privada: ConvencaoArtefatoModel{
			EstiloNome: "camelCase",
			EstensaoNome: "#TODO",
			Sintaxe: "#TODO",
			Exemplo: "#TODO",
		},

		Nome_Funcao_Servical_Manipuladora_BaixoNivel: ConvencaoArtefatoModel{
			EstiloNome: "camelCase",
			EstensaoNome: "Handler / Manipular",
			Sintaxe: "Handler<objetivo>",
			Exemplo: "HandlerUser ()",
		},

		Nome_Funcao_Executadora_De_CasosDeServico: ConvencaoArtefatoModel{
			EstiloNome: "camelCase",
			EstensaoNome: "Execute",
			Sintaxe: "Execute<Objetivo>",
			Exemplo: "Execute<Objetivo>",
		},
	},

	NomesPropriedadesModelador: NomesPropriedadesModelador{
		ComValores_GeradosPeloSistema: ConvencaoArtefatoModel{
			EstiloNome: "SnakeCase",
			EstensaoNome: "Props",
			Sintaxe: "ObjetoProps",
			Exemplo: "UserProps",
		},
		ComValores_VindosDeParametrosUtilizador: ConvencaoArtefatoModel{
			EstiloNome: "SnakeCase",
			EstensaoNome: "Args",
			Sintaxe: "ObjetoArgs",
			Exemplo: "UserArgs",
		},
	},
}
