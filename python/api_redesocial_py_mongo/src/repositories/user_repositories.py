# import asyncio
import motor.motor_asyncio
from decouple import config
from models.user import User

MONGO_URL = config('MONGO_URL')
clientDB = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URL)
database = clientDB.redesocial01

user_collection = database.get_collection('user')

async def CreateUserRepo(user: User) -> dict:
  try:
    create_user = await user_collection.insert_one(user.__dict__)
    new_user = await user_collection.find_one({"_id": create_user.inserted_id})

    # SÓ VISUALIZACAO
    return {
      'nome': new_user['nome'],
      'email': new_user['email'],
      'password': new_user['password'],
      'foto': new_user['foto']
    }

  except Exception as erro:
    print('Erro Inesperado Capturado')
