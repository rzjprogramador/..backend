#!python3
from pdb import set_trace

"""
requerimento:
Quero dizer ola em varias linguas:

PAI = EXTERNA()  --- FILHA = INTERNA()

resumo: tudo qeu acontecer na Pai fica como heranca disponivel pra ser usada na filha..ao contrario nao.
- a funcao Pai só recebe seus argumentos, ams nao usa ela deixa disponivel para a filha.
- no seu escopo a Pai só deixa pronto o que sera o arg que a filha vai usar:
- a funcao interna > pode usar seus argumentos e do seu PAI tambem

"""

def externa(idioma): 
  # PAI RECEBE ARGS MAS NAO USA QUEM VAI USAR É A FILHA - DEPOIS DO PAI DEFINIR O QUE SERA O ARG
  # DEIXANDO FONTE DA DADOS QUE A FILHA VAI PODER USAR VIA ARGUMENTOS
  saudacoes = {'pt': 'Ola', 'en': 'Hello', 'esp': 'Ahoy'}

  def interna(nome):
    # FILHA USANDO SEUS ARGS E ARGS DO PAI TAMBEM.
    return '{} {}'.format(saudacoes[idioma], nome)

  return interna 
  # RETORNO DA FUNCAO PAI ## ESAT RETORNANDO A FILHA

# USO

# INSTANCIANDO A PAI - PARA USAR A FILHA
instanciaPT = externa('pt') 
instanciaEN = externa('en') 
instanciaESP = externa('esp') 

# USANDO A FILHA - COM AS INSTANCIAS DO PAI
print(instanciaPT('Reinaldo'))
print(instanciaEN('Gustavo'))
print(instanciaESP('Leonardo'))
