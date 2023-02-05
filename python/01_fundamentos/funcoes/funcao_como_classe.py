#!python3
# 

class SomaClasse:
  def __call__(self, x, y):
    return x + y


# USO
instancia = SomaClasse() # CRIA UM OBJ DA CLASSE ## INSTANCIANDO

print(instancia(10, 10)) # COMO OBJ AGORA PODE USAR A FUNCAO QUE TEM NO SEU PROTOTIPO