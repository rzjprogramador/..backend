from pydantic import BaseModel

class Cliente(BaseModel):
  id: str
  nome: str
  email: str
  password: str


