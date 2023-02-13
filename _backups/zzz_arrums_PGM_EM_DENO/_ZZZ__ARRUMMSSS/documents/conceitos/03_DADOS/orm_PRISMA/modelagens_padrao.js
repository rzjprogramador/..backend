{
  campos_padrao: `
  // PADRAO SINTAXE TS
  id ?  : string
  idbd ? : string
  indexRef? : number
  createdAt :  Date
  updated    : Date
  ultimoLogin : Date
  
 

  // PADRAO SINTAXE PRISMA

  id          String?
  idbd        String    @id @default(uuid())
  indexRef    Int?      @default(autoincrement())
  createdAt   DateTime? @default(now())
  updated     DateTime? @updatedAt()
  ultimoLogin DateTime?

  @@index([nome])

  @@map("nome_tabela_plural")


    `;
}
