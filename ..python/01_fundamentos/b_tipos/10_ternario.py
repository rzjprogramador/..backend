# sintaxe_condicional_ternaria_em_linha: <RESPOSTA SE VERDADE> <CONDICAO - EXPRESSAO LOGICA> <RESPOSTA SE FALSO>
# possibilidades: '2 Respostas ... 1 para condicao verdade outra para condicao Falsa',

lockdow = True  # VAR AVALIADA
grana = 300 # VAR PARA A LOGICA DA CONDICIONAL

status = 'FICAR EM CASA' if lockdow and grana <= 100 else 'HUUU VOU SAIR!'
# <RESPOSTA SE VERDADE> < CONDICAO - EXPRESSAO LOGICA><if AVALIADO else>> <RESPOSTA SE FALSO>

print(status)
print(
    f'Minha grana é {grana}, o lockdow esta {lockdow} ... entao eu vou {status}')
