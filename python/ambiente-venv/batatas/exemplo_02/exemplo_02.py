from pydantic import BaseModel
from tinydb import TinyDB

exemplo01DB = TinyDB('Exemplo_02.json')

class Exemplo02(BaseModel):
  nome: str
  idade: int

request = { 'nome':'Rei', 'idade': 44 }

def InserirExemploNaTabela(model: Exemplo02):
  exemplo01DB.insert( model )

InserirExemploNaTabela(request)