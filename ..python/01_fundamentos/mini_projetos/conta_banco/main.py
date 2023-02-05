from conta.conta import ContaBanco

# USO DA CLASSE - INVOCACAO INSTANCIAMENTO
c1 = ContaBanco('Reinaldo', '111')

# USO DA INSTANCIA - ACOES DA INSTANCIA
# print(c1.saldo)
# c1.__saldo = 1000 # ERRO TENTANDO MANIPULAR DIRETAMENTE A PROP
#  COMO A PROP É PRIVADA NAO CONSIGO MANIPULA-LA DIRETAMENTE SÓ POR METODO
c1.depositarSaldo(200)
c1.depositarSaldo(20000)
c1.sacarSaldo(10000)

# VER SALDO FINAL
print(c1.mostrarSaldo())