package funcaoTecnicas

var TecnicaFuncaoDefensiva_TratandoErroGolang = TecnicaFuncaoDefensiva{
	NomeTecnica: "TecnicaFuncaoDefensivaGolang",
	Conceito: `"em golang nao tem tryCatch para proteger e capturar possiveis erros, entao fazemso esta programacaoDefensiva :: com Tratamento_Devolvendo_Cheio_Ou_Vazio_PossivelErro_E_PossivelAcerto"`,
	Diferencial: "em golang nao tem tryCatch{} entao tratamentos os Erros com funcoesDefensivas.",
	NaFuncaoCaseDeServico: `declaro prometendo nas consequencias retornar o acerto, e o tipo error
	- aqui ja prometi 2 retornos, entao em cada blocoDeConsequencia contando com o verificador ja tenho que retornar 2 variaveis o acerto ou materialmente o valor Zero, e no segundo param algo que trate o erro.
	- implemento: a logica pra me dar o resultado
	- defensiva: verifico o que pode dar erro na minha regraDeNegocio... 
	se for verdade este erro ..retorno um ValorZero como se nada tivesse feito materialmente, e o tratamento do erro prometido no 2 param do retorno nesta consequencia. :: devolverei um novoErro Personalizado com o pacote errors .New("Mensagem do erro para log.")
	e depois o resultado esperado da minha logica de acerto, e como é outra consequencia no 2º param um vazio pro erro prometido na declaracao da funcao.`,

	NaHandleQueUsaAFuncaoCaseServico: `implementar: chamar a funcaoCaseServico que preciso e instancio para um acerto ou erro
	- assim ja prometi em uma consequencia o tratamento dado a possivel erro , ou outra consequencia dando o resultado doa certo esperado.
	verificacao_de_tratamento: se vier algo no erro :: trato dando um log.Fatal( err.Error() pedindo o erro personalizado que assim preparei.)
	Senao retorno o acerto`,

	Exemplo: `
	package funcao

	import (
		"errors"
		"fmt"
		"log"
	)

	func somaCase(x int, y int) (int, error){
		res := x + y
		if res > 12 {
			return 0, errors.New("mensagem Erro:: Ops è maior que 10 nao pode")
		}
		return res, nil
	}

	func handlerSomaDefensiva (x int, y int) int{
		res, err := somaCase(x, y)
		if err != nil {
			log.Fatal(err.Error())
		}
		return res
	}

	func ExecuteSoma() {
		fmt.Println(handlerSomaDefensiva(10, 1))
	}`,

}