{
  criar_novar_tabela_e_migrar: `
  yarn prisma migrate dev --create-only    
  // para criar o arquivo de migração e modificá-lo manualmente para resolver os problemas subjacentes.

  perguntas :: Para confirmar se redefine o banco de dados em producao:

  Do you want to continue? All data will be lost.
  Você quer continuar? Todos os dados serão perdidos.
  SE ESCOLHER NAO VAI ENCERRAR ..SE ESCOLHER SIM ::
  - é criado o arquivo de migracao na pasta de migracoes
  // OBS SE FALHAR FAÇA ESTE PROCESSO DE NOVO.

  yarn prisma migrate dev

  RESULTADO: ELE ADD O CAMPO NOVO MAS ZEROU RESETOU TODOS OS DADOS QUE TINHAM NESTA TABELA DO BANCO

  MELHOR_DOS_MUNDO: ....??? >> CRIAR NOVO BANCO E SALVAR NOVOS E MIGRAR DADOS ANTIGOS OU TENTAR INTROSPECT DO PRISMA ALGO ASSIM...TA EM ABERTO #TODO
  `,
}