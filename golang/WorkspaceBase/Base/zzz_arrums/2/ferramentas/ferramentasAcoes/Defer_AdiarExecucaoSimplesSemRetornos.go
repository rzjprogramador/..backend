package ferramentasAcoes

import (
	"log"
)

func funcao1() {
	log.Println("valor funcao 1")
}

func funcao2() {
	log.Println("valor funcao 2")
}

func ExecuteDeferAdiarExecucao() {
	defer funcao1()
	funcao2()
}

/*
clausula defer

resumo: o que usa a clausula defer ou sera executado por ultimo ou antes do primeiro return ... entao ela adia a execucao ou mostra algo por default de onde onde se tem retiurn quem ganhar a concorrencia e retorna algo primeiro ..pode ser usada como mensagem ou algo a ser mostrado de forma  generica.

significado: adiar execucao, deixar para depois, adiar ate o ultimo momento possivel em uma funcao sem retorno...o ultimo momento possivel é onde terminar a funcao que esta há usando.

conceito:
se definir a clausula defer antes de uma funcao ela vai adiar deixar para depois a execucao desta funcao executando outras priemiro que esta na fila.

obs: ela tambem vai ser executada antes de um retorno return
se a clausula defer/adiar estiver dentro de uma funcao que vai ter return ela sera executada antes deste primeiro return sendo ele false ou true.

aplicabilidade: posso usar o defer para executar por ultimo uma funcionalidade... ou para mostrar/executar algo antes de um retorno no ambiente onde ela se encontra ex: uma mensagem default que tem que aparecer mesmo se o resultado da funcao principal seja true ou false.

casos_de_uso:
posso usar o defer para fechar uma conexao com o bancoDeDados
eu abriria a conexao com o banco e abaixo ja deixo um defer que fecha a conexao...ai independente do sucesso ou nao da conexao ja garanto que a conexao sera fechada porque o defer estara esperando um resultado de return true ou false da conexao do Banco.

as leituras que voltam d eum banco tambem ..apos voltar com sucesso ou nao temq eu ser fechados.

*/
