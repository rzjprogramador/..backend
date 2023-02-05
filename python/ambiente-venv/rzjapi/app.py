from fastapi import FastAPI
from tinydb import TinyDB
from app.models.cliente.cliente import Cliente
from typing import List


app = FastAPI()

# CONNECT
clientesDB = TinyDB('db.json')

clientesMemory: List[Cliente] = []

@app.get('/clientes')
def getAllClientes():
  return clientesMemory


@app.post('/criar_cliente')
def criarCliente(cliente: Cliente):
  # clientesDB.insert(dict(cliente))
  return {'message': 'OK ! Criado com Sucesso!'}