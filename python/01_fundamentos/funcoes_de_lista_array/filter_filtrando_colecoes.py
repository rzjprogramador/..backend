#!python3

# FILTER FILTRANDO COLECOES

numeros = [1, 2, 3, 4, 5]

menoresQueTres = filter(lambda x: x < 3, numeros) 
print(list(menoresQueTres))

"""
FILTER -- 
  conceito: filtra em colecoes com o iterador usando o iterador como referencia em uma condicao logica.
  recebe: 
    no 1º parametro: uma funcao anonima lambda com parametro iterador que "VAI RETORNAR": 
      tendo como referencia o iterador do momento , diga: "QUANDO O X "..." alguma condicao logica", 
    no 2º parametro: o alvo/parent a fonte de dados onde o iterador vai agir
"""