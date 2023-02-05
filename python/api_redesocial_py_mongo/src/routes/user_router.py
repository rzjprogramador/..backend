from fastapi import APIRouter, Body
from models.user import User
from repositories.user_repositories import CreateUserRepo

user_router = APIRouter()

@user_router.get('/inicio')
def Inicio():
  return { 'messagem': 'Inicio User' }

@user_router.post('/create', response_description = 'Rota para criar Usuario')
async def CreateUserRepo(user: User = Body(...)):
  result = await CreateUserRepo(user)
  return result
  # {
  #   "message": "User criado com Sucesso"
  # }