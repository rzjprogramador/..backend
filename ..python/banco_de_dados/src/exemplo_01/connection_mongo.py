from odmantic import AIOEngine, Model
from motor.motor_asyncio import AsyncIOMotorClient

from instancias import instances

# CONEXAO COM O BANCO
client = AsyncIOMotorClient("mongodb://localhost:27017/")
engine = AIOEngine(motor_client=client, database="BD_Jogo01")


class Player(Model):
    name: str
    game: str


# engine = AIOEngine()

jogo1 = Player(name="Jogo1", game="Foo")

async def save_player(jogo: Player):
  await engine.save(jogo)

save_player(jogo1)
