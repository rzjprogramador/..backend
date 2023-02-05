from pydantic import BaseModel
from tinydb import TinyDB

outraDB = TinyDB('Outra.json')

class Outra(BaseModel):
  nome: str
  idade: int

# 1- CRIO UM DICIONARIO COM AS INFO DA INSTACIA 

request = { 'nome':'Rei', 'idade': 44 }

# 2 - FAZ FUNCAO QUE RECEBERA E APLICARÁ O OBJ EMPACOTADO DA CLASSE BASEMODEL

def InserirOutra(model: Outra):
  outraDB.insert( model )

# 3- EXECUTA A FUNCAO DEVOLVENDO O OBJ EM DICIONARIO/JSON 

InserirOutra(request)