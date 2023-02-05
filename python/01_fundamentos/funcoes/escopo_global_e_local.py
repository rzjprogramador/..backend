#!python3
from pdb import set_trace

# ESCOPO GLOBAL E LOCAL

var = 7

def func():
  # print(var)
  global var # manipulando a var global fora do escopo
  var = 18 # foi definida dentro da funcao - é um novo escopo -esta encapsulada # se usar a global vai por este valor nela
  print(var)
  # set_trace()

func()
print(var)