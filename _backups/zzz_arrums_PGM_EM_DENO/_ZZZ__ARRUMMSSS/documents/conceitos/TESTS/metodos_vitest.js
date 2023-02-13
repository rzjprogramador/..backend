{
  caso_objetivo_test: 'caso de sucesso',
  objetivo: 'deve ...'
  conceito: `Aguardo e Espero que a resolucao da promessa nao retorno erro de excessao `,
  metodo: `.resolves.not.toThrow()`,
  sintaxe: `await expect( <ACAO>).resolves.not.toThrow()`,
  exemplo: `
  await expect(
    clienteFisico.execute({ nome: 'any_nome', sobrenome: 'any_sobrenome' }),
  ).resolves.not.toThrow()
  `,
},

{
  caso_objetivo_test: 'caso de falha',
  objetivo: 'nao deve ...'
  conceito: `Espero que este array esteja vazio `,
  metodo: `.resolves.toThrow()`,
  sintaxe: `expect(CLASSE_SUT.ARRAY_INMEMORY).toEqual([])`,
  exemplo: `
  await expect(
    clienteFisico.execute(NOT_ClienteFisico_UM_HARD_SEED),
  ).rejects.toThrow()

  expect(clienteFisicoRepositoryInMemory.collectionClienteFisico).toEqual([])
  `,
}