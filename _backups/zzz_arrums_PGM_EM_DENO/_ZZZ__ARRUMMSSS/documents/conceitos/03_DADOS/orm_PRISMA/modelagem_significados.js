
funcoes de modelagem: {
  data_de_criacao: 'DateTime @default(now())',

data_de_atualizacao: "DateTime @updatedAt()  // definira a data de atualizacao",

index: "@@index([nome])  // para conseguir consultar por este campo",

definir_nome_da_tabela_no_banco: '@@map("users")',




}