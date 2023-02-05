import math

PI = math.pi

def dobraLista(lista):
  return [x * 2 for x in lista]

def multiplicaLista(lista):
  res = 1
  for i in lista:
    res *= i
  return res 

# TESTAR

if __name__ == '__main__':
  numeros = [1, 2, 3, 4, 5]
  print(dobraLista(numeros))
  print(multiplicaLista(numeros))
  print(PI)