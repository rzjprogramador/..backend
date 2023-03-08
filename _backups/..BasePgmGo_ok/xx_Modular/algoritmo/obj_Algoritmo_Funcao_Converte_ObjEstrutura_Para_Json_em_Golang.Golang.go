package algoritmo

var Obj_Algoritmo_Funcao_Converte_ObjEstrutura_Para_Json_em_Golang = Algoritmo_Funcao_Converte_ObjEstrutura_Para_Json_em_Golang{
	Converter_Em_ArrayDeBytes: `usar importar o pacote 'json'  deste modulo json desencadear a funcao Marshal(que recebe o objetoEstruturaALvo) vai devolver oObjetoRecebidoEmArrayDeBytes, eoErro`,
	
	TratarErro: `verificar se a variavelErro veio vazia :: if erro!= nil { log.Fatal(erro)} // se a varErro veio vazia da um fatal para estourar o erro`,

	Converter_ArrayDeBytesEmJson: `usar/importar pacote bytes , deste modulo bytes usar a funcao .NewBuffer(que recebera o arrayDeBytes)
	obs: para anotar como retorno da funcao este json vindo do pacote usado bytes anote o retorno da funcao isolado como :: (*bytes.Buffer)`,

	Exemplo: `
	// Transformar objetoDeEstruturaStruct em objetoJSON:
	 
	func transformarEmJSON(c Conversor) (*bytes.Buffer){
		bytesConversoremJSON, erro := json.Marshal(c)
		if erro != nil {
			log.Fatal(erro)
		}
		jsonConversoremJSON := bytes.NewBuffer(bytesConversoremJSON)
		return jsonConversoremJSON
	}
	`,
}