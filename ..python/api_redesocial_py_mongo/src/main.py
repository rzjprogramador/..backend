from os import link
from fastapi import FastAPI
from routes.user_router import user_router

app = FastAPI()

# INCLUINDO ROTA DE USER
app.include_router(user_router, tags=['Usuarios'], prefix='/api/usuario',)