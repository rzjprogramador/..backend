
# armazenando existentes
usuarios = ['reinaldo', 'gustavo', 'leonardo']
senhas = ['111', '222', '333']

# Permitir que existentes possam fazer login
resposta = input('[1] - Cadastrar novo usuario, [2]- Fazer login: ')

# recebendo um usuario
usuario_digitado = input('digite seu usuario : ')
senha_digitada = input('Digite sua senha: ')

  # guardando inseridos em uma lista do seu tipo
if resposta == '1':
  usuarios.append(usuario_digitado)
  senhas.append(senha_digitada)
  print(f'usuario {usuario_digitado} :: cadastrado com sucesso')

# permitir existentes fazer login

elif resposta == '2':
  encontrado = False
  for indice, item in enumerate(usuarios):
    if usuario_digitado == usuarios[indice] and senha_digitada == senhas[indice]:
      encontrado = True
      print('login feito com sucesso')
      
    elif encontrado == False:
      print('usuario ou senha incorreta')
      break


# verificar todos existentes
# for usuario in usuarios:
#   print(usuario)

