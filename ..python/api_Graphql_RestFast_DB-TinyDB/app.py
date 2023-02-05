from handlers.clientes_db import CreateClienteDB
from models.cliente import Cliente

from fastapi import FastAPI
from typing import List


app = FastAPI()

clientesMemory: List[Cliente] = []

@app.get('/clientes')
def getAllClientes():
  return clientesMemory


@app.post('/criar_cliente')
def createCliente(cliente: Cliente):
  CreateClienteDB(cliente)
  return {'message': 'OK ! Criado com Sucesso!'}