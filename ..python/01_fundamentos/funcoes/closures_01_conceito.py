#!python3
from pdb import set_trace

"""
# CLOSURE ##
# UMA FUNCAO DENTRO DE UMA FUNCAO 
# PARA SER USADA :: 1 - INSTANCIA A EXTERNA PRA PODER CHAMAR A INTERNA

"""

def externa():
  # set_trace()
  def interna():
    print('42')
  return interna # a externa retorna a interna sem executar

# USO
instancia = externa() # 1 - INSTANCIA A EXTERNA PRA PODER CHAMAR A INTERNA
instancia()

# externa()