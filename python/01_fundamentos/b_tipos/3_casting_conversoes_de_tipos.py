# conceito: todos tipos sao funcoes que ao envolver um alvo target passa o envolvido par ao tipo da funcao
# funcoes_de_tipos_conversores:
"""
# em todas funcoes de tipo passe o alvo target a ser convertido:
  str()
  int()
  float()
  list()
  set()
"""


# type(<target>)  :: type() mostra qual a classe do tipo alvo passado.
# str(<targetAlvo>)  :: str() converte para string o alvo passado
# int(<targetAlvo>)  :: str() converte para numero inteiro o alvo passado
# float(<targetAlvo>)  :: float() converte para numero decimal o alvo passado

# -----------------------/*    */-----------------------
# 

## EXEMPLOS: 
# convertendo para inteiro
onze = int('11')
print(onze)
print(type(onze))

# -----------------------/*    */-----------------------
# 
# convertendo para float
fooTexto = '10.5'
decimal = float(fooTexto)
print(decimal)
print(type(decimal))

# -----------------------/*    */-----------------------
# 
