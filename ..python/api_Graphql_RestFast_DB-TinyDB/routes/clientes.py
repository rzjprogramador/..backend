# from fastapi import FastAPI
# # from tinydb import TinyDB, Query
# from models.cliente.cliente import Cliente
# from typing import List


# app = FastAPI()

# # CONNECT
# # clientes = TinyDB("Clientes.json")

# clientesMemory: List[Cliente] = []

# @app.get('/clientes')
# def getAllClientes():
#   return clientesMemory


# @app.post('/criar_cliente')
# def criarCliente(cliente: Cliente):
#   # clientes.insert(dict(cliente))
#   return {'message': 'OK ! Criado com Sucesso!'}