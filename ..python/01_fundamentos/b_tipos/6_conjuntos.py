
conjunto = { 1, 2, 3, 3, 3, 3 }
lista_com_duplicados = [ 100, 200, 300, 300, 300]

# obs: o conjunto set se tiver items duplicados ele nao repete na saida estes item duplicados

# importante: acesso por index posicao NÃO É PERMITIDO em conjuntos set

# utilidade: posso pegar uma lista que tem duplicados e converter em set que terei um set sem duplicados

print(type(conjunto)) # <class 'set'>

print(conjunto)

# converter lista de duplicados em set sem duplicados
set_SEM_duplicados_vindos_de_lista = set(lista_com_duplicados )
print(set_SEM_duplicados_vindos_de_lista)

# reconverter de set para lista, mas agora sem duplicados
lista_SEM_duplicados = list(set_SEM_duplicados_vindos_de_lista)
print(lista_SEM_duplicados)

# tentando acessar item do conjunto por index posicao --OBS: NÃO É POSSIVEL
# print(conjunto[1]) # TypeError: 'set' object is not subscriptable :: objeto não é subscritível

# ao acessar o tamanho do conjunto só mostra o tamanho com os items permitidos que nao sejam duplicado
print(len(conjunto))
