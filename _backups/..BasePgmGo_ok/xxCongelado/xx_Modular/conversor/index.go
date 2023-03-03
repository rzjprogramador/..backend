package conversor

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
)

type Conversor struct{
	ConceitoConversaoEntreTipos string
	MapearAvisarStructQueVaiReceberTalKeyemJSON string
	De_ObjetoStruct_Para_JSON string
	
}

var instanciaDeModeladorStructEmJSONGolang = Conversor{
	ConceitoConversaoEntreTipos: `Conversao entre tipos temq ue primeiro pegar o alvo a converter e transformar em []bytes, exemplo objetoDeEstrutura para Json priemiro tem que converter para []bytes e depois pegar o []bytes e passar outra funcaoDeModulo que converta os bytes para a saida desejada ex: para json usar o pacote bytes`,

	MapearAvisarStructQueVaiReceberTalKeyemJSON: `no campo do struct apos o tipo anotar entre 'crazes' como vai querer em json o nome da key. Podemos usar dentro das crazes a anotacao :: json: "nomeDaKeyMapeada" ou somente dentro de crazes o nome da keyMapeada. Observacao #Preferencia::NAO PRECISA USAR :: este procedimento é só para poder mudar no arquivo json o nome das keys de um modo que atenda as convencoes de minuscula no arquivo json , nao preciso usar senao quiser assim deixarei o nome das keys iguais do struct original Maiuscula se desejar exportar este struct`,

	De_ObjetoStruct_Para_JSON: `
	// usa o pacote json.Marshal() transformara o objStruct para bytes[]
	json.Marshal(objStruct) 
	// devolverá :: []bytes, erro , instancie-os e trate-os"

	// agora que esta em bytes[] transofrmar em json com o pacote bytes.NewBuffer(arrayDeBytes)
	bytes.NewBuffer(arrayDeBytes) 
	// usar o pacote bytes .NewBuffer( recebe o arrayDeBytesAlvo // devolve o recebido em json

		// Depois converto para string( alvo )
		// Depois uso o json.UnMarshal( alvo ) -- convertendo para objetoStruct novamente
	
	`,

}

func transformarEmJSON(c Conversor) (*bytes.Buffer){
	bytesConversoremJSON, erro := json.Marshal(c)
	if erro != nil {
		log.Fatal(erro)
	}
	jsonConversoremJSON := bytes.NewBuffer(bytesConversoremJSON)
	return jsonConversoremJSON
}

// func addConversor(c Conversor) Conversor{
// 	return c
// }

func ExecuteConversor() {
	// fmt.Println(addConversor(conversor_Golang))
	// fmt.Println(addConversor(instanciaDeModeladorStructEmJSONGolang))
	fmt.Println(transformarEmJSON(instanciaDeModeladorStructEmJSONGolang)) // devolve array de []bytes
}

/*
RecomendacaoInstanciacaoModeladorTageadoParaJson: "nao fazer um objetoDeEstrutura se o modelador estiver tagado para json fazer um objJSON",

Instanciar_Struct_Ja_Mapeada_As_Keys_Para_Json: "ao instanciar em objeto inserir somente os valores.",
*/

/* 
	Implementacao_Funcao_Converte_ObjEstrutura_Para_Json_em_Golang: 
		Converter_Em_ArrayDeBytes: `usar importar o pacote 'json'  deste modulo json desencadear a funcao Marshal(que recebe o objetoEstruturaALvo) vai devolver oObjetoRecebidoEmArrayDeBytes, eoErro`,
		
		TratarErro: `verificar se a variavelErro veio vazia :: if erro!= nil { log.Fatal(erro)} // se a varErro veio vazia da um fatal para estourar o erro`

		Converter_ArrayDeBytesEmJson: `usar/importar pacote bytes , deste modulo bytes usar a funcao .NewBuffer(que recebera o arrayDeBytes)` // obs: para anotar como retorno da funcao este json vindo do pacote usado bytes anote o retorno da funcao isolado como :: (*bytes.Buffer)`,

		Exemplo: ``

	*/