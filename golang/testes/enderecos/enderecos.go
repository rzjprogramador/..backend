package enderecos

import "strings"

func TipoEnderecos(endereco string) string {
	enderecosValidos := []string{"rua", "avenida", "logradouro"}

	enderecoEmMinuscula := strings.ToLower(endereco)

	primeiraPalavraEndereco := strings.Split(enderecoEmMinuscula, " ")[0]

	enderecoTemTipoValido := false

	for _, tipo := range enderecosValidos {
		if tipo == primeiraPalavraEndereco {
			enderecoTemTipoValido = true
		}
	}

	if enderecoTemTipoValido {
		return strings.Title(primeiraPalavraEndereco)
	}
	return "tipo invalido"

}

/*

 */
