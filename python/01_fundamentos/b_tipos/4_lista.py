# print('Hello Listas')

numeros = [1, 2, 3]

# OBS: ALGUMAS FUNCIONALIDADES QUE FUNCIONAM NAS LISTAS TAMBEM FUNCIONAM EM TUPLAS

# -----------------------/*    */-----------------------
# 
## FUNCIONALIDADES::

# adicionar novo item na lista
numeros.append(4)

# -----------------------/*    */-----------------------
# 
# atualizar modificar item na lista pelo indice obs: os dados sao mutaveis no py
numeros[0] = 100

# -----------------------/*    */-----------------------
# 
# inserir novo item pelo indice da lista : metodo: insert(indice, itemHaAdicionar)
numeros.insert(3, -200)

# -----------------------/*    */-----------------------
# 
# pegar o ultimo elemento da lista quando nao se sabe o tamanho dela com [-1] que vem de traz para frente
print(f'O Ultimo item é {numeros[-1]}')

# -----------------------/*    */-----------------------
# 
# obs: pode vir pegando o penultimo, penultimo conforme vai aumentando o -1, -2, -3 :: exemplo 
# pegar ante-penultimo
print(f'O penultimo é {numeros[-2]}')  

# -----------------------/*    */-----------------------
# 
# ver tamanho da lista
print(len(numeros))

# -----------------------/*    */-----------------------
# 
# conferir se há especifico item na lista com operador in :: obs: seu retorno é logico Falso ou Verdade
print(3 in numeros)  # True :: tem o numero 3 na lista numeros

# -----------------------/*    */-----------------------
# 
# print(type(numeros))  # resposta: <class 'list'>
print(numeros)

# -----------------------/*    */-----------------------
# 