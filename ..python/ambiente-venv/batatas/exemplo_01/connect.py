from tinydb import TinyDB
from model import Pessoa

pessoaDB = TinyDB('Exemplo_01.json')

def InserirPessoa(pessoa: Pessoa):
  pessoaDB.insert(
    {
      'nome': pessoa.nome,
      'idade': pessoa.idade,
      'CPF': pessoa.CPF
    }
  )