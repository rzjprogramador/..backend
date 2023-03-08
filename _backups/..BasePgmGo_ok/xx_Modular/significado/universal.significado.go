package significado

// Instancias_Universal
var PiramideDoConhecimento = Significado{
	Palavra: "PiramideDoConhecimento",
	Sinonimos: []string{"Sabedoria", },
	Significado: "assistir, executar, ensinar, ai vai ter aprendido .",
	Exemplo: "#TODO",
}

var Estatico = Significado{
	Palavra: "Estatico",
	Sinonimos: []string{"NaoInformado", },
	Significado: "nao muda...nao tem copias, filhos nao  intanciavel, igual somar um numero por outro sem estar em variavel o resultado sera sempre o mesmo estatico... Usar_Statico: porque não quero criar outro objeto igual a este...somente este na App toda",
	Exemplo: "Exemplos_De_Statico:: metodosSaidaConsole, tiposPrimitivos, tiposAbstratos que dao origem ex: Pessoa,  os tiposPersonalizados nao porque vou querer diversos objetos deste tipo. ",
}

var implicito = Significado{
	Palavra: "implicito",
	Sinonimos: []string{"declaracao curta, short cut, inferencia", },
	Significado: "declaracao curta...vai inferir o tipo da variavel pelo valor que ela receber #preferencia",
	Exemplo: "usar o operador de atribuicao foquinha ```variavel := valor```",
}

var explicito = Significado{
	Palavra: "explicito",
	Sinonimos: []string{"declaracao verbosa, longa", },
	Significado: "nos minimos detalhes...verboso voce vai deixar tudo claro completo nos minimos detalhes.",
	Exemplo: "```var nomeVariavel tipo = valor // exemplo 2 :: var texto string = valor```",
}

var VariavelInstancia = Significado{
	Palavra: "VariavelInstancia",
	Sinonimos: []string{"dado", "variavel", "operando" , "expressao", "keyword" , "palavraChave", "parametroQuandoEmFuncao", "recuperador", "representacao", "referencia" , "capsula", "recipiente", "componente", "link para valor", "informacao", "instancia do seu valor atribuido", "casca do ovo que dentro tem o agema como valor", "encapsulador", "guardiao", "capturador", },
	Significado: "dado é um componente variavel que guarda informação de valor...o valor de uma informação tem que estar dentro de um dado/componente para ser utilizado, localizado via referência/representacao...que é uma instância do valor, é uma referência que da link a um valor ou dado variável.",
	Exemplo: "```// exemplo :: var texto string = valor```",
}

var keyword_palavra_chave_para_protecao_contra_reescrita_em_valor_de_variaveis = Significado{
	Palavra: "keyword palavra para chave protecao contra reescrita em valor de variaveis",
	Sinonimos: []string{"restricao", },
	Significado: "proteger um artefato/Variavel contra sobreescrita reatribuicoes...toda variavel nova ao ser declarada precisa antes ter uma palavra-chave um keyword para protege-la contra sobreescrita reatribuicoes.",
	Exemplo: "```// exemplo :: var texto = valor // const variavel = \"foo\"```",
}

var algoritmo = Significado{
	Palavra: "Algoritmo",
	Sinonimos: []string{"implementacao", },
	Significado: "design de codigo para resolver desafios, ou sequência de instruções ou comandos realizados de forma sistemática com a finalidade de resolver um problema ou executar uma determinada tarefa.",
	Exemplo: "#NAO_PRECISA",
}

var Formula = Significado{
	Palavra: "Formula",
	Sinonimos: []string{"Formula || Instrucao", "O que preciso fazer para gerar um resultado", "conjunto de expressoes com operacoes", },
	Significado: " conjunto de expressoes com operacoes.",
	Exemplo: `
	sintaxes: <operando/valor> <operador> <operando/valor>
	
	para dar o resultado de soma : num + num
	para dar o resultado de multiplicacao : num * num

	`,
}

var Funcao = Significado{
	Palavra: "Funcao",
	Sinonimos: []string{"comportamento", "acao", "tarefa", "feature", "funcionalidade", "procedimento," },
	Significado: "ambiente para utilizar de expressões, condicionais, e dar ou nao um retorno de resultado..tem as funcoes de leitura de dados e há de mostrar algo.",
	Exemplo: "#NAO_PRECISA",
}

var BlocoEscopo = Significado{
	Palavra: "BlocoEscopo",
	Sinonimos: []string{ "objeto_Inicialmente_Vazio", "escopo", },
	Significado: "objeto_Inicialmente_Vazio, escopo.",
	Exemplo: "#NAO_PRECISA",
}

var Argumentar = Significado{
	Palavra: "Argumentar",
	Sinonimos: []string{ "preencher com valor um parametro/recipienteVazio", },
	Significado: "objeto_Inicialmente_Vazio, escopo.",
	Exemplo: "#NAO_PRECISA",
}

var CLI_UsarFuncoesComando_De_Pacotes = Significado{
	Palavra: "CLI_UsarFuncoesComando_De_Pacotes",
	Sinonimos: []string{ "CLI", "Linha de Comando Via Terminal", },
	Significado: `Na linha de Comando do terminal :: UsarFuncoesComando_De_Pacotes ::
		PedirAjudaComoFuncionaOsComandos: nomeAlias_DoPacote -help
		SintaxeSequencia: pacote /funcao /Argumento,
		SintaxeComandoCLI:  :: <1 go /pacote> <2 run /funcao> <3 argumentando /preenchendoParametro/main.go>	
		ParametroOpcoesDaFuncso: geralmente vem com (1 ou 2 traços antes) - ou --parametro
	`,
	Exemplo: `
	Sintaxe: aliasPacote <command/funcao> [arguments/preencherArgumento]	
	// exemplo:: go <command> [arguments]

	npm install express // npm/pacote install/funcao express/argumento , narracao: "pacote instala oque?o express"
	`,
}


