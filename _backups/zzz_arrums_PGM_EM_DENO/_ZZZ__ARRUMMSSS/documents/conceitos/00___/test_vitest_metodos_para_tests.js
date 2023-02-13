
// PARA SUITES DE TESTS
{
  para_todos_tests_da_suite: `beforeEach(() => { // ..o que acontecer aqui vai acontecer antes para cada suite de test ... }`
}

// SUCESSO
{
  deve_ter_a_propriedade: `toHaveProperty('id')`,
  deve_ter_alguma_informacao: `toBeTruthy()`,

}

// FALHAS
{
  nao_deve_retornar_vazio: `not.toEqual('')`,
  nao_deve_retornar_nulo: `not.toBeNull()`,
  funcao_async: `
  .rejects.toEqual

  CHAMANDO UMA FUNCAO MAIS QUE UMA VEZ DEVE SER REJEITADA  E A REJEICAO IGUAL A ALGO USADO NA SUA ORIGEM com : .rejects.toEqual

  EXEMPLO:
  // ESTA FUNCAO DE CRIACAO SERA CHAMADA 2 VEZES E TEM QUE SER REJEITADA E A REJEICAO IGUAL A MENSAGEM
    await createClienteService.execute(clienteData)

    expect(createClienteService.execute(clienteData)).rejects.toEqual(new Error(MSG_EXCEPTION.INCORRECT))
  })
  `,
  

}