from pydantic import BaseModel, Field, EmailStr

class User(BaseModel):
  nome: str = Field(...)
  email: EmailStr = Field(...)
  password: str = Field(...)
  foto: str = Field(...)

# MOSTRAR NA DOC COMO PODE SER PREENCHIDO O ENVIO

class Config:
  schema_extra = {
    'user': {
      'nome': 'NomeFoo',
      'email': 'EmailFoo',
      'password': 'senha',
      'foto': 'foto'
    }
  }