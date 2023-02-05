# criar tupla :: obs ao inves de colchetes o delimitador sao parenteses ()
# obs: os dados nas tuplas sao imutaveis, nao é possivel adicionar item nem editar os ja existentes

# -----------------------/*    */-----------------------
# 
nomes = ('Reinaldo', 'Renata', 'Gustavo', 'Eduardo', 'Victor')

# ----------------------------------------------------------------------------
# PRINTS CONSOLE
print('reinaldo' in nomes) 
# vai retornar False porque o item na tupla comeca com letra Maiuscula é case sensitive o operador in tem que passar exatamente a pesquisa

# ----------------------------------------------------------------------------
# -----------------------/*  ACESSOS PESQUISA DENTRO DE LISTAS E TUPLAS */-----------------------
# conceito posicoes dentro dos colchetes: 
# A direita passamos <INICIO> :  a esquerda passamos <FIM> da pesquisa

# Posicao a esquerda antes da atribuicao pega a posicao passada
# "NADA PASSADO" A DIREITA APOS OS 2PONTOS PEGA O ULTIMO
# -1 >> posicao A DIREITA APOS ATRIBUICAO pega o penultimo
# -2 >> posicao A DIREITA APOS ATRIBUICAO pega o antepenultimo

# -----------------------/*    */-----------------------
# 
# acessar item na tupla pelo indice posicao
print(nomes[1]) # 'Renata'

# ----------------------------------------------------------------------------
## acessando pela posicao intercalada no exemplo abaixo da posicao 1 ao 3 entao seria do 2º ao 3º item
print(nomes[1:3]) # ('Renata', 'Gustavo')

# pegando do SEGUNDO AO PENULTIMO item da tupla
print(f'Do SEGUNDO ao PENULTIMO item da tupla nomes são: {nomes[1:-1]}') 

# pegando do SEGUNDO AO ULTIMO item da tupla
print(f'Do SEGUNDO ao ULTIMO item da tupla nomes são: {nomes[1:]}') 

# pegando todos apartir do 2º item
print(f'Pegando todos apartir do 2º item {nomes[2:]}')

# PASSANDO NADA A ESQUERDA INICIO :: pegando todos apartir do 2º item
print(f'PASSANDO NADA A ESQUERDA INICIO ::  {nomes[:2]}')

# pegando o ultimo item da tupla
print(f'O ultimo item da tupla nomes é: {nomes[-1]}') 

# -----------------------/*    */-----------------------
# 
# obs: quando se acessa pela posicao somente 1 item o py adiciona virgula no final para diferenciar que é uma tupla e nao um type string
# exemplo:
x = ('Bia')
t = ('Bia',)
# -----------------------/*    */-----------------------
# 
print(f'O tipo de pesquisa unica sem virgula é string - confira:: {type(x)}')
print(f'O tipo de pesquisa unica se ADICIONAR virgula apos o item é tuple - confira:: {type(t)}')

# -----------------------/*    */-----------------------
# 
print(type(nomes))
print(nomes)