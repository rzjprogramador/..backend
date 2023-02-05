#!python3

lista = [1, 2, 3, 4, 5]

# MOSTRAR SOMENTE OS NUMEROS MAIORES DE 2 -------

# MODERNO FILTER
novaLista = filter(lambda x: x > 2, lista) 
print(list(novaLista))

# LEGADO FILTRAGEM COM FOR 
# for i in lista:
#   if i > 2:
#     print(i)

# ----------------------------------------------