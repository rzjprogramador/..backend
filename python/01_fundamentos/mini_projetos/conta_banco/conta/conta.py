from helpers.messages import StaticMSG

class ContaBanco:
  __saldo = 0

  def __init__(self, nome, senha):
    self.__nome = nome
    self.__senha = senha

  def stateSaldo(self, valor: float) -> str:
    if valor < 0:
      return f'{StaticMSG.FAIL} sr. {self.__nome} está com saldo esta NEGATIVO com {self.__saldo}'
    return f'{StaticMSG.OK} sr. {self.__nome} {self.__senha} está com saldo esta POSITIVO com {self.__saldo}'

  def mostrarSaldo(self):
    return self.stateSaldo(self.__saldo)

  def depositarSaldo(self, valor: float):
    newSaldo = self.__saldo + valor
    self.__saldo = newSaldo
    return newSaldo

  def sacarSaldo(self, valor: float):
    self.__saldo = self.__saldo - valor

  
