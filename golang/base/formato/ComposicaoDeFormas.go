package formato

import "fmt"

func ComposicaoDeFormas() {
	type Pessoa struct {
		nome   string
		idade  uint8
		altura float32
	}

	type Estudante struct {
		Pessoa

		curso     string
		faculdade string
	}

	pessoa1 := Pessoa{"Reinaldo", 45, 1.80}
	pessoa2 := Pessoa{"Gustavo", 12, 1.40}

	estudante1 := Estudante{pessoa1, "progracão", "faculdade da vida"}
	estudante2 := Estudante{pessoa2, "cientista de dados", "faculdade da mente"}

	fmt.Println(pessoa1)
	fmt.Println(pessoa2)

	fmt.Println(pessoa1.nome)
	fmt.Println(pessoa2.nome)

	fmt.Println(estudante1)
	fmt.Println(estudante2)

	fmt.Println(estudante1.nome)
	fmt.Println(estudante1.faculdade)
}

/*

topico: ""Heranca de Estruturas,

entrada: "criando estrutura struct , na heranca Pessoa se adicionar aqui uma chave este objeto para acessar as info tera niveis de objeto"

descricao: "use somente para entidades coesas que "É UM" ex: use Pessoa para Estudante porque Estudante é uma Pessoa",

aplicabilidade: "Herdar de forma coesa campos de uma outra estrutura",

existentes: "struct",

processamento:
 narracao: " ",
 acao: "Uso Instanciacao: cada estrutura tem que ser instanciada separada, primeiro a que provem , segundo a que herda. obs: sempre apssar o nome da estrutura antes de encher dar valro as props.

	// uso das Estruturas : criando objInstancia

	// uso da heranca nas instancias somente : cria a instancia e atribuiu outra instancia adicionando os campos que faltam apos a heranca de estrutura. ",

saida:
	output: " // obs: na saida:: os objetos estaram dentro de chaves separadas , mas vc consegue acessar sem niveis de objetos",

*/
