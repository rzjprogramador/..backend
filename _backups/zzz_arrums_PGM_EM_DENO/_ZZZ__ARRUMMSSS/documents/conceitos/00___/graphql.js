requisicoes_disponiveis: {
  com_apollo_server: `http://localhost:7777/graphql`,
}

// ======================
ferramentas: {
  condicionais: {
    possibilidades: [
      'diretiva > @include para incluir ',
      'diretiva > @skip para pular ',
    ],
    diretivas: `diretivas >> cria uma variavel boleana no front playground -- declara no parametro do Nome da Consulta e da valor nos args... usa como condicional para qualquer campo , obs: na declaracao tem que colocar obrigatorio depois do tipo !`,
    exemplo: `

    // declaracao no nome da Funcionalidade Consulta
    $nomeDaDiretivaSobreOCampo: Boolean!
    
    // na frente da variavel alvo onde perde para retornar::
    @include(if: $nomeDaDiretiva)

    // configurar valor no Query Variables Json:
    {
      "nomeDaDiretiva": valor
    }
    `,
  },
}