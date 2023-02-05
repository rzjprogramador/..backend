from models.cliente import Cliente
from tinydb import TinyDB

# CONNECT
clientesDB = TinyDB('Clientes.json')

def CreateClienteDB(cliente: Cliente):
  return clientesDB.insert(dict(cliente))
